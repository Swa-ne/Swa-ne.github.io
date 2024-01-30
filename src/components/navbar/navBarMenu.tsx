import { useState } from 'react';
import { Link } from 'react-scroll';

const NavBarMenu: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLinkChange = (index: number) => {
        setActiveIndex(index);
    };

    const menuItems = ['home', 'about', 'project', 'contact'];
    return (
        <ul className='hidden w-2/3 ml:w-4/5 ml:flex md:w-4/5 justify-around nav-bar-menu'>
            {menuItems.map((item, index) => (
                <li key={index} onClick={() => handleLinkChange(index)} className={index === activeIndex ? 'active' : ''}>
                    <Link to={item} className='link' spy={true} smooth={true} offset={-70} duration={500} onClick={() => handleLinkChange(index)}>
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavBarMenu;
