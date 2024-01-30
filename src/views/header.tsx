import { ReactTyped } from 'react-typed';
import '../assets/scss/header.scss';

const Header: React.FC = () => {
    return (
        <header className='flex justify-around items-center' id='home'>
            <div className='w-full md:w-6/12'>
                <span className='text-5xl font-medium'>
                    <label className='text-secondary-color'>Hello,</label> I'm
                </span>
                <h1 className='text-7xl font-black mb-10 mt-2'>
                    <ReactTyped strings={['Web Developer', 'Stephen Paul Bautista']} typeSpeed={100} backSpeed={30} />
                </h1>
                <p className='text-xs text-justify'>An ambitious problem solver with a passion for web development, and who would like to collaborate with you and on diverse web development ideas.</p>
                <div className='w-1/2 mt-4 mx-auto flex justify-around'>
                    {/* TODO: able to download cv and direct hire me to contact page */}
                    <button className='download-button'>Download CV</button>
                    <button className='hire-button'>Hire Me Now</button>
                </div>
            </div>
            <div className='w-full md:w-4/12'>
                <div className='profile-image-holder'></div>
            </div>
        </header>
    );
};

export default Header;
