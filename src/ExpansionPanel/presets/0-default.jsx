import * as React from "react";
import ExpansionPanelM from "../ExpansionPanel";
import ExpansionPanelSummaryM from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetailsM from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import TypographyM from "../../Typography/Typography";
import PaperM from "../../Paper/Paper";


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
const Paper = props => (
  <PaperM {...props}>{props.children}</PaperM>
);

export default (
  <Paper key="paper0">
    <ExpansionPanel key="1" defaultExpanded>
      <ExpansionPanelSummary key="2">
        <Typography key="3">Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails key="4">
        <Typography key="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel key="11">
      <ExpansionPanelSummary key="12">
        <Typography key="13">Expansion Panel 1</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails key="14">
        <Typography key="15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Paper>
);

// expandIcon={`<Icon>expand_more</Icon>`}