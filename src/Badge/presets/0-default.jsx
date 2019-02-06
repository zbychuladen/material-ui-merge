import * as React from 'react';
import BadgeM from '../Badge';
import IconM from '../../Icon/Icon';

const Icon = (props) => <IconM {...props}>{props.children}</IconM>

export default (
  <BadgeM uxpId="1" badgeContent={3} color="primary">
    <Icon uxpId="2">
      mail
    </Icon>
  </BadgeM>
);