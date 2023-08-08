import React from "react";
import { DownloadButton } from "../util/Buttons";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "../styles/about.scss";
import GetAppIcon from "@material-ui/icons/GetApp";
import SchoolIcon from "@material-ui/icons/School";
import classNames from "classnames";
import { Link } from "react-scroll";
import resume from "../img/logo.svg";

const useStyles = makeStyles({
  root: {
    color: "#66FCF1",
    "&:hover": {
      color: "#45A29E",
    },
  },
  button: {
    color: "#66FCF1",
    background: "#0b0c10",
    "&:hover": {
      color: "#45A29E",
      background: "#1F2833",
    },
  },
});

const About = () => {
  const classes = useStyles();
  const downloadFile = () => {
    window.location.href = resume;
  };
  return (
    <div name="about" className="about-container">
      <div className="about-title">
        <h2>About</h2>
        <p>A little bit about me</p>
      </div>
      <div className="about-content">
        <div className="about-summary">
          <div className="summary-paper">
            <div className="quick-info">
              <p>
                Software Engineer with knowledge knowledge on popular frameworks
                (React, Angular, ...), experience working on large projects and
                providing qualtiy work, and the ability to pick up new
                technologies rapidly.
              </p>
              <br />
            </div>
            <div className="education">
              <IconButton className={classes.root}>
                <SchoolIcon fontSize="large" />
              </IconButton>
              <p>University of Houston</p>
              <p>Major: Computer Science</p>
              <p>Minor: Mathematics</p>
            </div>
          </div>
        </div>
        <div className="download-cv">
          <div className="time-working">
            <div className="time-work-item">
              <h2>4</h2>
              <p>Years Experience</p>
            </div>
            <div className="time-work-item">
              <h2>04+</h2>
              <p>Completed Projects</p>
            </div>
            <div className="time-work-item">
              <h2>03</h2>
              <p>Companies worked for</p>
            </div>
          </div>
          <div className="cv-down-btn">
            <DownloadButton
              link="/Manvir - Rai - Resume.pdf"
              styleName="contact-me-btn"
              btnIcon={<GetAppIcon fontSize="large" />}
            >
              Resume
            </DownloadButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
