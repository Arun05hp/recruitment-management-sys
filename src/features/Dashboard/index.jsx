import React from "react";
import clsx from "clsx";
import { makeStyles, Container, Grid, Paper } from "@material-ui/core";

import AboutUs from "../AboutUs";
import VisualizeContainer from "../../components/visualize/VisualizeContainer";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 515,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={fixedHeightPaper}>
            <VisualizeContainer />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <AboutUs />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
