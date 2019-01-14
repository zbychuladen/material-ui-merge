import * as React from "react";
import ExpansionPanelM from "../ExpansionPanel";
import ExpansionPanelSummaryM from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetailsM from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import TypographyM from "../../Typography/Typography";

const ExpansionPanel = props => (
  <ExpansionPanelM {...props}>{props.children}</ExpansionPanelM>
);
const ExpansionPanelSummary = props => (
  <ExpansionPanelSummaryM {...props}>{props.children}</ExpansionPanelSummaryM>
);
const ExpansionPanelDetails = props => (
  <ExpansionPanelDetailsM {...props}>{props.children}</ExpansionPanelDetailsM>
);
const Typography = props => (
  <TypographyM {...props}>{props.children}</TypographyM>
);

export default (
    <ExpansionPanel key="1">
      <ExpansionPanelSummary key="2" expandIcon={`<Icon>expand_more</Icon>`}>
        <Typography key="3">Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails key="4">
        <Typography key="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
);
