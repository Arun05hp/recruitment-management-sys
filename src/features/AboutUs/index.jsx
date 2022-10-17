import React from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function AboutUs() {
  const classes = useStyles();
  const preventDefault = (e) => e.preventDefault();
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        About Recruit.Inc
      </Typography>
      <Typography component="p" variant="h5">
        With millions of people, organizations and technologies on Recruit.Inc,
        find one meant for you. #JustDoIT
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Founded in 2020, RecruitInc connects the world's professionals to make
        them more productive and successful. With more than 666+ million members
        worldwide, Recruit.Inc is one of the world's largest professional
        network. The company has a diversified business model with revenue
        coming from Talent and Technology Solutions, Marketing Solutions, and
        Premium Subscriptions products. Headquartered in Kangra Valley,
        Recruit.Inc has offices across the globe.
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Get started now!
        </Link>
      </div>
    </>
  );
}
