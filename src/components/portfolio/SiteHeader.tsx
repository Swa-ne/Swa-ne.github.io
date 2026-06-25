import { useState } from 'react';
import type { NavSection, SectionId, ThemeMode } from '../../types/portfolio';

interface SiteHeaderProps {
    brand: string;
    sections: NavSection[];
    activeSection: SectionId;
    theme: ThemeMode;
    onNavigate: (sectionId: SectionId) => void;
    onToggleTheme: () => void;
}

export function SiteHeader({ brand, sections, activeSection, theme, onNavigate, onToggleTheme }: SiteHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (sectionId: SectionId) => {
        onNavigate(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header className='site-header'>
            <div className='site-header-inner'>
                <a href='#home' className='brand'>
                    {brand}
                </a>

                <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`} aria-label='Primary'>
                    {sections.map((section) => (
                        <button key={section.id} type='button' className={activeSection === section.id ? 'active' : ''} onClick={() => handleNavigate(section.id)}>
                            {section.label}
                        </button>
                    ))}
                </nav>

                <div className='header-actions'>
                    <button type='button' className='theme-toggle' onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                    <button type='button' className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen((currentState) => !currentState)} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}

function SunIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <circle cx='12' cy='12' r='4' />
            <path d='M12 2.75v2' />
            <path d='M12 19.25v2' />
            <path d='m4.22 4.22 1.42 1.42' />
            <path d='m18.36 18.36 1.42 1.42' />
            <path d='M2.75 12h2' />
            <path d='M19.25 12h2' />
            <path d='m4.22 19.78 1.42-1.42' />
            <path d='m18.36 5.64 1.42-1.42' />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M20.25 14.18A7.7 7.7 0 0 1 9.82 3.75 8.35 8.35 0 1 0 20.25 14.18Z' />
        </svg>
    );
}
