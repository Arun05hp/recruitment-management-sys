import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3, 2),
    bottom: 0,
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container>
        <Box>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
              Recruit.Inc
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Footer;
