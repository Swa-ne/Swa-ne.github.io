import ShowCode from '../../assets/svg/showCode.svg';
import ShowWebsite from '../../assets/svg/showWebsite.svg';
interface ProjectListProps {
    projectTitle: string;
    projectImg: string;
    projectTech: string;
    projectRepo: string;
    projectLink: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ projectTitle, projectImg, projectTech, projectRepo, projectLink }) => {
    return (
        <div className='project-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <div className='overflow-hidden h-4/6 rounded-2xl'>
                        <img src={projectImg} alt={projectTitle} />
                    </div>

                    <div className='w-11/12 mx-auto h-1/6 project-details'>
                        <p className='truncate leading-ziltch font-bold'>{projectTitle}</p>
                        <label className='leading-ziltch font-normal'>{projectTech}</label>
                    </div>
                </div>
                <div className='flip-card-back flex flex-col justify-around'>
                    <span>
                        <p className='truncate leading-ziltch font-bold text-xl'>{projectTitle}</p>
                        <label className='leading-ziltch font-normal text-xs'>{projectTech}</label>
                    </span>
                    <div className='w-full flex justify-around'>
                        <a href={projectRepo} className='w-2/5 hover:opacity-40'>
                            <img src={ShowCode} />
                        </a>
                        <a href={projectLink} className='w-2/5 hover:opacity-40'>
                            <img src={ShowWebsite} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
