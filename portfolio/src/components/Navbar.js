import React, { useState } from 'react';
import { Link } from 'react-scroll';
import IconButton from '@material-ui/core/IconButton'
import BorderAllIcon from '@material-ui/icons/BorderAll';
import { makeStyles } from '@material-ui/styles'
import logo from '../img/logo.svg';
import '../styles/navbar.scss';

const useStyles = makeStyles({
    root: {
        color: '#66FCF1',
        '&:hover':{
            color: '#45A29E'
        }
    }
})

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const classes = useStyles();
    return (
        <nav className="navbar">
            <div className="nav-title">
                <img src={logo} alt="logo" width="200"/>
            </div>
            <div className="nav-btn">
                <div className="menu-btn">
                    <IconButton className={classes.root} onClick={handleClick} >
                        <BorderAllIcon />
                    </IconButton>
                </div>
            </div>
            <ul className={click ? 'nav-sub-menu active' : 'nav-sub-menu'}>
            <li className="nav-sub-item">
                <Link to="about" spy={true} smooth={true} duration={500} delay={500} activeClass="nav-active-link" onClick={handleClick} className="nav-sub-link">About</Link>
            </li>
            <li className="nav-sub-item">
                <Link to="experience" spy={true} smooth={true} duration={500} delay={500} activeClass="nav-active-link"  onClick={handleClick} className="nav-sub-link">Experience</Link>
            </li>
            
        </ul>
        </nav>
    )
}

export default Navbar;

/*
<li className="nav-sub-item">
                <Link spy={true} smooth={true} duration={500} delay={500} activeClass="nav-active-link" onClick={handleClick} className="nav-sub-link">Skills</Link>
            </li>
            <li className="nav-sub-item">
                <Link spy={true} smooth={true} duration={500} delay={500} activeClass="nav-active-link" onClick={handleClick} className="nav-sub-link">Contact</Link>
            </li>
<div onClick={handleClick} className={click ? 'menu-btn-open' : 'menu-btn'}>
                    <div className="menu-btn-burger"></div>
                </div>
*/