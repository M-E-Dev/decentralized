import React from "react";
import learnStyle from "./learnStyle.module.scss";

const Hi = () => {
  return (
    <div className={learnStyle["hi-container"]}>
      <div className="text-center text-light">
        <h1 className={learnStyle["neon"]}>Hi</h1>
        <h6>We are the creators of a future</h6>
      </div>
    </div>
  );
};

export default Hi;
