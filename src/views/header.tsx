import { ReactTyped } from 'react-typed';
import ResumePDF from '../assets/Resume.pdf';
import '../assets/scss/header.scss';
import { Link } from 'react-scroll';
import { ActiveIndexContext, ThemeContext } from '../utils/handleLinkChange';
import { useEffect, useState } from 'react';

import Profile from '../assets/image/profile.jpg';
import ProfileDark from '../assets/image/profile-dark.jpg';

interface HeaderProps {
    pastProject: boolean;
}
const Header: React.FC<HeaderProps> = ({ pastProject }) => {
    const { setActiveIndex } = ActiveIndexContext();
    const { theme } = ThemeContext();
    const handleLinkChange = (index: number) => {
        setActiveIndex(index);
    };

    const [profileImage, setProfileImage] = useState(Profile);

    useEffect(() => {
        setProfileImage(theme === 'dark' ? ProfileDark : Profile);
    }, [theme]);
    return (
        // TODO: make it parallax scroll
        // implement this https://www.youtube.com/watch?v=z1wZp4jV4cQ&pp=ygUccmVhY3QganMgc2hvdyBpbWFnZSBvbiBob3Zlcg%3D%3D

        <header className={`header-holder ${pastProject ? 'z-below' : 'z-above'} bg-background-color flex flex-col-reverse justify-around px-8 py-4 ml:py-4 md:flex-row md:justify-around md:items-center`}>
            <div className='w-full h-1/2 md:h-3/5 md:w-6/12'>
                <span className='text-xl ml:text-3xl/10 md:text-4xl xl:text-5xl font-medium'>
                    <label className='text-accent-color'>Hello,</label> I'm
                </span>
                <h1 className='w-full text-2xl/10 font-black ml:text-5xl/10 md:text-6xl lg:text-7xl xl:text-8xl title-name-header'>
                    <ReactTyped strings={['Software Engineer', 'Stephen Bautista']} typeSpeed={100} backSpeed={30} />
                </h1>
                <p className='text-xs lg:text-sm xl:text-base text-justify w-11/12'>An ambitious problem solver with a passion for web development, and who would like to collaborate with you and on diverse web development ideas.</p>
                <div className='w-2/3 h-1/2 header-button-holder mx-auto flex flex-col justify-around md:h-auto md:flex-row md:w-full xl:w-1/2'>
                    {/* TODO: able to download cv and direct hire me to contact page */}
                    <a href={ResumePDF} download='resume.pdf'>
                        <button className='download-button w-full'>Download CV</button>
                    </a>
                    <Link to='contact' className='link' spy={true} smooth={true} offset={-70} duration={500} onClick={() => handleLinkChange(3)}>
                        <button className='hire-button w-full'>Hire Me Now</button>
                    </Link>
                </div>
            </div>
            <div className='w-10/12 mx-auto ml:w-1/2 md:w-4/12'>
                <div className='profile-image-holder' style={{ backgroundImage: `url(${profileImage})` }}></div>
            </div>
        </header>
    );
};

export default Header;
