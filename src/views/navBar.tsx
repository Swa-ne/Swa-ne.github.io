import '../assets/scss/nav.scss';
import NavBarMenu from '../components/navbar/navBarMenu';
import NavBarPhone from '../components/navbar/navBarPhone';
import ThemeModeSwitch from '../components/navbar/themeModeSwitch/themeModeSwitch';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar: React.FC = () => {
    return (
        <nav className='w-full fixed top-0 left-0 p-3 flex justify-between items-center'>
            <h1 className='font-black text-2xl cursor-default'>Swane</h1>
            <div className='flex w-1/12 ml:w-4/5 md:w-1/2 items-center justify-around'>
                {/* TODO: fix Home and contact links on navigation*/}
                <NavBarMenu />
                <ThemeModeSwitch />
                <NavBarPhone />
            </div>
        </nav>
    );
};

export default NavBar;
