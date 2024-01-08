import React from "react";
import Alert from "../Components/Alert";
import Grid from "../Components/Grid";
import HeroBanner from "../Components/HeroBanner";
import Introduction from "../Components/Introduction";
import Navigation from "../Components/Navigation";
import Header from '../Components/Header';
import ClientListing from "../Components/Clients";
import Benefits from "../Components/Benefits";

function Home(){
  var alert_text = "Free Courses Sale Ends Soon, Get It Now"
    return <React.Fragment>
       <div className="header">
                <Alert alert={alert_text} />
             <Navigation />
             
        </div>
      <Header />
      <ClientListing />
      <main>
       
        <Introduction />
        <HeroBanner />
        <Benefits />
        <Grid />

    </main>
    </React.Fragment>
    
}
export default Home;