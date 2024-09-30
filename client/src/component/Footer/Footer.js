import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/Anjanikumar1234/BlockChain-Voting-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made by{" "}
          <a
            className="profile"
            href="https://anjanikumar1234.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anjani Kumar
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
