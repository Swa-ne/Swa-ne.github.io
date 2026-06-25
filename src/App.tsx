import { useMemo } from 'react';
import { HeroSection } from './components/portfolio/HeroSection';
import { JourneySection } from './components/portfolio/JourneySection';
import { PortfolioGuide } from './components/portfolio/PortfolioGuide';
import { ProjectsSection } from './components/portfolio/ProjectsSection';
import { SiteFooter } from './components/portfolio/SiteFooter';
import { SiteHeader } from './components/portfolio/SiteHeader';
import { SkillsSection } from './components/portfolio/SkillsSection';
import { portfolioData } from './data/portfolioData';
import { sections, stackGroups } from './data/portfolioUi';
import { useActiveSection } from './hooks/useActiveSection';
import { useGithubContributions } from './hooks/useGithubContributions';
import { useThemeMode } from './hooks/useThemeMode';

function App() {
    const { theme, setTheme } = useThemeMode();
    const sectionIds = useMemo(() => sections.map((section) => section.id), []);
    const { activeSection, scrollToSection } = useActiveSection(sectionIds);
    const { payload: contributionPayload, status: contributionStatus } = useGithubContributions();

    return (
        <div className='portfolio-shell'>
            <SiteHeader
                brand={portfolioData.brand}
                sections={sections}
                activeSection={activeSection}
                theme={theme}
                onNavigate={scrollToSection}
                onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
            />

            <main className='site-main'>
                <HeroSection data={portfolioData} theme={theme} onNavigate={scrollToSection} />

                <div className='content-shell single-column'>
                    <div className='main-column'>
                        <JourneySection experience={portfolioData.experience} education={portfolioData.education} certifications={portfolioData.certifications} />
                        <ProjectsSection projects={portfolioData.projects} />
                        <SkillsSection
                            stackGroups={stackGroups}
                            contributionMonths={contributionPayload.months}
                            contributionData={contributionPayload.weeks}
                            contributionStats={contributionPayload.stats}
                            contributionStatus={contributionStatus}
                        />
                    </div>
                </div>

                <SiteFooter brand={portfolioData.brand} name={portfolioData.name} role={portfolioData.role} socialLinks={portfolioData.socialLinks} />
            </main>

            <PortfolioGuide profileName={portfolioData.name} chatStarters={portfolioData.chatStarters} />
        </div>
    );
}

export default App;
