import * as React from "react";
import Toolbar from "../Toolbar";
import IconButton from "../../IconButton/IconButton";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";

export default (
  <Toolbar key="1" justifyContent="space-between">
    <IconButton color="inherit" aria-label="Menu" key="2">
      <Icon key="3">menu</Icon>
    </IconButton>
    <Typography variant="h6" color="inherit" key="4">
      News
    </Typography>
    <Button color="inherit" key="5">Login</Button>
  </Toolbar>
);
