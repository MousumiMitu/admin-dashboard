import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Mitz</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">Mousumi</a>
      </div>
    </footer>
  );
};

export default Footer;
