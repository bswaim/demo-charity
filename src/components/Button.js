import React from 'react';
import PropTypes from "prop-types";

function Button ({
    text,
    onClick = Function.prototype
}) {
    return (
        <button className='' onClick={() => onClick()}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;