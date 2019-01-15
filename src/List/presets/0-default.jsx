import * as React from "react";
import ListM from "../List";
import ListItemM from "../../ListItem/ListItem";
import ListItemIconM from "../../ListItemIcon/ListItemIcon";
import ListItemTextM from "../../ListItemText/ListItemText";
import ListItemSecondaryActionM from "../../ListItemSecondaryAction/ListItemSecondaryAction";
import SwitchM from "../../Switch/Switch";
import IconM from "../../Icon/Icon";

const List = props => <ListM {...props}>{props.children}</ListM>;
const ListItem = props => <ListItemM {...props}>{props.children}</ListItemM>;
const ListItemIcon = props => (
  <ListItemIconM {...props}>{props.children}</ListItemIconM>
);
const ListItemText = props => <ListItemTextM {...props} />;
const ListItemSecondaryAction = props => (
  <ListItemSecondaryActionM {...props}>
    {props.children}
  </ListItemSecondaryActionM>
);
const Switch = props => <SwitchM {...props} />;
const Icon = props => <IconM {...props}>{props.children}</IconM>;

export default (
  <List subheader={`<ListSubheader>Settings</ListSubheader>`} key="1">
    <ListItem key="1.1">
      <ListItemIcon key="1.1.1">
        <Icon key="1.1.1.1">wifi</Icon>
      </ListItemIcon>
      <ListItemText key="1.1.2" primary="Wi-Fi" />
      <ListItemSecondaryAction key="1.1.3">
        <Switch key="1.1.3.1" />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem key="1.2">
      <ListItemIcon key="1.2.1">
        <Icon key="1.2.1.1">bluetooth</Icon>
      </ListItemIcon>
      <ListItemText key="1.2.2" primary="Bluetooth" />
      <ListItemSecondaryAction key="1.2.3">
        <Switch key="1.2.3.1" />
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);
