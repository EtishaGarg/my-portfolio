import './index.scss'
import profile from '../../assets/profile.png'
// import yt1 from '../../assets/images/yt1.jpg'
import { Link } from 'react-router-dom'
import YT_Card from "../Cards/YT_Card"
import YT_data from "../../data/YT_data"



const Home = () => {

    const yt_cards = YT_data.map(item => {
        return (
            <YT_Card
                key={item.id}
                {...item}
            />
        )
    })

    return(
        <div className='flex-col justify-center items-center'>

            {/* Intro */}
            <div className='flex justify-between py-7 px-10'>
                <div>
                    <p className='mt-10 text-4xl font-bold'>👋Hey there, I'm Etisha</p>
                    <p className='mt-8 mr-60 text-lg mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to='/contact' className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white'>CONTACT ME</Link>
                </div>
                <img src={profile} alt='profile image' className="h-[380px] w-[450px]"/>
            </div>

            {/* Youtube Links */}

            <div className='flex-col justify-center items-center py-7 px-10 bg-gray-100'>
                <p className='mt-14 text-4xl font-bold text-center'>Learn from my Youtube Videos</p>
                <p className='mt-3 text-lg font-normal text-center'>Sharing what I know and learnt, with the community</p>

                <div className='grid grid-cols-3 gap-8 mt-6'>

                    {yt_cards}
                    {/* <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
                        <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                            <img className='w-full h-50' src={yt1}/>
                            <a href="https://youtu.be/vmABD38bITY" target="_blank" className='text-2xl font-medium hover:font-bold'>What is Open Source?</a>
                            <p className='mt-2 mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href="https://youtu.be/vmABD38bITY" target="_blank">Watch on Youtube</a>
                        </div>
                    </div>

                    <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
                        <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                            <img className='w-full h-50' src={yt1}/>
                            <a href="https://youtu.be/vmABD38bITY" target="_blank" className='text-2xl font-medium hover:font-bold'>What is Open Source?</a>
                            <p className='mt-2 mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href="https://youtu.be/vmABD38bITY" target="_blank">Watch on Youtube</a>
                        </div>
                    </div>

                    <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
                        <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                            <img className='w-full h-50' src={yt1}/>
                            <a href="https://youtu.be/vmABD38bITY" target="_blank" className='text-2xl font-medium hover:font-bold'>What is Open Source?</a>
                            <p className='mt-2 mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href="https://youtu.be/vmABD38bITY" target="_blank">Watch on Youtube</a>
                        </div>
                    </div>

                    <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
                        <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                            <img className='w-full h-50' src={yt1}/>
                            <a href="https://youtu.be/vmABD38bITY" target="_blank" className='text-2xl font-medium hover:font-bold'>What is Open Source?</a>
                            <p className='mt-2 mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href="https://youtu.be/vmABD38bITY" target="_blank">Watch on Youtube</a>
                        </div>
                    </div>

                    <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
                        <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                            <img className='w-full h-50' src={yt1}/>
                            <a href="https://youtu.be/vmABD38bITY" target="_blank" className='text-2xl font-medium hover:font-bold'>What is Open Source?</a>
                            <p className='mt-2 mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href="https://youtu.be/vmABD38bITY" target="_blank">Watch on Youtube</a>
                        </div>
                    </div>

                    <div className='h-[450px] p-10 bg-purple-300 rounded-xl'>
                        <div className='flex-col text-center h-[380px] bg-white shadow-xl rounded-xl overflow-hidden'>
                            <img className='w-full h-50' src={yt1}/>
                            <a href="https://youtu.be/vmABD38bITY" target="_blank" className='text-2xl font-medium hover:font-bold'>What is Open Source?</a>
                            <p className='mt-2 mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <a className='bg-purple-300 px-3 py-2 text-2xl font-bold rounded shadow-xl hover:ring-2 hover:text-white' href="https://youtu.be/vmABD38bITY" target="_blank">Watch on Youtube</a>
                        </div>
                    </div> */}
                </div>
                <div className='grid mt-6'>
                    <a className='bg-purple-300 font-bold text-2xl px-3 py-2 m-auto rounded shadow-xl hover:ring-2 hover:text-white' href="https://www.youtube.com/channel/UCNliY-e1-7VNtuWgrSib1UQ" target="_blank">Click to watch more! &gt;&gt;&gt;</a>
                </div>
            </div>
            {/* Developer community */}


            
            
        </div>
    )
}

export default Home