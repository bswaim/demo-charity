import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import SearchResultsMenu from "./SearchResultsMenu";

function SearchBar() {
    const [valueState, setValueState] = useState('');
    const [resultsMenuOpen, setResultsMenuOpen] = useState(false);
    const [searchResultsList, setSearchResultsList] = useState([{fundraiserName: 'Water'}]);

    return (
        <div className='search-container relative'>
            <input
                autoComplete="off"
                className='rounded-full py-1 pl-3 pr-8 border-solid border-1 border-black'
                onChange={(e) => setValueState(e.target.value)}
                onFocus={() => setResultsMenuOpen(true)}
                onBlur={() => setResultsMenuOpen(false)}
                placeholder='Search for fundraiser'
                type='search'
                value={valueState}
            />
            <FontAwesomeIcon
                className='relative right-6 top-0 text-gray-400 cursor-pointer'
                icon={faSearch}
                onClick={() => setResultsMenuOpen(true)}
            />
            {resultsMenuOpen && (<div className='relative top-0 left-0 w-full h-full'>
                <SearchResultsMenu showMenu listData={searchResultsList}/>
            </div>)}
        </div>
    )
}

export default SearchBar;