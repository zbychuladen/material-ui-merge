import * as React from "react";
import AppBar from "../AppBar";
import Toolbar from "../../Toolbar/Toolbar";
import IconButton from "../../IconButton/IconButton";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";

export default (
  <AppBar position="static" key="1">
    <Toolbar key="2" justifyContent="space-between">
      <IconButton
        color="inherit"
        aria-label="Menu"
        key="3"
      >
        <Icon key="4">menu</Icon>
      </IconButton>
      <Typography variant="h6" color="inherit" key="5">
        News
      </Typography>
      <Button color="inherit" key="6">Login</Button>
    </Toolbar>
  </AppBar>
);
