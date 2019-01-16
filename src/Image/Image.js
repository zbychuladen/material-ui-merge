import React from "react";
import PropTypes from "prop-types";

function Image(props) {
  return (
    <img
      alt={props.alt}
      height={props.height}
      src={props.src}
      width={props.width}
      style={props.style}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object
};

Image.defaultProps = {
  width: "100%",
  height: "100%",
  src: "http://uxpin.com/images/homepage/about-us/location-gdynia.jpg"
}

export { Image as default };
