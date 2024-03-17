import React, {useState} from "react";
import PropTypes from "prop-types";

function TextLink ({text, onClick}) {
    return (
        <button onClick={() => onClick()}>{text}</button>
    )
}
TextLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default TextLink;