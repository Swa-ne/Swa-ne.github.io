import CertificateList from './certificateList';

import CS50 from '../../assets/image/certificate/CS50x.png';
import Blockchain from '../../assets/image/certificate/blockchain.jpg';
import Sololearn from '../../assets/image/certificate/sololearn.jpg';

interface myCertificateListProps {
    certificateName: string;
    yearRecieved: string;
    certificateImage: string;
}
const Certificate = () => {
    const myCertificate: Array<myCertificateListProps> = [
        { certificateName: "CS50's Introduction to Computer Science", yearRecieved: '2023', certificateImage: CS50 },
        { certificateName: 'Harnessing Blockchain to Succeed with the New Normal', yearRecieved: '2021', certificateImage: Blockchain },
        { certificateName: 'Introduction to Python', yearRecieved: '2022', certificateImage: Sololearn },
    ];
    return (
        <div className='w-full h-full flex overflow-y-auto'>
            {/* TODO: change scroll */}
            <div className='certificates-holder max-w-full'>
                {myCertificate.map((data, idx) => (
                    <CertificateList key={idx} certificateName={data.certificateName} yearRecieved={data.yearRecieved} certificateImage={data.certificateImage} />
                ))}
            </div>
        </div>
    );
};

export default Certificate;
