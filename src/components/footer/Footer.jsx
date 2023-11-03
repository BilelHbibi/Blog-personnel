import React from "react";
import "./footer.css";
import { blog } from "../../data";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid4">
            <div className="one">
              <div className="title">
                <img src="./images/logo1.png" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                soluta aperiam totam accusantium magnam reiciendis illum aut
                rem, eligendi qui enim ullam in!
              </p>
              <div className="social">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>

            <div className="two">
              <div className="title">
                <h3>QUICK Links</h3>
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>News</li>
                <li>Contact</li>
                <li>FAQ's</li>
              </ul>
            </div>

            <div className="tree">
              <div className="title">
                <h3>Recent Post</h3>
              </div>
              {blog.map((val) => (
                <>
                  <div className="box">
                    <h4>{val.title}</h4>
                    <span>{val.date}</span>
                  </div>
                </>
              ))}
            </div>

            <div className="four">
              <div className="title">
                <h3>Get In Touch</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, architecto!
              </p>
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <p>Locaion:27 Division St,New Your,NY 10002,USA</p>
              </div>
              <div>
                <i class="fa-solid fa-phone"></i>
                <p>Phone:+44 014799584</p>
              </div>
              <div>
                <i class="fa-solid fa-envelope"></i>
                <p>Email:support@fleja.com</p>
              </div>
            </div>

          </div>
          <hr />

          <div className="copywrite flexSB">
            <p>CopyRight @2019.All Right Reserved.</p>
            <span>Design & Developed by <label>GorkCoder</label></span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
