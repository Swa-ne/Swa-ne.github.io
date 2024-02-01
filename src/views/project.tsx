import '../assets/scss/project.scss';
import { projectData } from '../util/const';
import ProjectList from '../components/project/projectList';

const Project: React.FC = () => {
    return (
        <div className='project-container' id='project'>
            <h1 className='text-text-color text-center text-6xl mb-6'>Project</h1>
            <div className='projects-holder'>
                {projectData.map((data, idx) => (
                    <ProjectList key={idx} projectTitle={data.name} projectImg={data.img} projectTech={data.tech} projectLink={data.link} projectRepo={data.repo} />
                ))}
            </div>
        </div>
    );
};

export default Project;
