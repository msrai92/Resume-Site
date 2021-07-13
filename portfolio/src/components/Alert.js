import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { removeAlert } from '../actions/alert';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#45A29E',
        '&:hover':{
            backgroundColor: '#66FCF1'
        },
    },
    MuiTimeLineSeparator: {
        backgroundColor: '#C5C6C7'
    },
    timelineContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }

})

const Alert = props => {
    const remove = (id) => {
        console.log('id', id)
        props.removeAlert(id)
    }
    return(
        props.alerts !== null && props.alerts.length > 0 && props.alerts.map(alert => (
            <div className={`alert-container ${alert.alertType}`} key={alert.id}>
                <p>
                    {alert.msg}
                </p>
                <IconButton aria-label="close" onClick={() => remove(alert.id)}>
                    <CloseIcon />
                </IconButton>
            </div>
        ))
    );
}


Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
    removeAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps, { removeAlert })(Alert);