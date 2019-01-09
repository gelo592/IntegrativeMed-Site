import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/new_more_logo.png'
import { Typography, Drawer, List, Divider, IconButton, ListItem, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HamburgerIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../constants/constants';
import { Hidden } from '@material-ui/core';
import _ from 'lodash';

const drawerWidth = 240;

const styles = theme => ({
  dropdown: {
    backgroundColor: 'white',
    opacity: 1,
  },
  button: {
    textDecoration: 'none',
    fontSize: 20,
    textTransform: 'capitalize',
    padding: '12px 10px',
    color: colors.imc_blue.main,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingBottom: 100,
  },
  drawerHeader: {
    color: colors.imc_blue.main,
    paddingLeft: 16,
    paddingTop: 20,
    // textTransform: 'uppercase',
    fontWeight: 700,
  }
});

class Header extends React.Component {
  state = { open: false };

  _handleClose = () => {
    this.setState({ open: false })
  }

  _handleOpen = () => {
    this.setState({ open: true })
  }

  renderSublinks(link, classes) {
    return (
      <div style={{display: 'flex', flex: 1, flexGrow: 1, flexDirection: 'column'}}>
        {link.sublinks && link.sublinks.map(sub =>
          (<Button key={sub.name} className={classes.button} onClick={() => navigate(sub.link)}>{sub.displayName}</Button>))}
      </div>
    );
  }

  render () {
    const { menuLinks, classes } = this.props;
    const { open } = this.state;
    const providers = _.find(menuLinks, { name: 'providers' }).sublinks;
    const services = _.find(menuLinks, { name: 'services' }).sublinks;
    const media = _.find(menuLinks, { name: 'media' }).sublinks;
    return (
      <div style={{ boxShadow: '#80808059 0px 1px 4px 0px', zIndex: 100, display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}} >
        <img src={logo} alt="Integrative Medicine Clinic" style={{ width: 300, margin: 10 }} />
        <Hidden mdUp>
            <IconButton style={{ position: 'absolute', top: 20, left: 20}} onClick={this._handleOpen}>
              {<HamburgerIcon />}
            </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this._handleClose}>
              {<ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component="a" onClick={this._handleClose}href={'/'}>
              <ListItemText primary={'Home'} />
            </ListItem>
          </List>
          <Divider />
          <Typography className={classes.drawerHeader}>Providers</Typography>
          <List>
            {providers && providers.map((p, index) => (
              <ListItem button component="a" onClick={this._handleClose}href={p.link}  key={p.name}>
                <ListItemText primary={p.displayName} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography className={classes.drawerHeader}>Services</Typography>
          <List>
            {services && services.map((s, index) => (
              <ListItem button component="a" onClick={this._handleClose}href={s.link} key={s.name}>
                <ListItemText primary={s.displayName} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography className={classes.drawerHeader}>Media</Typography>
          <List>
            {media && media.map((m, index) => (
              <ListItem button component="a" onClick={this._handleClose}href={m.link} key={m.name}>
                <ListItemText primary={m.displayName} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button component="a" onClick={this._handleClose}href={'/patients'} >
              <ListItemText primary={'New Patient'} />
            </ListItem>
          </List>
        </Drawer>
        </Hidden>
        <Hidden smDown>
          <nav style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              menuLinks.map(link =>
                (<li key={link.name} style={{ 'listStyleType': 'none', marginLeft: 2, textDecoration: 'none' }}>
                  {link.isLink && <Button href={link.link} className={classes.button}>{link.displayName}</Button>}
                  {!(link.isLink) && (
                    <div>
                      <Tooltip title={this.renderSublinks(link, classes)} interactive classes={{ tooltip: classes.dropdown }}>
                        <Button className={classes.button}>
                          {link.displayName}
                        </Button>
                      </Tooltip>
                    </div>)}
                </li>))
            }
          </nav>
        </Hidden>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
