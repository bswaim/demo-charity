import React, {useState} from "react";
import SearchBar from "./SearchBar";
import TextLink from "./TextLink";
import Button from "./Button";

function MainHeader () {
    // const [showHomePage, setShowHomePage] = useState(true);
    const [showStartCampaignForm, setShowStartCampaignForm] = useState(false);
    // const [showShareModal, setShowShareModal] = useState(false);
    // const [showDonatePage, setShowDonatePage] = useState(false);

    return (
        <div className='h-[50px] grid grid-cols-3 w-full items-center'>
            <SearchBar />
            <button className='flex justify-center'><img alt='logo' className='h-[30px]' src='https://bswaim.github.io/demo-charity/charity-logo.png'/></button>
            <TextLink classNames='flex justify-end pr-4' text='Create' onClick={() => setShowStartCampaignForm(!showStartCampaignForm)}/>
        </div>
    )
}
export default MainHeader;
