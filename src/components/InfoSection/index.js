import React from "react";
import { INFO_ITEMS } from "../../data/infoItems";
import InfoItem from "./InfoItem";
import "./infoSection.css";
const InfoSection = () => {
  return (
    <div className="info-section" style={{ marginTop: "200px" }}>
      <div className="is-heading absolute-center">
        <span className="heading-gradient">Create and sell your NFTs</span>
      </div>
      <div className="is-items-container">
        {INFO_ITEMS.map((item) => (
          <InfoItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
