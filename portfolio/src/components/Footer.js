import React from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/main.scss';

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

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className="footer">
            <div className="footer-social">
                <div>
                    <IconButton className={classes.root}>
                        <LinkedInIcon fontSize="medium" /> 
                    </IconButton>
                </div>
                <div>
                    <IconButton className={classes.root}>
                        <InstagramIcon fontSize="medium" />
                    </IconButton>
                </div>
                <div>
                    <IconButton className={classes.root}>
                        <GitHubIcon fontSize="medium" />
                    </IconButton>
                </div>
            </div>
            <div className="footer-email-phone">
                <div>
                    <p>m.singh.rai15@gmail.com</p>
                </div>
                <div>
                    |
                </div>
                <div>
                    <p>(832)-488-4326</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;