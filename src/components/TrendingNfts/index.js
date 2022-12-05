import React from "react";
import Slider from "react-slick";
import "./trendingNfts.css";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./TrendingCard";
import Button from "../../common/styles/Button";
const TrendingNfts = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 500,
    arrows: true,
  };
  return (
    <div className="trending-nfts">
      <div className="tn-title absolute-center">
        <span className="heading-gradient">Trending Nfts</span>
      </div>
      <div className="tn-bg-blob"></div>

      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft, index) => (
          <TrendingCard nft={_nft} />
        ))}
      </Slider>
      <div className="tn-btn absolute-center">
        <Button btnText="SEE MORE" type="secondary" customClass="seemore-btn" />
      </div>
    </div>
  );
};

export default TrendingNfts;
