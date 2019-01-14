import * as React from "react";
import AppBarM from "../AppBar";
import ToolbarM from "../../Toolbar/Toolbar";
import IconButtonM from "../../IconButton/IconButton";
import IconM from "../../Icon/Icon";
import TypographyM from "../../Typography/Typography";
import ButtonM from "../../Button/Button";

const AppBar = (props) => <AppBarM {...props}>{props.children}</AppBarM>;
const Toolbar = (props) => <ToolbarM {...props}>{props.children}</ToolbarM>;
const IconButton = (props) => <IconButtonM {...props}>{props.children}</IconButtonM>;
const Icon = (props) => <IconM {...props}>{props.children}</IconM>;
const Typography = (props) => <TypographyM {...props}>{props.children}</TypographyM>;
const Button = (props) => <ButtonM {...props}>{props.children}</ButtonM>;

export default (
  <AppBar position="static" key="1">
    <Toolbar key="2">
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
