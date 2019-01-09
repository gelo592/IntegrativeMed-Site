import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/mini_logo.svg'
// import classnames from 'classnames'
import { Divider, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../constants/constants';

const styles = theme => ({
  dividerBlue: {
    margin: `${theme.spacing.unit * 2}px 20px`,
    height: 4,
    backgroundColor: colors.imc_blue.main,
  },
});
class Footer extends React.Component {
  state = {
  };

  renderLinks(link, sublinks) {
    return (<Grid item key={link}>
      <Typography style={{textDecoration: 'underline', color: colors.imc_blue.main, textTransform: 'capitalize', fontWeight: 700}}>{link}</Typography>
      {sublinks && sublinks.map(sub => (
        <Link key={sub.name} to={sub.link}><Typography>{sub.displayName}</Typography></Link>
      ))}
    </Grid>)
  }

  render () {
    const { menuLinks, classes } = this.props;
    return (
      <div>
      <Divider className={classes.dividerBlue} style={{ marginTop: 50}} />
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '20px 50px 80px' }} >
        <Grid container spacing={24} style={{}}>
          {menuLinks.map(link => (!link.isLink) && this.renderLinks(link.displayName, link.sublinks))}
        </Grid>
      </div>
      <Divider className={classes.dividerBlue} />
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingBottom: 10}} >
        <img src={logo} alt="Integrative Medicine Clinic" style={{ width: 25, height: 25, margin: 10 }} />
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
