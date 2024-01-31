import '../assets/scss/about.scss';
import AboutMain from '../components/about/aboutMain';
import Skills from '../components/about/skills';
const About: React.FC = () => {
    return (
        <div className='about-container' id='about'>
            <AboutMain />
            <Skills />
        </div>
    );
};

export default About;
