import * as React from "react";
import ExpansionPanelSummaryM from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import TypographyM from "../../Typography/Typography";

const ExpansionPanelSummary = (props) => <ExpansionPanelSummaryM {...props}>{props.children}</ExpansionPanelSummaryM>;
const Typography = (props) => <TypographyM {...props}>{props.children}</TypographyM>;

export default (
  <ExpansionPanelSummary expandIcon={`<Icon>expand_more</Icon>`} key="2">
    <Typography key="3">Expansion Panel 1</Typography>
  </ExpansionPanelSummary>
);
