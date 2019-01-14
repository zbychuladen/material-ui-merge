import * as React from 'react';
import BottomNavigationM from '../BottomNavigation';
import BottomNavigationActionM from '../../BottomNavigationAction/BottomNavigationAction';

const BottomNavigationAction = (props) => <BottomNavigationActionM {...props}/>

export default (
  <BottomNavigationM key="1">
      <BottomNavigationAction key="2" label="Home" icon={"<Icon>home</Icon>"} />
      <BottomNavigationAction key="3" label="Recents" icon={"<Icon>restore</Icon>"} />
      <BottomNavigationAction key="4" label="user" icon={"<Icon>person</Icon>"} />
  </BottomNavigationM>
);