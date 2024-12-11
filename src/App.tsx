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
            // const headerSection = document.getElementById('header');
            const aboutSection = document.getElementById('about');
            const projectSection = document.getElementById('project');
            const contactSection = document.getElementById('contact');
            const scrollPosition = window.scrollY || window.pageYOffset;
            const windowInnerHeight = window.innerHeight;

            const aboutSectionTop = aboutSection?.offsetTop !== undefined ? aboutSection.offsetTop - 100 + windowInnerHeight : 0;
            const projectSectionTop = projectSection?.offsetTop !== undefined ? projectSection.offsetTop - 100 + 4 * 10 + windowInnerHeight : 0;
            const contactSectionTop = projectSectionTop + window.innerHeight;
            if (scrollPosition < aboutSectionTop) {
                setActiveIndex(0);
            } else if (aboutSection && projectSection && scrollPosition < projectSectionTop) {
                setActiveIndex(1);
            } else if (projectSection && contactSection && scrollPosition < contactSectionTop) {
                setActiveIndex(2);
            } else if (contactSection) {
                setActiveIndex(3);
            }

            if (projectSection) {
                setIsPastProject(scrollPosition > projectSectionTop);
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
