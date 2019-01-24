import * as React from "react";
import ExpansionPanel from "../ExpansionPanel";
import ExpansionPanelSummary from "../../ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "../../ExpansionPanelDetails/ExpansionPanelDetails";
import Typography from "../../Typography/Typography";
import Paper from "../../Paper/Paper";

export default (
  <div key="paper0" style={{"width": "100%"}}>
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
  </div>
);