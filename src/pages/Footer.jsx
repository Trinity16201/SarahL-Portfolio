import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="madeBy">Created by Sarah Leder©</h2>
      <p>
        <ul>
          <a href="https://github.com/Trinity16201">
            <li className="logo">
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
            <li className="logo">
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.facebook.com/smrunyon">
            <li className="logo">
              <FaFacebook />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}
export default Footer;
