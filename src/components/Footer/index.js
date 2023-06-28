import './index.scss'
import {Link} from 'react-router-dom'
import logoE from '../../assets/logoE.png'

const Footer = () => {
    return(
        <div className='pt-15 flex-col justify-center items-center text-center w-screen'>
            <div className='h-20 flex justify-between py-7 px-10 bg-white sticky w-screen'>
                <Link to='/'>
                    <img className='w-20 h-22' src={logoE} alt='logo'/>
                </Link>
                <div className='flex-col justify-center items-center'>
                    <p className='text-left ml-[30px] mb-2 text-2xl font-bold h-10 '>Socials</p>
                    <div className='grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-2 justify-center items-center'>
                        <a className='social-link' href={"https://twitter.com/GargEtisha"} target="_blank">Twitter</a>
                        <a className='social-link' href={"https://www.linkedin.com/in/etisha-garg/"} target="_blank">LinkedIn</a>
                        <a className='social-link' href={"https://www.youtube.com/EtishaGarg"} target="_blank">YouTube</a>
                        <a className='social-link' href={"https://github.com/EtishaGarg"} target="_blank">GitHub</a>
                        <a className='social-link' href={"https://www.instagram.com/couple_in_tech/"} target="_blank">Instagram</a>
                    </div>
                </div>
            </div>
            <p className='bg-gray-100 text-medium mt-[100px]'>© Copyrights by Etisha Garg. All rights reserved.</p>
        </div>

    )
}


export default Footer