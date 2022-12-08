import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import PeopleIcon from "@material-ui/icons/People";
import React from "react";
import { Link as RouteLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div>
      <RouteLink to="/">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </RouteLink>

      <RouteLink to="/technologies">
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Technologies" />
        </ListItem>
      </RouteLink>

      <RouteLink to="/employees">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
      </RouteLink>

      <RouteLink to="/companies">
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Organizations" />
        </ListItem>
      </RouteLink>
    </div>
  );
};

export default SideNavbar;
