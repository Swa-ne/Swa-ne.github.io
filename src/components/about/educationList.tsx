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
        <div className='education-list md:flex md:justify-around'>
            <img src={schoolImage} className='md:w-1/2' alt='School Image' />
            <div className='textCenter md:ml-5 md:w-1/2'>
                <h3 className='text-lg mobile-title-exceed md:text-xl'>{schoolName}</h3>
                <p className='text-xs md:text-lg'>{degree}</p>
                <span className='text-xs md:text-lg'>{yearAttended}</span>
            </div>
        </div>
    );
};

export default EducationList;
