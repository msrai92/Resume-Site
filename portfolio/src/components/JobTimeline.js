import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import { findByLabelText } from '@testing-library/dom';
import { Directions } from '@material-ui/icons';

const theme = createMuiTheme();

theme.shadows[24] = theme.shadows[4];

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

const JobTimeline = () => {
    const classes = useStyles();
    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot classes={{root: classes.root}} />
                <TimelineConnector  classes={{root: classes.MuiTimeLineSeparator}} />
                </TimelineSeparator>
                <TimelineContent>
                <div className="timeline-content-container">
                        <div>
                            <h3>
                                Wipro
                            </h3>
                        </div>
                        <div className="timeline-subtitle">
                            <h4>OSDU project for Chevron through Wipro</h4>
                        </div>
                        <div className="timeline-date">
                            <p>08/2019 - 12/2020</p>
                        </div>
                        <div className="timeline-list"> 
                            <p>Performed</p>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot classes={{root: classes.root}} />
                <TimelineConnector classes={{root: classes.MuiTimeLineSeparator}} />
                </TimelineSeparator>
                <TimelineContent classes={{root: classes.timelineContent}}>
                    <div className="timeline-content-container">
                        <div>
                            <h3>
                                Chevron
                            </h3>
                        </div>
                        <div className="timeline-subtitle">
                            <h4>OSDU project for Chevron through Wipro</h4>
                        </div>
                        <div className="timeline-date">
                            <p>08/2019 - 12/2020</p>
                        </div>
                        <div className="timeline-list"> 
                            <p>Performed</p>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                <TimelineDot classes={{root: classes.root}} />
                <TimelineConnector classes={{root: classes.MuiTimeLineSeparator}}/>
                </TimelineSeparator>
                <TimelineContent>
                    <div className="timeline-content-container">
                        <div>
                            <h3>
                                Open Footprint Project
                            </h3>
                        </div>
                        <div className="timeline-subtitle">
                            <h4>OSDU project for Chevron through Wipro</h4>
                        </div>
                        <div className="timeline-date">
                            <p>08/2019 - 12/2020</p>
                        </div>
                        <div className="timeline-list"> 
                            <p>Performed</p>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot classes={{root: classes.root}} />
                </TimelineSeparator>
                <TimelineContent>BP Project</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default JobTimeline