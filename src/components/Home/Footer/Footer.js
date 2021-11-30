import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", paddingTop: "30px", marginTop: "30px" }}>

      <div style={{ textAlign: "center", marginTop: "10px", paddingBottom: "4px" }}>
        <p>Copyright © 2021 <span className="footer" style={{ fontWeight: "bold" }}>Programmer</span> MD. OMAR FARUK All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
