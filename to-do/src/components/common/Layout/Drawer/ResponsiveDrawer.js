import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import {compose} from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Divider,
  CssBaseline,
  MenuList,
  MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



import styles from './drawer-style';

class ResponsiveDrawer extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, location: {pathname}, match : { url }, theme, tasks } = this.props;
    const { mobileOpen } = this.state;
    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem component={Link} to="/" selected={'/' === pathname}>
            Home
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/tasks" selected={'/tasks' === pathname}>
            Tasks
          </MenuItem>
          <Divider />
          <MenuList>
            {tasks.map((task, i) => (
              <MenuItem key={task._id} component={Link} to={`/tasks/${task._id}`} className={classes.nested} selected={`/tasks/${task._id}` === pathname}>
                {task.title}
              </MenuItem>
            ))}
          </MenuList>
        </MenuList>
      </div>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Boilerplate App
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{'Welcome'}</Typography>
            {this.props.children}
          </main>
        </div>
      </Fragment>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(ResponsiveDrawer);
