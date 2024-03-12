import React, {useState} from "react";
import {get} from "lodash";

function SearchBar() {
    const [valueState, setValueState] = useState('');

    return (
        <div className='search-container'>
            <input
                autoComplete="off"
                className='rounded-full'
                onChange={(e) => setValueState(e.target.value)}
                placeholder='Search for fundraiser'
                type='search'
                value={valueState} />
        </div>
    )
}

export default SearchBar;