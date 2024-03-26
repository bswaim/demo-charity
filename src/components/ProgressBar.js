import React, {useState} from "react";
import PropTypes from "prop-types";

function ProgressBar ({
    classNames,
    goal = 100,
    progress = 0
                      }) {
    const progressPercent = progress === 0 ? 0 : Math.round((progress/goal) * 100);
    const rounding = progressPercent < 100 ? 'rounded-l' : 'rounded';
    return (
            <div className='w-full h-[20px] bg-white shadow-inner drop-shadow-sm rounded'>
                <div className={`w-[${progressPercent}%] bg-green-600 h-[10px] ${rounding}`}>
            </div>
        </div>
    )
}
ProgressBar.propTypes = {
    classNames: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default ProgressBar;