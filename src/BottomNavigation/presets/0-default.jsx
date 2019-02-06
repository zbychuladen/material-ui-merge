import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';

export default (
  <BottomNavigation uxpId="1">
      <BottomNavigationAction uxpId="2" label="Home" icon={"<Icon>home</Icon>"} />
      <BottomNavigationAction uxpId="3" label="Recents" icon={"<Icon>restore</Icon>"} />
      <BottomNavigationAction uxpId="4" label="user" icon={"<Icon>person</Icon>"} />
  </BottomNavigation>
);