import React from "react";
import "./trendingCard.css";
const TrendingCard = (props) => {
  const { nft } = props;
  console.log(nft);
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner" />

          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                alt={nft.user_name}
                src={nft.user_photo}
                className="tc-user-logo"
              />
              <div>
                <div className="tc-ui-username">{nft.user_name}</div>
                <div className="tc-ui-userhandle">{nft.userhandle}</div>
              </div>
              <img
                alt=""
                src="https://opensea.io/static/images/logos/ethereum.svg"
                className="tc-solana-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
