import './index.scss'
import profile from '../../assets/images/profile.png'

const Home = () => {
    return(
        <div className='flex justify-center items-center'>
            <div className='flex justify-between py-7 px-10'>
                <div>
                    <p className='mt-10 text-4xl font-bold'>👋Hey there, I'm Etisha</p>
                    <p className='mt-8 mr-60 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className='bg-purple-400 mt-8 px-3 py-2 text-2xl font-bold rounded'>CONTACT ME</button>
                </div>
                <img src={profile} alt='profile image' className="h-[380px] w-[450px]"/>
            </div>
        
        </div>
    )
}

export default Home