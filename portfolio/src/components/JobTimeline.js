import React from "react";
import JobDialog from "./JobDialog";
import {
  WIPRO_INTERNAL,
  CHEVRON_ODSU,
  OPEN_FOOT_PRINT,
  BP_PROJECT,
} from "../util/Constants";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import { findByLabelText } from "@testing-library/dom";
import { Directions } from "@material-ui/icons";

const theme = createMuiTheme();

theme.shadows[24] = theme.shadows[4];

const useStyles = makeStyles({
  root: {
    backgroundColor: "#45A29E",
    "&:hover": {
      backgroundColor: "#66FCF1",
    },
  },
  MuiTimeLineSeparator: {
    backgroundColor: "#C5C6C7",
  },
  timelineContent: {
    display: "flex",
    flexDirection: "column",
  },
});

const JobTimeline = () => {
  const classes = useStyles();
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot classes={{ root: classes.root }} />
          <TimelineConnector classes={{ root: classes.MuiTimeLineSeparator }} />
        </TimelineSeparator>
        <TimelineContent classes={{ root: classes.timelineContent }}>
          <div className="timeline-content-container">
            <div>
              <h3>Siepe</h3>
            </div>
            <div className="timeline-subtitle">
              <h4>{SIEPE.title}</h4>
            </div>
            <div className="timeline-date">
              <p>{SIEPE.timeline}</p>
            </div>
            <div className="timeline-list">
              <JobDialog title={SIEPE.title} description={SIEPE.description} />
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot classes={{ root: classes.root }} />
          <TimelineConnector classes={{ root: classes.MuiTimeLineSeparator }} />
        </TimelineSeparator>
        <TimelineContent>
          <div className="timeline-content-container">
            <div>
              <h3>Wipro</h3>
            </div>
            <div className="timeline-subtitle">
              <h4>{WIPRO_INTERNAL.title}</h4>
            </div>
            <div className="timeline-date">
              <p>{WIPRO_INTERNAL.timeline}</p>
            </div>
            <div className="timeline-list">
              <JobDialog
                title={WIPRO_INTERNAL.title}
                description={WIPRO_INTERNAL.description}
              />
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot classes={{ root: classes.root }} />
          <TimelineConnector classes={{ root: classes.MuiTimeLineSeparator }} />
        </TimelineSeparator>
        <TimelineContent classes={{ root: classes.timelineContent }}>
          <div className="timeline-content-container">
            <div>
              <h3>Chevron</h3>
            </div>
            <div className="timeline-subtitle">
              <h4>{CHEVRON_ODSU.title}</h4>
            </div>
            <div className="timeline-date">
              <p>{CHEVRON_ODSU.timeline}</p>
            </div>
            <div className="timeline-list">
              <JobDialog
                title={CHEVRON_ODSU.title}
                description={CHEVRON_ODSU.description}
              />
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot classes={{ root: classes.root }} />
          <TimelineConnector classes={{ root: classes.MuiTimeLineSeparator }} />
        </TimelineSeparator>
        <TimelineContent>
          <div className="timeline-content-container">
            <div>
              <h3>Open Footprint Forum</h3>
            </div>
            <div className="timeline-subtitle">
              <h4>{OPEN_FOOT_PRINT.title}</h4>
            </div>
            <div className="timeline-date">
              <p>{OPEN_FOOT_PRINT.timeline}</p>
            </div>
            <div className="timeline-list">
              <JobDialog
                title={OPEN_FOOT_PRINT.title}
                description={OPEN_FOOT_PRINT.description}
              />
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot classes={{ root: classes.root }} />
          <TimelineConnector classes={{ root: classes.MuiTimeLineSeparator }} />
        </TimelineSeparator>
        <TimelineContent classes={{ root: classes.timelineContent }}>
          <div className="timeline-content-container">
            <div>
              <h3>BP Refinery Project</h3>
            </div>
            <div className="timeline-subtitle">
              <h4>{BP_PROJECT.title}</h4>
            </div>
            <div className="timeline-date">
              <p>{BP_PROJECT.timeline}</p>
            </div>
            <div className="timeline-list">
              <JobDialog
                title={BP_PROJECT.title}
                description={BP_PROJECT.description}
              />
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default JobTimeline;
