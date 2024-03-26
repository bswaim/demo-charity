import React, {useState} from "react";
import PropTypes from "prop-types";

function TextLink ({text, classNames, onClick}) {
    return (
        <button className={classNames} onClick={() => onClick()}>{text}</button>
    )
}
TextLink.propTypes = {
    classNames: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default TextLink;