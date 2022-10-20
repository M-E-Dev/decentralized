import React from "react";
import contactStyle from './contactStyle.module.scss'

const Contact = () => {
  return (
    <div className={contactStyle["container"]} >
      <div className="text-center pt-5 text-light ">
        <h2>CONTACT US</h2>
      </div>
      <div className={contactStyle["content"]}>
        <div className={contactStyle["questions"]} >
            <span>Got questions?</span>
            <br />
            <span>Feel free to contact us!</span>
        </div>
        <div className={contactStyle["links"]}>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-discord"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <p className={contactStyle["copyright"]}>
          Copyright &#169;
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
