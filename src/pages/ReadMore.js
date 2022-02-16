import React from "react";
import "./readmore.css";

function ReadMore() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <h1>hello</h1>
          </div>
      </div>
    </div>
  );
}

export default ReadMore;