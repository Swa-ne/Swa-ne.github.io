interface SectionTitleProps {
    kicker: string;
    title: string;
}

export function SectionTitle({ kicker, title }: SectionTitleProps) {
    return (
        <div className='section-title'>
            <p className='section-kicker'>{kicker}</p>
            <h2>{title}</h2>
        </div>
    );
}
