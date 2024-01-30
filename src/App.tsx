import About from './views/about';
import Contact from './views/contact';
import Footer from './views/footer';
import Header from './views/header';
import NavBar from './views/navBar';
import Project from './views/project';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Header />
                <About />
                <Project />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default App;
