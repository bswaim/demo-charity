import React from "react";
import PropTypes from "prop-types";
import {forEach, get, isEmpty} from "lodash";

function SearchResultsMenu({
   listData = [],
   showMenu = false
}) {

    const renderListData = () => {
        if(!isEmpty(listData)) {
            forEach(listData, x => {
                const text = get(x, 'fundraiserName', '');
                return (<div>test{text}</div>);
            });
        }
        else return <div> no results </div>
    }

    return (<>
        {showMenu &&
            <div className='search-results bg-white border-solid border-1 border-black text-red h-full'>
                {renderListData()}
            </div>}
        </>
    )
}

SearchResultsMenu.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.any),
    showMenu: PropTypes.bool
}

export default SearchResultsMenu;