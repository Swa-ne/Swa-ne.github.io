import { useState } from 'react';
import type { CertificateItem, JourneyTab, TimelineItem } from '../../types/portfolio';
import { SectionTitle } from './shared/SectionTitle';

interface JourneySectionProps {
    experience: TimelineItem[];
    education: TimelineItem[];
    certifications: CertificateItem[];
}

export function JourneySection({ experience, education, certifications }: JourneySectionProps) {
    const [activeJourneyTab, setActiveJourneyTab] = useState<JourneyTab>('work');

    return (
        <section id='journey' className='section-layout'>
            <SectionTitle kicker='Experience' title='Internships, education, and recognitions aligned with my resume.' />

            <article className='token-card journey-card'>
                <div className='journey-toggle'>
                    <button type='button' className={activeJourneyTab === 'work' ? 'active' : ''} onClick={() => setActiveJourneyTab('work')}>
                        Work
                    </button>
                    <button type='button' className={activeJourneyTab === 'education' ? 'active' : ''} onClick={() => setActiveJourneyTab('education')}>
                        Education
                    </button>
                    <button type='button' className={activeJourneyTab === 'awards' ? 'active' : ''} onClick={() => setActiveJourneyTab('awards')}>
                        Awards
                    </button>
                </div>

                {activeJourneyTab === 'work' ? <ExperienceList items={experience} /> : null}
                {activeJourneyTab === 'education' ? <EducationList items={education} /> : null}
                {activeJourneyTab === 'awards' ? <AwardsList items={certifications} /> : null}
            </article>
        </section>
    );
}

function ExperienceList({ items }: { items: TimelineItem[] }) {
    return (
        <div className='compact-list'>
            {items.map((item) => (
                <div key={`${item.title}-${item.organization}`} className='timeline-item'>
                    <div className='timeline-head'>
                        <strong>{item.title}</strong>
                        <span>{item.period}</span>
                    </div>
                    <p className='timeline-org'>{item.organization}</p>
                    <p>{item.description}</p>
                    {item.highlights ? (
                        <ul className='detail-list'>
                            {item.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            ))}
        </div>
    );
}

function AwardsList({ items }: { items: CertificateItem[] }) {
    return (
        <div className='compact-list'>
            {items.map((item) => (
                <div key={`${item.title}-${item.year}`} className='certificate-item'>
                    <div className='certificate-thumb'>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                        <div className='timeline-head'>
                            <strong>{item.title}</strong>
                            <span>{item.year}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function EducationList({ items }: { items: TimelineItem[] }) {
    return (
        <div className='compact-list'>
            {items.map((item) => (
                <div key={`${item.title}-${item.period}`} className='education-item'>
                    {item.image ? (
                        <div className='education-logo'>
                            <img src={item.image} alt={item.organization} />
                        </div>
                    ) : null}
                    <div>
                        <div className='timeline-head'>
                            <strong>{item.title}</strong>
                            <span>{item.period}</span>
                        </div>
                        <p className='timeline-org'>{item.organization}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
