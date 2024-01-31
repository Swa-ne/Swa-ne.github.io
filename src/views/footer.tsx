import Facebook from '../assets/svg/facebook.png';
import Instagram from '../assets/svg/instagram.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import Github from '../assets/svg/github.svg';

import '../assets/scss/footer.scss';

const Footer: React.FC = () => {
    return (
        <div className='footer-container' id='footer'>
            <footer>
                <div className='md:flex md:justify-between md:items-center'>
                    <p>Crafted with ☕ and 💻 by Stephen Paul Bautista</p>
                    <div className='socials'>
                        <a href='https://www.facebook.com/stephenpaul.bautista'>
                            <img src={Facebook} />
                        </a>
                        <a href='https://www.instagram.com/14tepen/'>
                            <img src={Instagram} />
                        </a>
                        <a href='https://www.linkedin.com/in/stephen-bautista/'>
                            <img src={Linkedin} />
                        </a>
                        <a href='https://github.com/Swa-ne'>
                            <img src={Github} />
                        </a>
                    </div>
                </div>
                <hr className='w-full h-1 bg-text-reverse-color mx-auto my-4' />
                <p> &copy; 2024 Stephen Paul Bautista. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Footer;
