import React, { useState } from "react";
import "../../css/Home.css";
import InfiniteScroll from "../common/InfiniteScroll";
import ExploreForm from "../common/ExploreForm";

import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import { Activities } from "../../utils/Json data/cards";
import Card from "../common/Card";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="hero-section">
        <div className="hero-left">
          <InfiniteScroll />
        </div>
        <div className="hero-right">
          <div>
            Book an appointment with <br /> <span>lifestyle medicine </span>
            experts
          </div>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
        <div className="hero-mid">
          <ExploreForm />
        </div>
      </section>

      {/* divider */}
      <div className="divider"></div>

      {/* how it works  */}
      <section className="pillers-section">
        <div className="sub-heading">HOW IT WORKS</div>
        <div className="main-heading">
          <div>
            <span>Lifestyle as medicine: </span> The six pillars
          </div>
          <div className="navigation">
            <button>
              <img src={LeftArrow} alt="left-arrow" />
            </button>
            <button>
              <img src={RightArrow} alt="right-arrow" />
            </button>
          </div>
        </div>
        <div className="activity-titles">
          {Activities.map((card, index) => (
            <div className="activity" key={index}>{card.activityType}</div>
          ))}
        </div>
        <div className="cards scroll">
          {Activities.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
