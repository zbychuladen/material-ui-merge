import * as React from "react";
import GridListTile from "../GridListTile";
import GridListTileBar from "../../GridListTileBar/GridListTileBar";
import Image from "../../Image/Image";

export default (
    <GridListTile cols={1} uxpId="1">
      <Image src="http://uxpin.com/images/homepage/about-us/location-gdynia.jpg" alt="Gdynia" uxpId="1.1" width="100%" height="100%" objectFit="cover" />
      <GridListTileBar
        uxpId="2"
        title="Gdynia"
        titlePosition="top"
        actionIcon={
          `<Icon>
           star_border
          </Icon>`
        }
        actionPosition="left"
      />
    </GridListTile>
);
