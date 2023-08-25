import React from "react";
import "./Header.css";
import CustomizedNavbar from "../CustomizedNavbar/CustomizedNavbar";
function Header() {
  return (
    <div>
      <div>
        <h5>FREE U.S. SHIPPING ON ALL ORDERS OVER $75.</h5>
      </div>
      <div className="navbar">
        <CustomizedNavbar></CustomizedNavbar>
      </div>
    </div>
  );
}

export default Header;
