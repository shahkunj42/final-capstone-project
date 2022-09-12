import React, {useState} from 'react'
import {Link} from 'react-router-dom' 
import './Navbar.css';
import { Button } from './Button';

function Navbar({user, admin}) {
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

    
    if (admin){

        return (
            <>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>
                            Designs By Shai <i className="fa-solid fa-spa" />
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
                                <Link to='/administration' className='nav-links' onClick={closeMobileMenu} >
                                    Admin
                                </Link>
                            </li>
                            <li className='navItem'>
                                <Link to='/inquiries' className='nav-links' onClick={closeMobileMenu} >
                                    Inquiries
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>
                            <Link to={'log-out'} className='btn-mobile'>
                                Admin Authenticated
                            </Link>
                            </Button>}
                    </div>
                </nav>

            </>
        )
    }
        else if(user){
            return (
                <>
                    <nav className='navbar'>
                        <div className='navbar-container'>
                            <Link to='/' className='navbar-logo'>
                                Designs By Shai <i className="fa-solid fa-spa" />
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
                                    <Link to='/inquire' className='nav-links' onClick={closeMobileMenu} >
                                        Inquire
                                    </Link>
                                </li>
                            </ul>
                            {button && <Button buttonStyle='btn--outline'>
                                <Link to='/log-out' className='btn-mobile'>
                                    {user.username}
                                </Link>
                                </Button>}
                        </div>
                    </nav>
    
                </>
            )
            
        }

    else{
        return (
            <>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>
                            Designs By Shai <i className="fa-solid fa-spa" />
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
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>
                            <Link to='/sign-up' className='btn-mobile'>
                                 SIGN UP
                            </Link>
                            </Button>}
                    </div>
                </nav>

            </>
        )
    }
            
}

export default Navbar