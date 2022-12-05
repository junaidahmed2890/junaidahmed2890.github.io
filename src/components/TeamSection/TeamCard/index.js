import React from "react";
import "./teamCard.css";
const TeamCard = (props) => {
  const { nft } = props;
  console.log(nft);
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.user_photo} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <div>
                <div className="tc-ui-username">{nft.user_name}</div>
                <div className="tc-ui-userhandle">{nft.user_designation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
