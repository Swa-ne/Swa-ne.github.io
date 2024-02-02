import Facebook from '../assets/svg/facebook.png';
import FacebookDark from '../assets/svg/facebook-dark.png';
import Instagram from '../assets/svg/instagram.svg';
import InstagramDark from '../assets/svg/instagram-dark.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import LinkedinDark from '../assets/svg/linkedin-dark.svg';
import Github from '../assets/svg/github.svg';
import GithubDark from '../assets/svg/github-dark.svg';

import '../assets/scss/socials.scss';
import { ThemeContext } from '../utils/handleLinkChange';
const Socials = () => {
    const { theme } = ThemeContext();
    return (
        <div className='socials'>
            <a href='https://www.facebook.com/stephenpaul.bautista'>
                <img src={theme === 'dark' ? FacebookDark : Facebook} />
            </a>
            <a href='https://www.instagram.com/14tepen/'>
                <img src={theme === 'dark' ? InstagramDark : Instagram} />
            </a>
            <a href='https://www.linkedin.com/in/stephen-bautista/'>
                <img src={theme === 'dark' ? LinkedinDark : Linkedin} />
            </a>
            <a href='https://github.com/Swa-ne'>
                <img src={theme === 'dark' ? GithubDark : Github} />
            </a>
        </div>
    );
};

export default Socials;
