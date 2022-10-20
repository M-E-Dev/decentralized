import React from "react";
import blogStyle from './blogStyle.module.scss';

const Blog = () => {
  return (
    <div className={blogStyle["container"]} >
      <div className="text-center pt-5 text-light">
        <h2>BLOG</h2>
      </div>
      <div className={blogStyle["blog-container"]} >
        <div className={blogStyle["content-container"]}>
          <div className={blogStyle["blog-left"]} >
            <div className={blogStyle["circle_1"]}></div>
            <div className={blogStyle["circle_2"]}></div>
            <div className={blogStyle["circle_3"]}></div> 
          </div>
          <div className={blogStyle["blog-right"]}>
            <div className={blogStyle["circle-up"]}>
              <div className={blogStyle["circle-right"]}></div>
            </div>
            <div className={blogStyle["content"]}>
              <p>
                Examination will start 14th June 20 March 2022 *discord and
                slack channels members will enter exam for improving positions
                03.20.22 each three months *our team announce to you we are
                going to create one more nft collection for designers... 16
                March 2022 *we will meet in north macedonia for having fun and
                introducing *our partnership coltra will describe us !! ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
