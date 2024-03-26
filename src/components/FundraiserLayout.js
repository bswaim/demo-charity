import React, {useState} from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

function FundraiserLayout({
    title,
    imageAlt,
    imageSrc,
    organizer,
    beneficiary,
    message,
    comments= [],
    donationTotalUSD= 0,
    donationGoal= 0,
    totalNumberOfDonations= 0
}) {

    return (
        <>
            <div
                className='bg-white h-full w-full flex flex-col items-center'
                data-testid='fundraiser-container'
                id='fundraiser-container'
            >
                <img alt={imageAlt} src={imageSrc} className='h-[250px] w-[250px] rounded-lg border-2 border-solid border-black' />
                <h1 className='text-xl font-bold'>{title}</h1>
                <div
                    id='message-container'
                    className='mx-8 max-w-[800px] w-fulls text-left flex-col justify-start'
                >
                    <ProgressBar classNames='w-full' progress={donationTotalUSD} goal={donationGoal} />
                    <div className='flex justify-between'>
                        <div>${donationTotalUSD} raised out of ${donationGoal} goal</div>
                        <FontAwesomeIcon icon={faCircle} color='lightgray' size='sm'/>
                        <div>{totalNumberOfDonations} donations</div>
                    </div>
                    {message}
                </div>
            </div>
        </>
    );
}

FundraiserLayout.propTypes = {
    title: PropTypes.string,
    imageAlt: PropTypes.string,
    imageSrc: PropTypes.string,
    organizer: PropTypes.string,
    beneficiary: PropTypes.string,
    message: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        commenterName: PropTypes.string,
        comment: PropTypes.string,
        donatedUSD: PropTypes.number,
        dateSubmitted: PropTypes.string
    })),
    donationTotalUSD: PropTypes.number,
    donationGoal: PropTypes.number,
    totalNumberOfDonations: PropTypes.number
}
export default FundraiserLayout;