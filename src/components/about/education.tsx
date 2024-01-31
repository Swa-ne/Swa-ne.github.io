import EducationList from './educationList';
import UPang from '../../assets/image/Upang.png';
import LNU from '../../assets/image/lnu.png';

interface myEducationInterface {
    schoolName: string;
    yearAttended: string;
    degree: string;
    schoolImage: string;
}
const Education = () => {
    const myEducation: Array<myEducationInterface> = [
        { schoolName: 'University of Pangasinan', yearAttended: '2022 - Current', degree: 'Bachelor of Science in Information Technology', schoolImage: UPang },
        { schoolName: 'University of Pangasinan', yearAttended: '2021 - 2022', degree: 'Senior High School', schoolImage: UPang },
        { schoolName: 'Lyceum Northwestern University Francisco Q. Duque Medical Foundation Special Science High School', yearAttended: '2016 - 2020', degree: 'Junior High School', schoolImage: LNU },
    ];
    return (
        <div className='w-full h-full flex flex-col items-center overflow-y-auto'>
            {myEducation.map((data, idx) => (
                <EducationList key={idx} schoolName={data.schoolName} yearAttended={data.yearAttended} degree={data.degree} schoolImage={data.schoolImage} />
            ))}
        </div>
    );
};

export default Education;
