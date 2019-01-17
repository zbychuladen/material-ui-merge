import * as React from "react";
import Grid from "../Grid";
import Paper from "../../Paper/Paper";

export default (
  <Grid container spacing={24} key="1">
    <Grid item xs={3} key="1.1">
      <Paper key="1.1.1">xs=3</Paper>
    </Grid>
    <Grid item xs={3} key="1.2">
      <Paper key="1.2.1">xs=3</Paper>
    </Grid>
    <Grid item xs={3} key="1.3">
      <Paper key="1.3.1">xs=3</Paper>
    </Grid>
    <Grid item xs={3} key="1.4">
      <Paper key="1.4.1">xs=3</Paper>
    </Grid>
    <Grid item xs={8} key="1.5">
      <Paper key="1.5.1">xs=8</Paper>
    </Grid>
    <Grid item xs={4} key="1.6">
      <Paper key="1.6.1">xs=4</Paper>
    </Grid>
  </Grid>
);
