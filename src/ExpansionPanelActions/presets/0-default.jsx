import * as React from "react";
import ExpansionPanelActionsM from "../ExpansionPanelActions";
import ButtonM from "../../Button/Button";

const ExpansionPanelActions = props => (
  <ExpansionPanelActionsM {...props}>{props.children}</ExpansionPanelActionsM>
);

const Button = props => <ButtonM {...props}>{props.children}</ButtonM>;

export default (
  <ExpansionPanelActions key="1">
    <Button size="small" key="2">Cancel</Button>
    <Button size="small" key="3" color="primary">
      Save
    </Button>
  </ExpansionPanelActions>
);
