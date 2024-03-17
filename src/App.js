/*
import React from "react";
import MainHeader from "./components/MainHeader";

/!* CHARITY APP *!/
function App() {
    /!* todo: Render the various projects here instead of differing project files *!/
  return (
      <>
      <div className='bg-white h-full w-full p-4 text-left' data-testid='page' id='page'>
        <MainHeader />  {/!* no props needed as it will be same everywhere *!/}
      {/!*  <CharityInfoSection
            title='Donate to aid in clean water resources'
            img='path here'
            description='Loren ipsem...'
        />
        <CallToAction
            goalAmount={5000}
            donatedAmount={1000}
            donatorDisplayData={[{name: 'John Smith', donationInUSD: 15}]} // will loop through for how to display
        />
        <CommentSection data={[{name: 'Collen Midge', donationInUSD: 20, comment: 'Hope this helps!'}]} />*!/}
      </div>
      </>
  );
}

export default App;
*/

import React from "react";
import MainHeader from "./components/MainHeader";
function App() {
    return (
        <div className='bg-white h-full w-full' data-testid='chairty-landing-page'>
            <MainHeader />
        </div>
    );
}

export default App;