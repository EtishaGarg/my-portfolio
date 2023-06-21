import { Link, NavLink } from 'react-router-dom'
import logoE from '../../assets/images/logoE.png'

const Navbar = () => {
    return(
        <div className='h-28 flex justify-between py-7 px-10'>
            <Link className='flex justify-center items-center' to='/'>
                <img className='w-10 h-12' src={logoE} alt='logo'/>
                <h3 className='text-2xl font-normal'>tisha Garg</h3>
            </Link>
            <nav className='flex justify-center items-center'>
                <NavLink className="px-6 py-2 text-2xl font-normal hover:font-bold rounded" to='/' exact={true} activeClassName='active'>Home</NavLink>
                <NavLink className="px-6 py-2 text-2xl font-normal hover:font-bold rounded" to='/work' exact={true} activeClassName='active'>Work</NavLink>
                <NavLink className="px-6 py-2 text-2xl font-normal hover:font-bold rounded" to='/about' exact={true} activeClassName='active'>About</NavLink>
                <NavLink className="px-6 py-2 text-2xl font-normal hover:font-bold rounded" to='/contact' exact={true} activeClassName='active'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar