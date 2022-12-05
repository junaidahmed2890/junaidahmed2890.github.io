import React from "react";
import "./brandsIntegration.css";
const BrandsIntegration = () => {
  return (
    <div className="brands-integration  ">
      <div className="b-i-top">
        <div className="brand-image-common">
          <img
            src={require("../../assets/brand3.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
        <div className="brand-image-common">
          <img
            src={require("../../assets/brand1.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
        <div className="brand-image-common">
          <img
            src={require("../../assets/brand2.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
        <div className="brand-image-common">
          <img
            src={require("../../assets/brand3.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
      </div>

      <div className="b-i-bottom">
        <div className="brand-image-common">
          <img
            src={require("../../assets/brands6.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
        <div className="brand-image-common">
          <img
            src={require("../../assets/brands4.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
        <div className="brand-image-common">
          <img
            src={require("../../assets/brands5.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
        <div className="brand-image-common">
          <img
            src={require("../../assets/brands6.png")}
            className="bi-logos"
            alt="brand-logos"
          />
        </div>
      </div>
      <div className="tn-bg-blob"></div>
    </div>
  );
};

export default BrandsIntegration;
