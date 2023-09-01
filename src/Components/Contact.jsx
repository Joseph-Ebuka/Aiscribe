import React from "react";
import firstClient from "./img/Frame 32.png";
import secondClient from "./img/Frame 33.png";
import thirdClient from "./img/Frame 34.png";
import fourthClient from "./img/Frame 35.png";
import fifthClient from "./img/Frame 36.png";
import sixthClient from "./img/Frame 37.png";
import PremiumPlans from "./PremiumPlans";
import { Footer } from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contactHeader">
          <span>What our customers say</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            assumenda officiis aliquam. Optio voluptates !
          </p>
        </div>
        <div className="contactReviews">
          <div className="contactReviews1">
            <img src={firstClient} alt="" />
            <img src={secondClient} alt="" />
            <img src={thirdClient} alt="" />
          </div>
          <div className="contactReviews2">
            <img src={fourthClient} alt="" />
            <img src={fifthClient} alt="" />
            <img src={sixthClient} alt="" />
          </div>
        </div>
      </div>
     <PremiumPlans/>
     <Footer/>
    </>
  );
};

export default Contact;
