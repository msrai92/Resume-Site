import React from 'react';
import { DialogButton } from '../util/Buttons';
import classNames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import '../styles/experience.scss';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    color: '#66FCF1',
    backgroundColor: '#424242'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


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


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <h3>{children}</h3>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      color: '#66FCF1',
      backgroundColor: '#424242'
    },
}))(MuiDialogContent);
  

const JobDialog = (props) => {
    const { title, description } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <DialogButton styleName="dialog-btn" onClick={handleClickOpen}>
              More Details
            </DialogButton>
            <Dialog  disableScrollLock onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  {title}
                </DialogTitle>
                <DialogContent dividers>
                  <List>
                  {description.map((item, index) => (
                    <ListItem style={{alignItems: 'flex-start' }} key={index}>
                      <ListItemIcon style={{paddingTop: '15px'}}>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                  </List>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default JobDialog;