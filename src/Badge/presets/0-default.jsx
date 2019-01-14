import * as React from 'react';
import BadgeM from '../Badge';
import IconM from '../../Icon/Icon';

const Icon = (props) => <IconM {...props}>{props.children}</IconM>

export default (
  <BadgeM key="1" badgeContent={3} color="primary">
    <Icon key="2">
      mail
    </Icon>
  </BadgeM>
);