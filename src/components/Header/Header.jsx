import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../'
import './Header.css';
import { LogoutBtn } from '../';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const authStatus = useSelector(state => state.auth.status)

    return (
        <header className="header">
            <div id='navbar'>
                <div>
                    <Logo />
                </div>
                <div className='navlinks'>
                    <ul>
                        {authStatus === true &&
                            <>
                                <li className='navitem'>
                                    <Link to="/">Home</Link>
                                </li>
                            </>
                        }
                        {authStatus === false &&
                            <>
                                <li className='navitem'>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className='navitem'>
                                    <Link to="/signup">Signup</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                {authStatus === true &&
                    <>
                        <LogoutBtn />
                    </>
                }
            </div>
        </header>
    );
};

export default Header;