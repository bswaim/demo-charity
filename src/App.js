import React, {useState} from "react";
import MainHeader from "./components/MainHeader";
import FundraiserLayout from "./components/FundraiserLayout";
function App() {
    const commentInitialData = [
        {commenterName: '', comment: '', donatedUSD: 10, dateSubmitted: 'dateHere'}
    ];
    const initialPropsForFundraisers = [
        {
            id: '01',
            title: 'Water for Africa',
            imageAlt: 'image of hands receiving water',
            imageSrc: 'https://bswaim.github.io/demo-charity/fundraiser_water_img.jpg',
            organizer: 'Becky J.',
            beneficiary: 'dateHere', 
            message: 'About the charity, let me tell you, lorem ipsem blah blah hey.',
            comments: commentInitialData,
            donationTotalUSD: 50,
            donationGoal: 100,
            totalNumberOfDonations: 4400
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [propsForFundraisers, setPropsForFundraisers] = useState(initialPropsForFundraisers);

    return (
        <div className='bg-white h-full w-full' data-testid='chairty-landing-page'>
            <MainHeader />
            <FundraiserLayout
                title={propsForFundraisers[selectedIndex].title}
                imageSrc={propsForFundraisers[selectedIndex].imageSrc}
                organizer={propsForFundraisers[selectedIndex].organizer}
                beneficiary={propsForFundraisers[selectedIndex].beneficiary}
                message={propsForFundraisers[selectedIndex].message}
                comments={propsForFundraisers[selectedIndex].comments}
                donationTotalUSD={propsForFundraisers[selectedIndex].donationTotalUSD}
                donationGoal={propsForFundraisers[selectedIndex].donationGoal}
                totalNumberOfDonations={propsForFundraisers[selectedIndex].totalNumberOfDonations}
            />
        </div>
    );
}

export default App;