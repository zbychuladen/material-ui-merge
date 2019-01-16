import * as React from 'react';
import MenuListM from '../MenuList';
import MenuItemM from "../../MenuItem/MenuItem";
import ListItemIconM from "../../ListItemIcon/ListItemIcon";
import ListItemTextM from "../../ListItemText/ListItemText";
import IconM from "../../Icon/Icon";

const MenuList = (props) => <MenuListM {...props}>{props.children}</MenuListM>;
const MenuItem = (props) => <MenuItemM {...props}>{props.children}</MenuItemM>;
const ListItemIcon = (props) => <ListItemIconM {...props}>{props.children}</ListItemIconM>;
const ListItemText = (props) => <ListItemTextM {...props}>{props.children}</ListItemTextM>;
const Icon = (props) => <IconM {...props}>{props.children}</IconM>;

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