import '../assets/scss/footer.scss';
import Socials from '../components/socials';

const Footer: React.FC = () => {
    return (
        <div className='footer-container' id='footer'>
            <footer>
                <div className='md:flex md:justify-between md:items-center'>
                    <p>Crafted with ☕ and 💻 by Stephen Paul Bautista</p>
                    <Socials />
                </div>
                <hr className='w-full h-1 bg-text-color mx-auto my-4' />
                <p> &copy; 2024 Stephen Paul Bautista. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Footer;
