import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';

export default (
  <BottomNavigation key="1">
      <BottomNavigationAction key="2" label="Home" icon={"<Icon>home</Icon>"} />
      <BottomNavigationAction key="3" label="Recents" icon={"<Icon>restore</Icon>"} />
      <BottomNavigationAction key="4" label="user" icon={"<Icon>person</Icon>"} />
  </BottomNavigation>
);