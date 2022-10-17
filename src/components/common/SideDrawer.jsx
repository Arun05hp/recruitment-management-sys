import {
  Divider,
  Drawer,
  IconButton,
  List,
  makeStyles,
} from "@material-ui/core";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import React from "react";
import clsx from "clsx";
import SideNavbar from "./SideNavbar";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

const SideDrawer = ({ open, handleToggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      open={open}
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
    >
      <List>
        <SideNavbar />
      </List>
      {/* <Divider />
    <List><SecondaryNav /></List> */}
    </Drawer>
  );
};

export default SideDrawer;
