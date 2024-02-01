import { Ref } from 'react';
import { Link } from 'react-scroll';
import UseLinkContext from '../../context/contextHook';

interface NavBarMenuPhoneProps {
    menuPressed: boolean;
    menuRef: Ref<HTMLDivElement>;
}

const NavBarMenuPhone: React.FC<NavBarMenuPhoneProps> = ({ menuPressed, menuRef }) => {
    const { activeIndex, setActiveIndex } = UseLinkContext();

    const handleLinkChange = (index: number) => {
        setActiveIndex(index);
    };

    const menuItems = ['home', 'about', 'project', 'contact'];
    return (
        <div ref={menuRef} className={`nav-bar-menu-phone block ml:hidden fixed bg-accent-color rounded-xl z-50 ${menuPressed && 'active-nav-bar-menu-phone'}`}>
            <ul className='p-5 w-full justify-around text-text-reverse-color text-2xl'>
                {menuItems.map((item, index) => (
                    <li key={index} className={`list-link ${index === activeIndex ? 'active' : ''}`}>
                        <Link to={item} className='link' spy={true} smooth={true} offset={-70} duration={1000} onClick={() => handleLinkChange(index)}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavBarMenuPhone;
