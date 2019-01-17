import * as React from "react";
import Tabs from "../Tabs";
import Tab from "../../Tab/Tab";

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
