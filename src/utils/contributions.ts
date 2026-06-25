import type { GithubContributionPayload, ContributionStats } from '../types/portfolio';

export function createFallbackContributionData() {
    return Array.from({ length: 26 }, (_, week) =>
        Array.from({ length: 7 }, (_, day) => {
            const seed = (week * 19 + day * 13 + week * day) % 11;

            if (seed < 2) {
                return 0;
            }

            if (seed < 4) {
                return 1;
            }

            if (seed < 7) {
                return 2;
            }

            if (seed < 9) {
                return 3;
            }

            return 4;
        }),
    );
}

export function createFallbackContributionPayload(): GithubContributionPayload {
    const weeks = createFallbackContributionData();

    return {
        username: 'Swa-ne',
        fetchedAt: new Date().toISOString(),
        months: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        weeks,
        totalContributions: weeks.flat().filter((cell) => cell > 0).length,
        stats: getContributionStats(weeks),
    };
}

export function isGithubContributionPayload(value: unknown): value is GithubContributionPayload {
    if (!value || typeof value !== 'object') {
        return false;
    }

    const payload = value as Partial<GithubContributionPayload>;

    return (
        typeof payload.username === 'string' &&
        typeof payload.fetchedAt === 'string' &&
        Array.isArray(payload.months) &&
        payload.months.every((month) => typeof month === 'string') &&
        Array.isArray(payload.weeks) &&
        payload.weeks.every((week) => Array.isArray(week) && week.every((cell) => Number.isInteger(cell) && cell >= 0 && cell <= 4)) &&
        typeof payload.totalContributions === 'number' &&
        Boolean(payload.stats) &&
        typeof payload.stats?.activeDays === 'number' &&
        typeof payload.stats?.activeWeeks === 'number' &&
        typeof payload.stats?.currentStreak === 'number' &&
        typeof payload.stats?.longestStreak === 'number'
    );
}

export function getContributionStats(contributionData: number[][]): ContributionStats {
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
