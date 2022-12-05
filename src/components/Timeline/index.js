import React from "react";
import "./timeline.css";
const Timeline = () => {
  return (
    <div className="main m-5 p-5">
      <h3 className="head heading-gradient">ROAD Map</h3>
      <div className="container">
        <ul>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Mobile App</h3>
              <p>
                V1 of the mobile app is in testing and will launch on iOS
                shortly after minting goes live, with machine learning
                technology and trait detection. Future versions app will include
                the breeding, community trading utilities, and our P2E platform.
                The app merges blockchain technology with emerging technologies
                including AI and AR{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">January 2023</span>
              <span className="circle"></span>
            </div>
          </li>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Physical Prints</h3>
              <p>
                High quality physical prints of the Sleepy Kangaroos will be
                sent to randomly selected holders, globally.{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">February 2023</span>
              <span className="circle"></span>
            </div>
          </li>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Merchandise</h3>
              <p>
                Sleepy Kangaroos Merchandise will be made available to the
                public. The team will continue to add merch items which also
                includes carefully selected clothing traits from the Sleepy
                Kangaroos Collection{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">March 2023</span>
              <span className="circle"></span>
            </div>
          </li>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Breeding</h3>
              <p>
                Holders of two or more Sleepy Kangaroos will have the
                opportunity to select and breed pairs their Roos. Breeding will
                add an additional NFT (your Joey) to your wallet, without
                burning the two selected Kangaroos.{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">April 2023</span>
              <span className="circle"></span>
            </div>
          </li>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Airdrops</h3>
              <p>
                The Sleepy Kangaroos founders will be randomly selecting holders
                over time and airdropping NFTs to their wallets. These will be
                selected from the original ‘Sleepy Kangaroos’ collection,
                collectables, community collections and other NFTs held by the
                founders.{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">April 2023</span>
              <span className="circle"></span>
            </div>
          </li>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Gamified Experience</h3>
              <p>
                The Sleepy Kangaroos will be developing a P2E experience that
                will allow holders to use their NFT to earn digital and physical
                perks. Digital interactions can include up-skilling,
                competitions and community trading. These interactions aim to,
                but do not guarantee the increase of each Sleepy Kangaroo's
                value based on their statistics.{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">April 2023</span>
              <span className="circle"></span>
            </div>
          </li>
          <li className="rm-list">
            <div className="rm-map">
              <h3 className="heading heading-gradient">Charity Donations</h3>
              <p>
                Charity donations will be made at every 20% sale checkpoint. We
                are in the process of speaking to a number of charities to
                ensure all charity transactions are transparent to our
                community. The selected charities will be shared with the
                community once they have been confirmed.{" "}
              </p>
              <a href="#">Read More </a>
              <span className="date">April 2023</span>
              <span className="circle"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
