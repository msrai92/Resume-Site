import React from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import {
    makeStyles,
} from '@material-ui/core/styles';
import classNames from 'classnames';

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

export const FormButton = ({ formID, children, styleName, type, btnIcon, ...props }) => {
    const classes = useStyles();
    return (
        <Button
        form={formID}
        variant="contained"
        type={type || "button"}
        className={classNames(classes.button, styleName)}
        endIcon={btnIcon}
        {...props}
        >
            {children}
        </Button>
    )
};

export const DownloadButton = ({ link, children, styleName, type, btnIcon, ...props}) => {
    const classes = useStyles();
    return (
        <Button
        variant="contained"
        download
        href={link}
        type={type || "button"}
        className={classNames(classes.button, styleName)}
        endIcon={btnIcon}
        {...props}
        >
            {children}
        </Button>
    )
}

export const DialogButton = ({ type, onClick, styleName, children, ...props}) => {
    const classes = useStyles();
    return (
        <Button
        variant="contained"
        onClick={onClick}
        type={type || "button"}
        className={classNames(classes.button, styleName)}
        {...props}
        >
            {children}
        </Button>
    )
}