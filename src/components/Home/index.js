import './index.scss'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'
import YT_Card from "../Cards/YT_Card"
import YT_data from "../../data/YT_data"
import Dev_Card from "../Cards/Dev_Card"
import Dev_data from "../../data/Dev_data"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'



const Home = () => {

    const yt_cards = YT_data.map(item => {
        return (
            <YT_Card
                key={item.id}
                {...item}
            />
        )
    })

    const dev_cards = Dev_data.map(item => {
        return (
            <Dev_Card
                key={item.id}
                {...item}
            />
        )
    })

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div className='flex-col justify-center items-center'>

            {/* Intro */}
            <div className='flex justify-between py-7 px-10'>
                <div>
                    <p className='mt-10 text-4xl font-bold'>👋Hey there, I'm Etisha</p>
                    <p className='mt-8 mr-60 text-lg mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to='/contact' className='bg-violet-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white'>CONTACT ME</Link>
                </div>
                <img src={profile} alt='profile image' className="h-[380px] w-[450px]"/>
            </div>

            {/* Youtube Links */}

            <div className='flex-col justify-center items-center py-7 px-10 bg-gray-100'>
                <p className='mt-14 text-4xl font-bold text-center'>Learn from my Youtube Videos</p>
                <p className='mt-3 text-lg font-normal text-center'>Sharing what I know and learnt, with the community</p>

                <div className='grid grid-cols-3 gap-8 mt-6'>
                    {yt_cards}
                </div>
                
                <div className='grid mt-6'>
                    <a className='bg-violet-300 font-bold text-2xl px-3 py-2 m-auto rounded shadow-xl hover:ring-2 hover:text-white' href="https://www.youtube.com/channel/UCNliY-e1-7VNtuWgrSib1UQ" target="_blank">Click to watch more! &gt;&gt;&gt;</a>
                </div>
            </div>

            {/* Developer community */}

            <div className='flex-col justify-center items-center py-7 px-10'>
                <p className='mt-14 text-4xl font-bold text-center'>Developer Community Events</p>
                <p className='mt-3 text-lg font-normal text-center'>Have been organising and hosting community events</p>

                <div className='grid grid-cols-3 gap-8 mt-6'>
                    {dev_cards}
                </div>
            </div>

            {/* Subscribe to newsletter */}

            <div className='flex justify-center items-center py-7 px-20 bg-gray-100 mt-8'>
                <div className='bg-violet-300 flex flex-col items-center m-auto px-[100px] py-[25px]'>
                    {/* <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/> */}
                    <p className='pt-3 text-4xl font-bold'>Subscribe to the newsletter</p>
                    <p className='mt-1 mb-3 text-lg font-normal'>Stay up to date with latest news and updates</p>
                    <form onSubmit={handleSubmit} className='flex justify-center items-center gap-2 mt-2'>
                        <input className='h-[36px] w-[300px] rounded p-2' type='email' name='email' placeholder='Enter your Email' required/>
                        <button className='bg-violet-500 px-2 py-1 text-xl font-bold rounded shadow-xl hover:ring-2 hover:text-white'>Subscribe</button>
                    </form>
                </div>
            </div>
  
        </div>
    )
}

export default Home