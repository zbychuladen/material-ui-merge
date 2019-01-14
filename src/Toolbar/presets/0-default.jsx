import * as React from "react";
import ToolbarM from "../Toolbar";
import IconButtonM from "../../IconButton/IconButton";
import IconM from "../../Icon/Icon";
import TypographyM from "../../Typography/Typography";
import ButtonM from "../../Button/Button";

const Toolbar = props => <ToolbarM {...props}>{props.children}</ToolbarM>;
const IconButton = props => (
  <IconButtonM {...props}>{props.children}</IconButtonM>
);
const Icon = props => <IconM {...props}>{props.children}</IconM>;
const Typography = props => (
  <TypographyM {...props}>{props.children}</TypographyM>
);
const Button = props => <ButtonM {...props}>{props.children}</ButtonM>;

export default (
  <Toolbar key="1">
    <IconButton color="inherit" aria-label="Menu" key="2">
      <Icon key="3">menu</Icon>
    </IconButton>
    <Typography variant="h6" color="inherit" key="4">
      News
    </Typography>
    <Button color="inherit" key="5">Login</Button>
  </Toolbar>
);
