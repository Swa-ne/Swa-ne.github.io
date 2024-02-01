import '../assets/scss/contact.scss';
import EmailInput from '../components/emailInput';
import Socials from '../components/socials';
interface ContactProps {
    pastProject: boolean;
}
const Contact: React.FC<ContactProps> = ({ pastProject }) => {
    return (
        <div className={`contact-container ${pastProject ? 'z-above' : 'z-below'} flex flex-col items-center md:flex-row md:justify-around`} id='contact'>
            <div className='w-11/12 h-2/5 flex flex-col justify-around md:w-2/5 md:h-1/6 xl:w-2/6'>
                <h1 className='text-text-color text-center text-4xl ml:text-5xl mb-4 md:text-4xl xl:text-5xl'>Let's Connect</h1>
                <p className='text-xs ml:text-sm sm:text-base md:text-xs xl:text-base'>Exploring fresh horizons! 🚀 My inbox is your VIP lounge - drop a question or just spread some good vibes. I promise, your message will be met with the coolest reply in town! Let's connect and make it stylish! 💫</p>
                <Socials />
            </div>
            <form className='w-11/12 h-2/5 flex flex-col justify-around mt-2 md:w-2/5 md:h-1/2'>
                <label className='font-semibold'>
                    Email
                    <EmailInput />
                </label>
                <label className='font-semibold'>
                    Message
                    <textarea placeholder='Send me a message...' className='p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-full'></textarea>
                </label>
                {/* TODO: show confirmation when already submitted */}
                <button className='bg-transparent hover:bg-text-color text-text-color font-semibold hover:text-background-color py-2 px-4 border-4 border-text-color hover:border-transparent rounded'>Send</button>
            </form>
        </div>
    );
};

export default Contact;
