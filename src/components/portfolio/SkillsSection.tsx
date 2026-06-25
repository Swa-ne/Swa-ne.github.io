import type { ContributionLoadStatus, ContributionStats, StackGroup } from '../../types/portfolio';
import { SectionTitle } from './shared/SectionTitle';

interface SkillsSectionProps {
    stackGroups: StackGroup[];
    contributionMonths: string[];
    contributionData: number[][];
    contributionStats: ContributionStats;
    contributionStatus: ContributionLoadStatus;
}

const contributionStatusLabels: Record<ContributionLoadStatus, string> = {
    loading: 'Loading GitHub',
    live: 'Live from GitHub',
    fallback: 'Offline fallback',
};

export function SkillsSection({ stackGroups, contributionMonths, contributionData, contributionStats, contributionStatus }: SkillsSectionProps) {
    return (
        <section id='skills' className='section-layout'>
            <SectionTitle kicker='Skills' title='Resume-aligned stack across web, mobile, backend, cloud, and AI.' />

            <div className='skills-layout'>
                <div className='skills-grid'>
                    {stackGroups.map((group) => (
                        <article key={group.title} className='token-card skill-group-card'>
                            <div className='skill-group-head'>
                                <div>
                                    <p className='mini-label'>Stack group</p>
                                    <h3>{group.title}</h3>
                                </div>
                                <span>{group.items.length} tools</span>
                            </div>

                            <div className='chip-list'>
                                {group.items.map((item) => (
                                    <span key={`${group.title}-${item}`} className='chip'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <article className='token-card contribution-card'>
                    <div className='card-head compact-head'>
                        <div>
                            <p className='mini-label'>GitHub activity</p>
                            <h3>Consistency over time</h3>
                        </div>
                        <span className={`activity-note ${contributionStatus === 'fallback' ? 'is-fallback' : ''}`}>{contributionStatusLabels[contributionStatus]}</span>
                    </div>

                    <div className='activity-stats-grid'>
                        <article className='activity-stat-card'>
                            <span>Current streak</span>
                            <strong>{contributionStats.currentStreak} days</strong>
                        </article>
                        <article className='activity-stat-card'>
                            <span>Longest streak</span>
                            <strong>{contributionStats.longestStreak} days</strong>
                        </article>
                        <article className='activity-stat-card'>
                            <span>Active weeks</span>
                            <strong>{contributionStats.activeWeeks}</strong>
                        </article>
                        <article className='activity-stat-card'>
                            <span>Active days</span>
                            <strong>{contributionStats.activeDays}</strong>
                        </article>
                    </div>

                    <div className='contribution-months'>
                        {contributionMonths.map((month) => (
                            <span key={month}>{month}</span>
                        ))}
                    </div>

                    <div className='contribution-grid' aria-hidden='true'>
                        {contributionData.map((week, weekIndex) => (
                            <div key={`week-${weekIndex}`} className='contribution-week'>
                                {week.map((level, dayIndex) => (
                                    <span key={`cell-${weekIndex}-${dayIndex}`} className={`contribution-cell level-${level}`} />
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='contribution-legend'>
                        <span>Less</span>
                        <div className='legend-scale'>
                            {[0, 1, 2, 3, 4].map((level) => (
                                <span key={`legend-${level}`} className={`contribution-cell level-${level}`} />
                            ))}
                        </div>
                        <span>More</span>
                    </div>
                </article>
            </div>
        </section>
    );
}
