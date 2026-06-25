import type { PortfolioData, SectionId, ThemeMode } from '../../types/portfolio';
import { ContactIconLinks } from './shared/ContactLinks';

interface HeroSectionProps {
    data: PortfolioData;
    theme: ThemeMode;
    onNavigate: (sectionId: SectionId) => void;
}

export function HeroSection({ data, theme, onNavigate }: HeroSectionProps) {
    const profileSource = theme === 'dark' ? data.profileImage[1] : data.profileImage[0];
    const firstName = data.name.split(' ')[0];
    const lastName = data.name.split(' ').slice(-1)[0];

    return (
        <section id='home' className='hero-section'>
            <div className='hero-decor hero-grid' />
            <div className='hero-decor hero-point hero-point-one' />
            <div className='hero-decor hero-point hero-point-two' />
            <div className='hero-decor hero-orbit' />

            <div className='hero-inner'>
                <div className='hero-copy'>
                    <p className='section-kicker'>Hello, I&apos;m</p>

                    <h1 className='hero-title'>
                        <span>{firstName}</span>
                        <span className='accent-word'>
                            {lastName}
                            <svg viewBox='0 0 200 12' preserveAspectRatio='none' aria-hidden='true'>
                                <path d='M0 9 Q50 0, 100 6 T200 4' />
                            </svg>
                        </span>
                        <span className='hero-dotmark'>.</span>
                    </h1>

                    <div className='hero-role-line'>
                        <span />
                        <p>{data.role}</p>
                    </div>

                    <p className='hero-summary'>{data.headline}</p>
                    <p className='hero-description'>{data.intro[1]}</p>

                    <div className='hero-contact-block'>
                        <div className='hero-socials'>
                            <span>Reach me</span>
                            <div className='hero-social-line' />
                            <ContactIconLinks links={data.socialLinks} className='hero-social-links' />
                        </div>
                    </div>

                    <div className='hero-actions'>
                        <button type='button' className='primary-button' onClick={() => onNavigate('projects')}>
                            View Projects
                            <span>{'->'}</span>
                        </button>
                        <a href={`mailto:${data.email}`} className='primary-button'>
                            Contact Me
                            <span>{'->'}</span>
                        </a>
                        <a href={data.resumeUrl} className='secondary-button' download='Stephen-Bautista-Resume.pdf'>
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className='hero-visual'>
                    <div className='portrait-stage'>
                        <div className='portrait-layer portrait-layer-one' />
                        <div className='portrait-layer portrait-layer-two' />

                        <div className='portrait-frame'>
                            <div className='frame-corner top-left' />
                            <div className='frame-corner top-right' />
                            <div className='frame-corner bottom-left' />
                            <div className='frame-corner bottom-right' />

                            <div className='portrait-card'>
                                <img src={profileSource} alt={data.name} />
                            </div>

                            <div className='location-pill'>
                                <span />
                                {data.location}
                            </div>
                        </div>

                        <div className='floating-tag tag-right'>clean_ui()</div>
                        <div className='floating-tag tag-left'>&lt;/&gt;</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
