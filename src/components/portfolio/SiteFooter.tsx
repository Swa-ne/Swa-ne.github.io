import type { LinkItem } from '../../types/portfolio';
import { ContactIconLinks } from './shared/ContactLinks';

interface SiteFooterProps {
    brand: string;
    name: string;
    role: string;
    socialLinks: LinkItem[];
}

export function SiteFooter({ brand, name, role, socialLinks }: SiteFooterProps) {
    return (
        <footer className='site-footer'>
            <div className='footer-brand-block'>
                <h2>{brand}</h2>
                <p>{role} crafting polished products, clean APIs, and practical AI-assisted workflows.</p>
                <p>Copyright 2026 {name}. All rights reserved.</p>
            </div>

            <div className='footer-contact-block'>
                <ContactIconLinks links={socialLinks} className='footer-social-links' />
            </div>
        </footer>
    );
}
