import Profile2 from '../../assets/image/profile2.png';
const AboutMain = () => {
    return (
        <>
            <div className='h-fit md:min-h-screen'>
                <h1 className='text-center text-5xl md:text-7xl'>About Me</h1>
                <div className='flex flex-col md:flex-row items-center justify-center md:justify-around h-5/6'>
                    <div className='w-full flex items-center justify-center md:w-2/5'>
                        <img src={Profile2} alt='Profile' />
                    </div>
                    <div className='w-full md:w-3/5 marginTop-5 md:mt-0'>
                        <h3 className='text-xl text-center md:text-left md:text-3xl'>Full Stack Developer</h3>
                        <h6 className='font-light text-center md:text-left'>📍Pangasinan, Philippines</h6>
                        <div className='text-justify about-description font-normal'>
                            <p>Hey there, I'm Stephen Bautista—your go-to guy for turning digital dreams into reality! 🚀 As a self-taught full stack wizard, I dance with code, weave unique designs, and craft seamless user experiences.</p>

                            <p>I'm not just about tech wizard I'm on a mission to create user-friendly masterpieces. I'm all about simplicity, utility, and the sheer joy of coding that's cleaner than a freshly made bed.</p>

                            <p>Currently navigating the tech waves while studying Information Technology at the University of Pangasinan, I kicked off my coding journey back in 8th grade with HTML, CSS, and JavaScript. Now, as a freelance developer, I'm passionately curating stunning websites that not only look good but feel even better to use.</p>

                            <p>Designing is my love language—it takes patience, effort, and time, but the results are nothing short of digital poetry. Always hungry for knowledge, I'm committed to pushing my limits to get those pixel-perfect outcomes.</p>

                            <p>Let's not just build something; let's build something AWESOME together! 💻✨</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMain;
