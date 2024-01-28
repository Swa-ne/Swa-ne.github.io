import '../assets/scss/nav.scss';
import NavBarMenu from '../components/navbar/navBarMenu';
import NavBarPhone from '../components/navbar/navBarPhone';
import ThemeModeSwitch from '../components/navbar/themeModeSwitch/themeModeSwitch';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar: React.FC = () => {
    return (
        <nav className='w-full p-5 bg-transparent flex justify-between items-center'>
            <h1 className='font-black text-2xl'>Swane</h1>
            <div className='flex w-1/5 ml:w-4/5 md:w-2/5 items-center justify-around'>
                <NavBarMenu />
                <ThemeModeSwitch />
                <NavBarPhone />
            </div>
        </nav>
    );
};

export default NavBar;
