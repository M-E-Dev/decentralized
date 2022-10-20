import React from "react";
import roadMapStyle from "./roadMapStyle.module.scss";
// import {roadMapHorizontal} from "../Images"

const Roadmap = () => {
  return (
    <div className={roadMapStyle["container"]}>
      <div className="text-center pt-5 text-light ">
        <h2>ROAD MAP</h2>
      </div>
      <div className={roadMapStyle["backgroundContainer"]}>
        <div className={roadMapStyle["backgroundImage"]}>
            {/* <img className={roadMapStyle["backgroundImage"]}src={roadMapHorizontal} alt="asd" /> */}
            <p className={roadMapStyle["road-one"]}>*new year opening even</p>
            <p className={roadMapStyle["road-two"]}>*new projects</p>
            <p className={roadMapStyle["road-three"]}>*meeting/ conference</p>
            <p className={roadMapStyle["road-four"]}>*summer event/ *winter event</p>
            <p className={roadMapStyle["road-five"]}>*suggestions for new projects</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

// {/* <div className={roadMapStyle["backgroundContainer"]}> 
//             <img className={roadMapStyle["backgroundImage"]}src={roadMapHorizontal} alt="asd" />
//             <p className={roadMapStyle["road-one"]}>*new year opening even</p>
//             <p className={roadMapStyle["road-two"]}>*new projects</p>
//             <p className={roadMapStyle["road-three"]}>*meeting/conference</p>
//             <p className={roadMapStyle["road-four"]}>*summer event/*winter event</p>
//             <p className={roadMapStyle["road-five"]}>*suggestions for new projects</p> 
//       </div> */}