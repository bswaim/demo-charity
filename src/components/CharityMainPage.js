import React from "react";
import PropTypes from "prop-types";
import MainHeader from "./MainHeader";
function CharityMainPage(changePages) {
    return (
        <div className='bg-white h-full w-full p-4' data-testid='chairty-landing-page'>
            <MainHeader />
        </div>
    );
}

CharityMainPage.propTypes = {
    changePages: PropTypes.func.isRequired
};
export default CharityMainPage;