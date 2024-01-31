import '../../assets/scss/about/educationList.scss';
interface EducationListProps {
    schoolName: string;
    yearAttended: string;
    degree: string;
    schoolImage: string;
}
const EducationList: React.FC<EducationListProps> = ({ schoolName, yearAttended, degree, schoolImage }) => {
    // TODO: add animation
    return (
        <div className='education-list'>
            <img src={schoolImage} />
            <div className='ml-5 w-9/12'>
                <h3 className='truncate w-full'>{schoolName}</h3>
                <p>{degree}</p>
                <span>{yearAttended}</span>
            </div>
        </div>
    );
};

export default EducationList;
