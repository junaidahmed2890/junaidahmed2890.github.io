import React from "react";
import Slider from "react-slick";
import "./teamSection.css";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TeamCard";
import Button from "../../common/styles/Button";
import TeamCard from "./TeamCard";
import { TEAM_MEMBERS } from "../../data/teamMembers";
const TeamSection = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 500,
    arrows: true,
  };
  return (
    <div className="trending-nfts">
      <div className="tn-title absolute-center">
        <span className="heading-gradient">Team</span>
      </div>

      <Slider {...settings}>
        {TEAM_MEMBERS.map((_nft, index) => (
          <TeamCard nft={_nft} />
        ))}
      </Slider>
      <div className="tn-btn absolute-center">
        <Button btnText="SEE MORE" type="secondary" customClass="seemore-btn" />
      </div>
    </div>
  );
};

export default TeamSection;
