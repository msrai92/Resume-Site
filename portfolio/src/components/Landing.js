import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-scroll';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
//import GetAppIcon from '@material-ui/icons/GetApp';
import EmailIcon from '@material-ui/icons/Email';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import selfie from '../img/selfie.svg';
import classNames from 'classnames';
import '../styles/landing.scss';

const useStyles = makeStyles({
    root: {
        color: '#66FCF1',
        '&:hover':{
            color: '#45A29E'
        }
    },
    button: {
        color: '#66FCF1',
        background: '#0b0c10',
        '&:hover':{
            color: '#45A29E',
            background: '#1F2833'
        },

    }
})

const Landing = () => {
    const classes = useStyles();
    return (
        <div className="landing-container">
            <div className="landing-content">
                <div className="landing-aside">
                    <div className="landing-info">
                        <div className="landing-title">
                            <h1 className="title">Manvir Rai</h1>
                        </div>
                        <div className="landing-bio">
                            <div className="bio-text">
                                <h3>Fullstack Developer</h3>
                                <p className="summary">Experience in frontend web development, using React and Angular, as well as backend development using NodeJS.</p>
                            </div>
                            <div className="cv-download">
                                <Button className={classNames(classes.button, 'contact-me-btn')} endIcon={<EmailIcon fontSize="large" />} variant="contained">
                                <Link to="contact-me" spy={true} smooth={true} duration={500} delay={500} >Contact Me</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="landing-img">
                        <img src={selfie} alt="selfie" className="selfie" width="400"/>
                        <div className="media-icons">
                            <IconButton className={classes.root}>
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <IconButton className={classes.root}>
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <IconButton className={classes.root}>
                                <InstagramIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-down">
                <IconButton className={classes.root}>
                    <Link to="about" smooth={true} duration={500} delay={500}><ArrowDownwardIcon fontSize="large" /></Link>
                </IconButton>
            </div>
        </div>
    )
} 

export default Landing;