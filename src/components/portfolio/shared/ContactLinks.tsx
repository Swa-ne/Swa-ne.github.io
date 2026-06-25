import FacebookIcon from '../../../assets/svg/facebook.png';
import GitHubIcon from '../../../assets/svg/github.svg';
import InstagramIcon from '../../../assets/svg/instagram.svg';
import LinkedInIcon from '../../../assets/svg/linkedin.svg';
import type { LinkItem } from '../../../types/portfolio';

interface ContactIconLinksProps {
    links: LinkItem[];
    className?: string;
}

export function ContactIconLinks({ links, className = '' }: ContactIconLinksProps) {
    return (
        <div className={`contact-icon-links ${className}`.trim()}>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className='contact-icon-link'
                    aria-label={link.label}
                    title={link.label}
                >
                    <span className='contact-icon-shell'>
                        <SocialIcon label={link.label} />
                    </span>
                </a>
            ))}
        </div>
    );
}

function SocialIcon({ label }: { label: string }) {
    if (label === 'GitHub') {
        return <img src={GitHubIcon} alt='' className='contact-icon-image' />;
    }

    if (label === 'LinkedIn') {
        return <img src={LinkedInIcon} alt='' className='contact-icon-image' />;
    }

    if (label === 'Instagram') {
        return <img src={InstagramIcon} alt='' className='contact-icon-image' />;
    }

    if (label === 'Facebook') {
        return <img src={FacebookIcon} alt='' className='contact-icon-image' />;
    }

    if (label === 'Email') {
        return <EmailIcon />;
    }

    if (label === 'Phone') {
        return <PhoneIcon />;
    }

    return <LinkIcon />;
}

function EmailIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M4.75 6.75h14.5v10.5H4.75z' />
            <path d='m5.5 7.5 6.5 5 6.5-5' />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M8.1 5.2 6.35 6.95c-.5.5-.66 1.24-.39 1.89 1.72 4.14 5.06 7.48 9.2 9.2.65.27 1.39.11 1.89-.39l1.75-1.75-3.15-3.15-1.22 1.22a10.3 10.3 0 0 1-4.4-4.4l1.22-1.22L8.1 5.2Z' />
        </svg>
    );
}

function LinkIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M9.5 14.5 14.5 9.5' />
            <path d='M10.5 7.25 12 5.75a4 4 0 0 1 5.66 5.66l-1.5 1.5' />
            <path d='M13.5 16.75 12 18.25a4 4 0 0 1-5.66-5.66l1.5-1.5' />
        </svg>
    );
}
