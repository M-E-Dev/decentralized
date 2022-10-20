import background from "../../assets/images/carou_img_1.png"; 
import newsStyle from "./newsStyle.module.scss";

function News() {
  return (
    <div>  
      <div className={newsStyle["container"]}>
        <div className="text-center pt-5 text-light">
          <h2>NEWS</h2>
        </div>
        <div className={newsStyle["content"]}>
          <div className={newsStyle["imageDiv"]}>
            <img src={background} alt="background png" />
          </div>
          <div className={newsStyle["content-text"]}>
            <p>
              Examination will start 14th June 20 March 2022 *discord and slack
              channels members will enter exam for improving positions 03.20.22
              each three months *our team announce to you we are going to create
              one more nft collection for designers... 16 March 2022 *we will
              meet in north macedonia for having fun and introducing *our
              partnership coltra will describe us !! ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
