import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  colorPrimary: {
    backgroundColor: 'transparent',
  },
  barColorPrimary: {
    backgroundColor: props => props.color,
  }
});

export default function SkillBar(props) {
  const classes = useStyles();
  const { value, delay } = props;
  const { colorPrimary, barColorPrimary } = useStyles(props);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= value) {
          return value;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, value);
      });
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
      <LinearProgress classes={{colorPrimary: colorPrimary, barColorPrimary: barColorPrimary}} variant="determinate" value={progress} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}