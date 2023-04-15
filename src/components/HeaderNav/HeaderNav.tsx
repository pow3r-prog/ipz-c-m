import { NavLink } from 'react-router-dom'

import './HeaderNav.scss'

function HeaderNav() {
    return (
        <header className='header__nav'>
            <span className='header__nav_logo'>LOGO</span>
            <NavLink to='/' className='header__nav_item'>
                Home
            </NavLink>
            <NavLink to='/projects' className='header__nav_item'>
                Projects
            </NavLink>
        </header>
    )
}

export default HeaderNav
