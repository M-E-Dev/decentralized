// import MintCalendar from "./MintCalendar/MintCalendar";
// import Quiz from "./Quiz/Quiz"; 
import { fingers } from "../Images";
import sectionStyle from "./sectionStyle.module.scss";
function Section() {
  return (
    <div className={sectionStyle["section"]}>
      <header className={sectionStyle["header"]}>
        <img src={fingers} alt="" />
        <div className={sectionStyle["btn-container"]}>
          {/* <button className={sectionStyle["header-button"]}>
            MINT CALENDAR
          </button>
          <button className={sectionStyle["header-button"]}>QUIZ</button> */}
        </div>
      </header>
    </div>
  );
}

export default Section;

 
