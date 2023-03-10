import React, { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import {Link,animateScroll} from 'react-scroll';
import {links} from '../../Data';
import './header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const scrollTop = () =>{
        animateScroll.scrollToTop();
    };

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, []);

    useEffect(() =>{
        document.body.classList.toggle('no-scroll', showMenu);
    },[showMenu]);

    return (
        <header className={`${scrollNav ? 'scroll-header' : ''}
        header`}>
            <nav className='nav'>
                <Link to='/' onClick={scrollTop} className='nav__logo text-cs'>
                    Jonathan
                </Link>

                <div className={`${showMenu ? 'nav__menu show-menu' :
                'nav__menu'}`}>
                    <div className='nav__data'>
                        <ul className='nav__list'>
                            {links.map(({name, path}, index) =>{
                                return(
                                    <li className='nav__item' key={index}>
                                        <Link
                                            className='nav__link text-cs'
                                            to={path}
                                            spy={true}
                                            hashSpy={true}
                                            smooth={true}
                                            offset={-150}
                                            duration={500}
                                            onClick={() =>
                                                setShowMenu(!showMenu)}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="header__socials">
                            <a href='' className='header__social-link'>
                                <FaTwitter/>
                            </a>
                            <a href='' className='header__social-link'>
                                <FaGithub/>
                            </a>
                            <a href='' className='header__social-link'>
                                <FaInstagram/>
                            </a>
                            <a href='' className='header__social-link'>
                                <FaLinkedin/>
                            </a>
                            <a href='' className='header__social-link'>
                                <FaFacebook/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='nav__btns'>
                    <div className="theme__toggler">
                        <BsSun/>
                    </div>

                    <div className={`${showMenu ? 'nav__toggle animate-toggle' :
                    'nav__toggle'}`} onClick={() =>
                        setShowMenu(!showMenu)} >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;