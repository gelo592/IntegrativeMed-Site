import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { colors } from '../constants/constants'
import { withStyles } from '@material-ui/core/styles'
import withRoot from './withRoot';

const styles = theme => ({
  header: {
    backgroundColor: colors.imc_blue.dark,
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  margin: {
    // margin: '20px 80px',
  },
  headerText: {
    color: 'white',
    // textTransform: 'uppercase',
  }
});

class SubLayout extends React.Component {
  render() {
    const { title, classes, children } = this.props;
      return (<Grid container>
            <Grid xs={12} item className={classes.header}>
              <Typography className={classes.headerText} variant={'h2'}>{title}</Typography>
            </Grid>
            <Grid xs={12} item className={classes.margin}>
              {children}
            </Grid>
          </Grid>);
  }
}

export default withRoot(withStyles(styles)(SubLayout))
