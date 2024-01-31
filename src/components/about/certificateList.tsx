import '../../assets/scss/about/certificateList.scss';
interface CertificateListProps {
    certificateName: string;
    yearRecieved: string;
    certificateImage: string;
}
const CertificateList: React.FC<CertificateListProps> = ({ certificateName, yearRecieved, certificateImage }) => {
    // TODO: find the other certificates and add animation
    return (
        <div className='certificate-list'>
            <img src={certificateImage} />
            <p className='w-full'>
                {certificateName} <span>{yearRecieved}</span>
            </p>
        </div>
    );
};

export default CertificateList;
