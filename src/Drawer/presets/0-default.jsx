import * as React from "react";
import Drawer from "../Drawer";
import List from "../../List/List";
import ListItem from "../../ListItem/ListItem";
import ListItemText from "../../ListItemText/ListItemText";

export default (
  <Drawer uxpId="1">
    <List uxpId="2">
      <ListItem uxpId="2.1">
        <ListItemText uxpId="2.2">Send</ListItemText>
      </ListItem>
    </List>
    <List uxpId="3">
      <ListItem uxpId="3.1">
        <ListItemText uxpId="3.2">Drafts</ListItemText>
      </ListItem>
    </List>
  </Drawer>
);
