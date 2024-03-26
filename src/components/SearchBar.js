import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import SearchResultsMenu from "./SearchResultsMenu";
import PropTypes from "prop-types";

function SearchBar({classNames}) {
    const [valueState, setValueState] = useState('');
    const [resultsMenuOpen, setResultsMenuOpen] = useState(false);
    const [searchResultsList, setSearchResultsList] = useState([{fundraiserName: 'Water'}]);

    return (
        <div className='search-container relative min-w-[100px] max-w-[300px]'>
            <input
                autoComplete="off"
                className={`rounded-full w-full py-1 pl-3 pr-4 border-solid border-1 border-black ${classNames}`}
                onChange={(e) => setValueState(e.target.value)}
                onFocus={() => setResultsMenuOpen(true)}
                onBlur={() => setResultsMenuOpen(false)}
                placeholder='Search'
                type='search'
                value={valueState}
            />
            <FontAwesomeIcon
                className='absolute right-2 top-2 text-gray-400 cursor-pointer'
                icon={faSearch}
                onClick={() => setResultsMenuOpen(true)}
            />
            {resultsMenuOpen && (<div className='relative top-0 left-0 w-full h-full'>
                <SearchResultsMenu showMenu listData={searchResultsList}/>
            </div>)}
        </div>
    )
}

SearchBar.propTypes = {
    classNames: PropTypes.string
}

export default SearchBar;