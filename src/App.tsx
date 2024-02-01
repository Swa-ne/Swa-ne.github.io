import { useState, useEffect } from 'react';
import About from './views/about';
import Contact from './views/contact';
import Footer from './views/footer';
import Header from './views/header';
import NavBar from './views/navBar';
import Project from './views/project';
import UseLinkContext from './context/contextHook';

function App() {
    const [isPastProject, setIsPastProject] = useState(false);
    const { setActiveIndex } = UseLinkContext();

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.getElementById('header');
            const aboutSection = document.getElementById('about');
            const projectSection = document.getElementById('project');
            const contactSection = document.getElementById('contact');
            const scrollPosition = window.scrollY || window.pageYOffset;
            if (headerSection && scrollPosition < (aboutSection?.offsetTop ?? 0)) {
                setActiveIndex(0);
            } else if (aboutSection && projectSection && scrollPosition < projectSection.offsetTop) {
                setActiveIndex(1);
            } else if (projectSection && contactSection && scrollPosition < contactSection.offsetTop) {
                setActiveIndex(2);
            } else if (contactSection) {
                setActiveIndex(3);
            }

            if (projectSection) {
                setIsPastProject(scrollPosition > projectSection.offsetTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <NavBar />
            <main>
                <Header pastProject={isPastProject} />
                <About />
                <div className='try'>
                    <Project />
                </div>
                <Contact pastProject={isPastProject} />
                <Footer />
            </main>
        </>
    );
}

export default App;
