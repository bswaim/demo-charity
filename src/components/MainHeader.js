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
        <div className='px-4 w-full h-[50px] flex justify-between align-center items-center'>
            <SearchBar/>
            <TextLink text='Create Fundraiser' onClick={() => setShowStartCampaignForm(!showStartCampaignForm)}/>
            <button><img alt='logo' src='https://bswaim.github.io/demo-charity/charity-logo.jpg'/></button>
            <Button text='Share'/>
            <Button text='Donate'/>
        </div>
    )
}
export default MainHeader;
