import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return(
        <div className='flex py-7 px-10 gap-10'>
            <div className='flex flex-col'>
                <h1>Let's chat</h1>
                <p>Feel free to reach out tp work together on a project, discuss project ideas, or just a friendly hello.</p>
                <div className='flex'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                    <p>Mail me at <a href="#">gargetisha@gmail.com</a></p>
                </div>
            </div>
            <div className='flex flex-col mt-5 bg-violet-300 shadow-md p-4 gap-2'>
                <h1>Send me a message!</h1>
                <form className='flex flex-col bg-violet-300 gap-2'>
                    <input type="text" placeholder='Full Name' required/>
                    <input type="email" placeholder='Email address' required/>
                    <input type="text" placeholder='Subject' required/>
                    <textarea placeholder='Message'/>
                    <button className='bg-violet-500'>Send message</button>
                </form>

            </div>

        </div>
    )
}

export default Contact