import React from "react";
import { services } from "../../../data";
import "./service.css";
import Tiltle from "../../global/title/Tiltle";

const Service = () => {
  return (
    <>
      <div className="services padding">
        <Tiltle
          title="MY SERVICES"
          subtitle="Interactive Services Offered Me"
        />
        <div className="container">
          <div className="grid3">
            {services.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="exclusif">
        <div className="container">
          <div className="content">
            <Tiltle
              title="LOOKING FOR EXCLUSIVE SERVICES ?"
              subtitle="Get The Best For Your Business"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              praesentium quasi accusamus autem laboriosam, cupiditate
              
            </p>
            <button className="vert-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
