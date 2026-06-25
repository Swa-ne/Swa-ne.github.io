import { useCallback, useEffect, useState } from 'react';
import type { SectionId } from '../types/portfolio';

export function useActiveSection(sectionIds: SectionId[]) {
    const [activeSection, setActiveSection] = useState<SectionId>('home');

    useEffect(() => {
        const handleScroll = () => {
            const reachedBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

            if (reachedBottom) {
                setActiveSection(sectionIds[sectionIds.length - 1] ?? 'home');
                return;
            }

            const scrollMarker = window.scrollY + 160;
            let nextActiveSection: SectionId = 'home';

            sectionIds.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (section && scrollMarker >= section.offsetTop) {
                    nextActiveSection = sectionId;
                }
            });

            setActiveSection(nextActiveSection);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    const scrollToSection = useCallback((sectionId: SectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
            return;
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 88;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const targetScrollTop = Math.max(0, Math.min(sectionTop, maxScrollTop));

        window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth',
        });

        setActiveSection(sectionId);
    }, []);

    return { activeSection, scrollToSection };
}
