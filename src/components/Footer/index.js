import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer absolute-center">
      <span className="heading-gradient">
        {" "}
        Made with{" "}
        <span>
          <img src={require("../../assets/fire.png")} height={"25"} />
        </span>{" "}
        by Junaid ahmed | Jplex tech developers.
      </span>
    </div>
  );
};

export default Footer;
