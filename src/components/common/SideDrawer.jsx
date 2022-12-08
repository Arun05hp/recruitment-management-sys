import { Drawer, List, makeStyles } from "@material-ui/core";

import React from "react";
import clsx from "clsx";
import SideNavbar from "./SideNavbar";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
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
    </Drawer>
  );
};

export default SideDrawer;
