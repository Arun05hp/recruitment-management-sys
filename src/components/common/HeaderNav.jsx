import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 16,
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderNav = ({ open, handleToggleDrawer }) => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          {open ? <CloseOutlined /> : <MenuIcon />}
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Recruit.Inc
        </Typography>
        {/* <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNav;
