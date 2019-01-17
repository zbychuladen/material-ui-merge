import * as React from 'react';
import CardActions from '../CardActions';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <CardActions key="1">
    <IconButton key="2" aria-label="Add to favorites">
      <Icon key="21">favorite</Icon>
    </IconButton>
    <IconButton key="3" aria-label="Share">
      <Icon key="31">share</Icon>
    </IconButton>
  </CardActions>
);