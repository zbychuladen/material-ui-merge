import * as React from "react";
import CardM from "../Card";
import CardHeaderM from "../../CardHeader/CardHeader";
import CardMediaM from "../../CardMedia/CardMedia";
import CardContentM from "../../CardContent/CardContent";
import CardActionsM from "../../CardActions/CardActions";
import TypographyM from "../../Typography/Typography";
import IconM from "../../Icon/Icon";
import IconButtonM from "../../IconButton/IconButton";

const CardHeader = (props) => <CardHeaderM {...props} />;
const CardMedia = (props) => <CardMediaM {...props} />;
const CardContent = (props) => <CardContentM {...props} />;
const CardActions = (props) => <CardActionsM {...props}>{props.children}</CardActionsM>; 
const Typography = (props) => <TypographyM {...props}>{props.children}</TypographyM>;
const Icon = (props) => <IconM {...props}>{props.children}</IconM>;
const IconButton = (props) => <IconButtonM {...props}>{props.children}</IconButtonM>;

export default (
  <CardM key="1">
    <CardHeader
      key="1.1"
      avatar={`<Avatar aria-label="Recipe">
        R
      </Avatar>`}
      action={`<IconButton>
         <Icon>more_vert</Icon>
        </IconButton>`}
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia key="1.2"
      image="https://www.platingsandpairings.com/wp-content/uploads/2016/01/Paella-1-Square.jpg"
      style={{"height": "100px"}}
    />
    <CardContent key="1.3">
      <Typography component="p" key="1.3.1">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableActionSpacing key="1.4">
      <IconButton aria-label="Add to favorites" key="1.4.1">
        <Icon key="1.4.1.1">favorite</Icon>
      </IconButton>
      <IconButton aria-label="Share" key="1.4.2"> 
        <Icon key="1.4.2.1">share</Icon>
      </IconButton>
    </CardActions>
  </CardM>
);
