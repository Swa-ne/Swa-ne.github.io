import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const username = process.env.GITHUB_CONTRIBUTIONS_USER || 'Swa-ne';
const token = process.env.GH_CONTRIBUTIONS_TOKEN || process.env.GITHUB_TOKEN;
const outputPath = path.resolve('public', 'github-contributions.json');

const levelMap = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
};

if (!token) {
    throw new Error('Missing GH_CONTRIBUTIONS_TOKEN or GITHUB_TOKEN. Add a GitHub token before running this script.');
}

const to = new Date();
const from = new Date(to);
from.setMonth(from.getMonth() - 6);

const query = `
query GitHubContributions($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        months {
          name
          year
          firstDay
          totalWeeks
        }
        weeks {
          contributionDays {
            date
            contributionCount
            contributionLevel
            weekday
          }
        }
      }
    }
  }
}
`;

const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Swa-ne-portfolio-github-activity',
    },
    body: JSON.stringify({
        query,
        variables: {
            login: username,
            from: from.toISOString(),
            to: to.toISOString(),
        },
    }),
});

if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed: ${response.status} ${response.statusText}`);
}

const result = await response.json();

if (result.errors?.length) {
    throw new Error(`GitHub GraphQL returned errors: ${JSON.stringify(result.errors)}`);
}

const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;

if (!calendar) {
    throw new Error(`No contribution calendar found for ${username}.`);
}

const weeks = calendar.weeks.map((week) => {
    const days = Array.from({ length: 7 }, () => 0);

    week.contributionDays.forEach((day) => {
        days[day.weekday] = levelMap[day.contributionLevel] ?? 0;
    });

    return days;
});

const stats = getContributionStats(weeks);
const months = calendar.months.map((month) => month.name.slice(0, 3));

const payload = {
    username,
    fetchedAt: new Date().toISOString(),
    months,
    weeks,
    totalContributions: calendar.totalContributions,
    stats,
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(`Wrote ${outputPath} for ${username} with ${calendar.totalContributions} contributions.`);

function getContributionStats(contributionData) {
    const flatCells = contributionData.flat();
    const activeDays = flatCells.filter((cell) => cell > 0).length;
    const activeWeeks = contributionData.filter((week) => week.some((cell) => cell > 0)).length;

    let currentStreak = 0;
    for (let index = flatCells.length - 1; index >= 0; index -= 1) {
        if (flatCells[index] === 0) {
            break;
        }

        currentStreak += 1;
    }

    let longestStreak = 0;
    let runningStreak = 0;
    flatCells.forEach((cell) => {
        if (cell > 0) {
            runningStreak += 1;
            longestStreak = Math.max(longestStreak, runningStreak);
            return;
        }

        runningStreak = 0;
    });

    return {
        activeDays,
        activeWeeks,
        currentStreak,
        longestStreak,
    };
}
