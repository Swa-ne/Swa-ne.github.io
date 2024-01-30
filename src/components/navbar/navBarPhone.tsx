import NavBarMenuPhone from './navBarMenuPhone';
import { useEffect, useRef, useState } from 'react';
import HamburgerMenu from './hamburgerMenu';

const NavBarPhone = () => {
    const [menuPressed, setMenuPressed] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setMenuPressed((prev) => !prev);
    };
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && buttonRef.current) {
                if (menuPressed && !menuRef.current.contains(e.target as Node) && !buttonRef.current.contains(e.target as Node)) {
                    toggleMenu();
                }
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <>
            <div ref={buttonRef} onClick={toggleMenu} className={`hamburger-menu-container fixed bg-accent-color w-16 h-16 flex flex-col justify-center items-center ${menuPressed ? 'active-menu' : 'rounded-full collapsed'} select-none ml:hidden`}>
                <HamburgerMenu />
            </div>
            <NavBarMenuPhone menuPressed={menuPressed} menuRef={menuRef} />
        </>
    );
};

export default NavBarPhone;
