import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoE from '../../assets/images/logoE.png'

const Navbar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logoE} alt='logo'/>
                <h3 className='sub-logo'>tisha Garg</h3>
            </Link>
            <nav>
                <NavLink to='/' exact={true} activeClassName='active'>Home</NavLink>
                <NavLink to='/work' exact={true} activeClassName='active'>Work</NavLink>
                <NavLink to='/about' exact={true} activeClassName='active'>About</NavLink>
                <NavLink to='/contact' exact={true} activeClassName='active'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar