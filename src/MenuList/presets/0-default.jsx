import * as React from 'react';
import MenuList from '../MenuList';
import MenuItem from "../../MenuItem/MenuItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemText from "../../ListItemText/ListItemText";
import Icon from "../../Icon/Icon";

export default (
  <MenuList key="1">
    <MenuItem key="2">
      <ListItemIcon key="2.1">
        <Icon key="2.1.1">
        send
        </Icon>
      </ListItemIcon>
      <ListItemText key="2.1.2" inset primary="Send mail" />
    </MenuItem>
    <MenuItem key="3">
      <ListItemIcon key="3.1">
        <Icon key="3.1.1">
        drafts
        </Icon>
      </ListItemIcon>
      <ListItemText key="3.1.2" inset primary="Drafts" />
    </MenuItem>
    <MenuItem key="4">
      <ListItemIcon key="4.1">
        <Icon key="4.1.1">
        inbox
        </Icon>
      </ListItemIcon>
      <ListItemText key="4.1.2" inset primary="Inbox" />
    </MenuItem>
  </MenuList>
);