import React, {useState} from 'react'
import {Link} from 'react-router-dom' 
import './Navbar.css';
import { Button } from './Button';

function Navbar({user}) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Designs By Shai <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='navItem'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/blogs' className='nav-links' onClick={closeMobileMenu} >
                            Blogs
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu} >
                            <i className="fa-solid fa-cart-shopping" />
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>
                    <Link to={user ? 'log-out' : '/sign-up'} className='btn-mobile'>
                        {user ? `Hello ${user.username}`: 'SIGN UP'}
                    </Link>
                    </Button>}
            </div>
        </nav>

    </>
  )
}

export default Navbar