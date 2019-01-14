import * as React from 'react';
import CardActionsM from '../CardActions';
import IconButtonM from '../../IconButton/IconButton';
import IconM from '../../Icon/Icon';

let IconButton = (props) => <IconButtonM {...props}>{props.children}</IconButtonM>;
let Icon = (props) => <IconM {...props}>{props.children}</IconM>;

export default (
  <CardActionsM key="1">
    <IconButton key="2" aria-label="Add to favorites">
      <Icon key="21">favorite</Icon>
    </IconButton>
    <IconButton key="3" aria-label="Share">
      <Icon key="31">share</Icon>
    </IconButton>
  </CardActionsM>
);