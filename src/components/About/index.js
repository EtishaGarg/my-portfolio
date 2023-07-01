import './index.scss'
import profile1 from '../../assets/profile_1.png'

const About = () => {
    return(
        <div className='flex flex-col justify-center items-center'>

            {/* Brief Intro */}

            <div className='flex justify-between py-7 px-10'>
                <div className='gap-2'>
                    <h1 className='mt-10 text-5xl font-bold'>Hi,</h1>
                    <h1 className='mt-2 text-5xl font-bold'>I'm Etisha</h1>
                    <h1 className='mt-2 text-5xl font-bold'>web developer</h1>
                    <h2 className='mt-8 text-2xl mr-40 font-semibold'>Frontend Developer / React Expert / Youtuber</h2>
                </div>
                <img src={profile1} alt="profile"/>
            </div>

        </div>
    )
}

export default About