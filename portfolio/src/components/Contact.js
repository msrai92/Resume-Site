import React from 'react';
import { FormButton } from '../util/Buttons';
import { setAlert } from '../actions/alert';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'; 
import { Marker, LoadScript, GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import Button from '@material-ui/core/Button';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import emailjs from 'emailjs-com';
import classNames from 'classnames';
import '../styles/contact.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #65d6ce 30%, #7868e6 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 40,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px grey',
    },
    contactLabel: {
        color: 'white',
        fontFamily: 'Montserrat'
    },
    input: {
        borderRadius: 4,
        color: 'black',
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
          'Montserrat',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
          boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
      },
}));

const Contact = (props) => {
    const classes = useStyles();
    const { setAlert } = props;
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            mode: 'onChange',
            reValidateMode: 'onChange'
        }
    );
    var templateParams = {
        from_name: '',
        to_name: 'Manvir ',
        message: '',
        reply_to: '',
        subject: ''
    };
    const onSubmit = (data) => {
        sendEmail(data.email, data.subject, data.message)
    }
    const sendEmail = (email, subject, message) => {
        console.log(email);
        console.log(message);
        console.log(subject);
        if(email !== '' && message !== '' && subject !== ''){
            templateParams.from_name = email;
            templateParams.message = message;
            templateParams.subject = subject;
            templateParams.reply_to = email;
            
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER).then(function(response) {
                console.log('success', response.status, response.text);
            }, function(error) {
                console.log('failed', error);
                setAlert('Failed to send email', 'danger');
            });
        }
    }

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div className="contact-content">
                <div className="contact-details">
                    <div className="contact-details-item">
                        <h3>Phone</h3>
                        <p>(832)-488-4326</p>
                    </div>
                    <div className="contact-details-item">
                        <h3>Email</h3>
                        <p>m.singh.rai15@gmail.com</p>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="contact-form">
                                <div className="form-inputs">
                                    <FormControl fullWidth>
                                            <TextField  fullWidth margin="dense" className={classes.input} placeholder="email*" variant="outlined"  {...register('email', {required: 'please enter a valid email', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})} error={!!errors.email} id="email-input" />
                                    </FormControl>
                                    <FormControl fullWidth>
                                            <TextField  fullWidth margin="dense" className={classes.input} placeholder="subject*" variant="outlined"  {...register('subject', {required: 'please enter a subject'} )} error={!!errors.subject} id="email-input" />
                                    </FormControl>
                                    <FormControl fullWidth>
                                            <TextField fullWidth margin="dense" className={classes.input} placeholder="message*" variant="outlined"  {...register('message', {required: 'please enter a email'})} error={!!errors.message} id="email-input" />
                                    </FormControl>
                                </div>
                                <div className="cv-down-btn">
                                    <FormButton type="submit" formID="contactForm" styleName="" btnIcon="">
                                        Submit
                                    </FormButton>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { setAlert })(Contact);