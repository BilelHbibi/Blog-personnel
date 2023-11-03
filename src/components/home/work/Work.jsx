import React from "react";
import "./work.css";
import Wrapper from "./Wrapper";
import { work } from "../../../data";
import CropFreeIcon from "@mui/icons-material/CropFree";
import IosShareIcon from "@mui/icons-material/IosShare";

const Work = () => {
  return (
    <>
      <Wrapper />
      <div className="work">
        <div className="grid">
          {work.map((val) => (
            <>
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="overley">
                  <div className="container text">
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                  </div>
                  <div className="icon flexSB">
                    <CropFreeIcon />
                    <IosShareIcon />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
