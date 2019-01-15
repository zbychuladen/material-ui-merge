import * as React from "react";
import TabsM from "../Tabs";
import TabM from "../../Tab/Tab";


const Tab = props => <TabM {...props} />;
const Tabs = props => <TabsM {...props}>{props.children}</TabsM>;


export default (
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    key="1"
    defaultValue={1}
  >
    <Tab label="Active" key="2" fullWidth />
    <Tab label="Disabled" key="3" fullWidth />
    <Tab label="Active" key="4" fullWidth />
  </Tabs>
);
