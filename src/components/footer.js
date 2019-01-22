import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/logo_w.svg'
// import classnames from 'classnames'
import { Divider, Grid, Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../constants/constants';
import { FacebookBox, Instagram } from 'mdi-material-ui'
import withRoot from './withRoot';

const styles = theme => ({
  dividerBlue: {
    margin: `${theme.spacing.unit * 2}px 20px`,
    height: 4,
    backgroundColor: colors.imc_blue.main,
  },
  email: {
    marginTop: 10,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 16,
  }
});

class Footer extends React.Component {
  state = {
  };

  renderLinks(link, sublinks, classes) {
    return (<Grid item key={link}>
      <Typography style={{textDecoration: 'underline', color: colors.imc_blue.main, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700, fontSize: 18}}>{link}</Typography>
      {sublinks && sublinks.map(sub => (
        <Link key={sub.name} to={sub.link}><Typography className={classes.link}>{sub.displayName}</Typography></Link>
      ))}
    </Grid>)
  }

  render () {
    const { menuLinks, classes } = this.props;
    return (
      <div>
      <Divider className={classes.dividerBlue} style={{ marginTop: 50}} />
      <Grid container style={{padding: 30}}>
        <Grid item xs={6}>
          <Grid container spacing={24} style={{}}>
            {menuLinks.map(link => (!link.isLink) && this.renderLinks(link.displayName, link.sublinks, classes))}
          </Grid>
        </Grid>
        <Grid item xs={6} style={{display: 'flex', alignItems: 'flex-end', flex: 1, flexDirection: 'column'}}>
          <a href={'tel:+15736325585'} className={classes.iconInfo}><Typography className={classes.link}>Clinic: (573) 632-5585</Typography></a>
          <a href={'tel:+15736168899'} className={classes.iconInfo}><Typography className={classes.link}>Shoppe: (573) 616-8899</Typography></a>
          <Typography className={classes.subtext}>Fax: 1(844) 736-2971</Typography>
          <a href={'mailTo:info@imc-jcmo.com'} className={classes.email}><Typography className={classes.link}>info@imc-jcmo.com</Typography></a>
          <div>
          <IconButton component={'a'} href={'https://www.facebook.com/IMC.jcmo/'}><FacebookBox /></IconButton>
          <IconButton component={'a'} href={'https://www.instagram.com/imc.jcmo/'}><Instagram /></IconButton>
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.dividerBlue} />
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingBottom: 10}} >
        <img src={logo} alt="Integrative Medicine Clinic" style={{ width: 25, height: 25, margin: 10 }} />
      </div>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(Footer))
