import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid social">
        <Link to={"https://www.facebook.com/BLACKPINKOFFICIAL/"}>
          <i className="fa-brands fa-facebook fa-2xl"></i>
        </Link>
        <Link to={"https://twitter.com/blackpink"}>
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </Link>
        <Link to={"https://www.instagram.com/blackpinkofficial/"}>
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </Link>
        <Link to={"https://www.youtube.com/@BLACKPINK"}>
          <i className="fa-brands fa-youtube fa-2xl"></i>
        </Link>
        <Link to={"https://music.apple.com/us/artist/blackpink/1141774019"}>
          <i className="fa-brands fa-apple fa-2xl"></i>
        </Link>
        <Link to={"https://open.spotify.com/artist/41MozSoPIsD1dJM0CLPjZF"}>
          <i className="fa-brands fa-spotify fa-2xl"></i>
        </Link>
      </div>
      <p>© 2023 BLACKPINK | SHOP. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
