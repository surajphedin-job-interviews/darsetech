import "./footer.css";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>Follow me</p>

      <div className="icon_wrapper">
        <a href="https://facebook.com/surajpheudin" target={"_blank"}>
          <FaFacebookF></FaFacebookF>
        </a>
        <a href="https://instagram.com/surajpheudin" target={"_blank"}>
          <FaInstagram></FaInstagram>
        </a>

        <a href="https://twitter.com/surajpheudin" target={"_blank"}>
          <FaTwitter></FaTwitter>
        </a>
      </div>

      <div>
        <p
          style={{
            textAlign: "center",
            color: "#333",
          }}
        >
          Copyright ©2022 All rights reserved | Suraj Pheudin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
