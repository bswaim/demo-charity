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
        <div className='w-full h-[100px] flex justify-between'>
            <SearchBar/>
            <TextLink text='Create Fundraiser' onClick={() => setShowStartCampaignForm(!showStartCampaignForm)}/>
            <img alt='logo' src='https://bswaim.github.io/demo-charity/logo.png'/>
            <Button text='Share'/>
            <Button text='Donate'/>
        </div>
    )
}
export default MainHeader;
