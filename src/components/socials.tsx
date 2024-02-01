import Facebook from '../assets/svg/facebook.png';
import Instagram from '../assets/svg/instagram.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import Github from '../assets/svg/github.svg';

import '../assets/scss/socials.scss';
const Socials = () => {
    return (
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
    );
};

export default Socials;
