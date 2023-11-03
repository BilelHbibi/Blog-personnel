import React from "react";
import "./skills.css";
import Progress from "./progress/Progress";
import Tiltle from "../../global/title/Tiltle";
import { counter } from "../../../data";
import CountUp from "react-countup";

const Skills = () => {
  return (
    <>
      <div className="skills padding">
        <Tiltle title="WHY CHOOSE US" subtitle="Some Of My Skills" />
        <div className="container flex">
          <div className="left row">
            <Progress name="HTML" persontage="70" />
            <Progress name="CSS" persontage="80" />
            <Progress name="JAVASCRIPT" persontage="90" />
            <Progress name="REACT JS" persontage="70" />
          </div>

          <div className="right row">
            <h2>Every Day is a New Challenge</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              consequatur aspernatur dolorem optio dicta autem quae vel
              blanditiis. Rerum reprehenderit molestiae quia quisquam harum,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              consequatur aspernatur dolorem optio dicta autem quae vel
              blanditiis. Rerum reprehenderit molestiae quia quisquam harum,
            </p>
            <button className="vert-btn">Here Me</button>
          </div>
        </div>
      </div>

      <div className="counter">
        <div className="container">
          <div className="grid4">
            {counter.map((val)=>(
              <div className="box">
                <h2><CountUp duration={2} end={val.num}/>%</h2>
                <p>{val.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
