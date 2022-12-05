import React from "react";
import Button from "../../common/styles/Button";
import "./topFold.css";
const TopFold = () => {
  return (
    <div className="topfold absolute-center mt-5" style={{ marginTop: "70px" }}>
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell{" "}
          <span className="heading-gradient">
            Extraordinary {"                                    "}
          </span>
          NFTs
        </div>
        <div className="tf-description">
          Please make sure that you are buying and selling the most trending
          NFTs out there.Welcome to my channel Developer's Den.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200k+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count ">20k+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">423k+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>

      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gae/IVKMg_EHnxv8ZE_TT1gYhK5lAG3Gbg9KZ8jAU7aRzFlsOshpwBmLXcP1NsYFxWUf4kjKRq95t8htJ1zPIcleybmn8J4Zip3bxNz4?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/528929465c013a1ee130eaa229f99063.gif?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/76a4570b1f1b2b8172e49c9c1d8f4992.gif?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/1d956dc53da90f8a9a3feb3bffc51c66.gif?auto=format&w=128"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
