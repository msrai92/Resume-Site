import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SkillBar from '../util/SkillBar';
import LinearBar from '../util/LinearBar';
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';
import ComputerIcon from '@material-ui/icons/Computer';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/skills.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },

  }));

const frontendSkills = [
    { name: 'React', value: 90, delay: 20, color: '#8FB8ED' },
    { name: 'Angular', value: 60, delay: 20, color: '#C2BBF0' },
    { name: 'Material UI', value: 90, delay: 20, color: '#EA3546' },
    { name: 'Bootstrap', value: 50, delay: 20, color: '#AAFAC8' },
    { name: 'HTML', value: 70, delay: 20, color: '#424874'  },
    { name: 'CSS', value: 80, delay: 20, color: '#FF8C42' },
]

const backendSkills = [
    { name: 'Javascript', value: 90, delay: 20, color: '#8FB8ED'  },
    { name: 'NodeJS', value: 80, delay: 20, color: '#C2BBF0' },
    { name: 'ExpressJS', value: 60, delay: 20, color: '#EA3546' },
    { name: 'MongoDB', value: 30, delay: 20, color: '#AAFAC8' },
    { name: 'CosmosDB', value: 60, delay: 20, color: '#424874'  },
    { name: 'Python', value: 30, delay: 20, color: '#FF8C42' },
]

const other = [
    { name: 'Git', value: 90, delay: 20, color: '#EA3546' },
    { name: 'PowerBI', value: 50, delay: 20, color: '#424874' },
    { name: 'Figma', value: 30, delay: 20, color: '#FF8C42' },
]

const Skills = () => {
    const classes = useStyles();
    return (
        <div name="skills" className="skills-container">
            <h2 >Skills</h2>
            <div className="accordian-container">
                <div className="accordion-content">
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <WebIcon style={{ color: "#45A29E"}}/>
                            <Typography style={{marginLeft: '15px'}}>
                                Frontend
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{display: 'flex', flexDirection: 'column'}}>
                            {frontendSkills.map((obj, index) => (
                                <div key={index} className="accordion-content">
                                    <h4>{obj.name}</h4>
                                    <SkillBar color={obj.color} value={obj.value} delay={obj.delay} />
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="accordion-content">
                    <Accordion className={classes.root}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <StorageIcon style={{ color: "#45A29E"}}/>
                            <Typography style={{marginLeft: '15px'}}>Backend</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{display: 'flex', flexDirection: 'column'}}>
                            {backendSkills.map((obj, index) => (
                                <div key={index} className="accordion-content">
                                    <h4>{obj.name}</h4>
                                    <SkillBar color={obj.color} value={obj.value} delay={obj.delay} />
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="accordion-content">
                    <Accordion className={classes.root}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <ComputerIcon style={{ color: "#45A29E"}}/>
                            <Typography style={{marginLeft: '15px'}}>Other Skills</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{display: 'flex', flexDirection: 'column'}}>
                            {other.map((obj, index) => (
                                <div key={index} className="accordion-content">
                                    <h4>{obj.name}</h4>
                                    <SkillBar color={obj.color} value={obj.value} delay={obj.delay} />
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Skills;