import * as React from "react";
import Grid from "../Grid";
import Paper from "../../Paper/Paper";

export default (
  <Grid container spacing={24} uxpId="1">
    <Grid item xs={3} uxpId="1.1">
      <Paper uxpId="1.1.1">xs=3</Paper>
    </Grid>
    <Grid item xs={3} uxpId="1.2">
      <Paper uxpId="1.2.1">xs=3</Paper>
    </Grid>
    <Grid item xs={3} uxpId="1.3">
      <Paper uxpId="1.3.1">xs=3</Paper>
    </Grid>
    <Grid item xs={3} uxpId="1.4">
      <Paper uxpId="1.4.1">xs=3</Paper>
    </Grid>
    <Grid item xs={8} uxpId="1.5">
      <Paper uxpId="1.5.1">xs=8</Paper>
    </Grid>
    <Grid item xs={4} uxpId="1.6">
      <Paper uxpId="1.6.1">xs=4</Paper>
    </Grid>
  </Grid>
);
