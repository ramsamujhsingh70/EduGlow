import React from "react";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="footer" >
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="/about">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <a href="mailto:ramanbhagat491@gmail.com?body=fell free to type">
                    Gmail
                  </a>
                </li>
                <li>
                  <a href="tel:9999999999">Helpline No</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/raman-kumar-bhagat0101/"
                  target="blank"
                >
                  <FaLinkedin className=" mx-auto mt-3 scale-125" />
                </a>
                <a href="https://x.com/raman_0411" target="blank">
                  <FaTwitter className=" mx-auto mt-3 scale-125" />
                </a>

                <a href="https://www.instagram.com/kaladi_kulcha_/" target="blank">
                  <FaInstagram className=" mx-auto mt-3 scale-125" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-center items-center gap-4 ">
        <p className="text-white text-2xl my-2  ">© 2024</p>
        <div className=" ">
        <img  src={Logo} alt="" width={120} height={32} className="rounded-xl border-2 border-white p-2" />
        </div>
      </div>
      
      </footer>
    </>
  );
};

export default Footer;