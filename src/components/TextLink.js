import React, {useState} from "react";
import PropTypes from "prop-types";

function TextLink ({text, onClick}) {
    return (
        <div onClick={() => onClick()}>{text}</div>
    )
}
TextLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default TextLink;