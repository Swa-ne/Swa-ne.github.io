import Certificate from './certificate';
import Education from './education';
import MainSkills from './mainSkills';

import '../../assets/scss/skills.scss';
import { useState } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className='min-h-screen marginTop-5 md:m-0'>
            <h1 className='text-center mb-6'>Skills & Qualifications</h1>
            <div className='flex flex-col md:flex-row md:justify-around h-5/6'>
                <div className='w-full md:w-3/12'>
                    <ul className='skill-qualification-list menu-hover-fill flex flex-col items-center md:items-start leading-none text-lg md:text-2xl uppercase space-y-4'>
                        <li className={activeTab === 'skills' ? 'active-tab' : ''} onClick={() => handleTabClick('skills')}>
                            <button data-text='skills'>skills</button>
                        </li>
                        <li className={activeTab === 'education' ? 'active-tab' : ''} onClick={() => handleTabClick('education')}>
                            <button data-text='education'>education</button>
                        </li>
                        <li className={activeTab === 'certificates' ? 'active-tab' : ''} onClick={() => handleTabClick('certificates')}>
                            <button data-text='certificates'>certificates</button>
                        </li>
                    </ul>
                </div>
                <div className='w-full p-4 h-5/6 md:h-full md:w-8/12 md:overflow-hidden'>{activeTab === 'skills' ? <MainSkills /> : activeTab === 'certificates' ? <Certificate /> : <Education />}</div>
            </div>
        </div>
    );
};
export default Skills;
