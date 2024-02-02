import TechCard from './techCard';
import AndroidStudio from '../../assets/svg/icons/androidStudio.svg';
import Css from '../../assets/svg/icons/css.svg';
import Django from '../../assets/svg/icons/django.svg';
import Express from '../../assets/svg/icons/express.svg';
import Git from '../../assets/svg/icons/git.svg';
import HTML from '../../assets/svg/icons/html.svg';
import JavaScript from '../../assets/svg/icons/javascript.svg';
import MongoDB from '../../assets/svg/icons/mongodb.svg';
import MySQL from '../../assets/svg/icons/mysql.svg';
import Node from '../../assets/svg/icons/node.svg';
import Postman from '../../assets/svg/icons/postman.svg';
import Python from '../../assets/svg/icons/python.svg';
import React from '../../assets/svg/icons/react.svg';
import SASS from '../../assets/svg/icons/sass.svg';
import Tailwind from '../../assets/svg/icons/tailwind.svg';

interface myTechStackInterface {
    icon: string;
    name: string;
    link: string;
}
const MainSkills = () => {
    const myTechStack: Array<myTechStackInterface> = [
        { icon: HTML, name: 'HTML', link: '' },
        { icon: Css, name: 'CSS', link: '' },
        { icon: Python, name: 'Python', link: '' },
        { icon: JavaScript, name: 'JavaScript', link: '' },
        { icon: React, name: 'React JS', link: '' },
        { icon: SASS, name: 'SASS', link: '' },
        { icon: Tailwind, name: 'Tailwind', link: '' },
        { icon: Git, name: 'Git', link: '' },
        { icon: Node, name: 'Node JS', link: '' },
        { icon: Express, name: 'Express', link: '' },
        { icon: MongoDB, name: 'MongoDB', link: '' },
        { icon: MySQL, name: 'MySQL', link: '' },
        { icon: Django, name: 'Django', link: '' },
        { icon: AndroidStudio, name: 'Android Studio', link: '' },
        { icon: React, name: 'React Native', link: '' },
        { icon: Postman, name: 'Postman', link: '' },
    ];
    return (
        <div className='w-full h-full flex overflow-y-auto'>
            <div className='tech-stack-holder w-11/12'>
                {myTechStack.map((data, idx) => (
                    <TechCard key={idx} icon={data.icon} name={data.name} link={data.link} />
                ))}
            </div>
        </div>
    );
};

export default MainSkills;
