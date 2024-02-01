import { ReactTyped } from 'react-typed';
import ResumePDF from '../assets/Resume.pdf';
import '../assets/scss/header.scss';

const Header: React.FC = () => {
    return (
        // TODO: make it parallax scroll
        <div className='relative' id='home'>
            <header className='header-holder flex flex-col-reverse justify-around px-8 py-4 ml:py-4 md:flex-row md:justify-around md:items-center'>
                <div className='w-full h-1/2 md:h-3/5 md:w-6/12'>
                    <span className='text-xl ml:text-3xl/10 md:text-4xl xl:text-5xl font-medium'>
                        <label className='text-accent-color'>Hello,</label> I'm
                    </span>
                    <h1 className='w-full text-2xl/10 font-black ml:text-5xl/10 md:text-6xl lg:text-7xl xl:text-8xl title-name-header'>
                        <ReactTyped strings={['Web Developer', 'Stephen Bautista']} typeSpeed={100} backSpeed={30} />
                    </h1>
                    <p className='text-xs lg:text-sm xl:text-base text-justify w-11/12'>An ambitious problem solver with a passion for web development, and who would like to collaborate with you and on diverse web development ideas.</p>
                    <div className='w-2/3 h-1/2 header-button-holder mx-auto flex flex-col justify-around md:h-auto md:flex-row md:w-full xl:w-1/2'>
                        {/* TODO: able to download cv and direct hire me to contact page */}
                        <a href={ResumePDF} download='resume.pdf'>
                            <button className='download-button'>Download CV</button>
                        </a>
                        <a href='#contact'>
                            <button className='hire-button'>Hire Me Now</button>
                        </a>
                    </div>
                </div>
                <div className='w-10/12 mx-auto ml:w-1/2 md:w-4/12'>
                    <div className='profile-image-holder'></div>
                </div>
            </header>
        </div>
    );
};

export default Header;
