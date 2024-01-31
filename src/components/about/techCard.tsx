import '../../assets/scss/about/techCard.scss';
interface TechCardProps {
    icon: string;
    name: string;
    link: string;
}
const TechCard: React.FC<TechCardProps> = ({ icon, name, link }) => {
    // TODO: add animation
    return (
        <a href={link} className='tech-card'>
            <img src={icon} />
            <span>{name}</span>
        </a>
    );
};

export default TechCard;
