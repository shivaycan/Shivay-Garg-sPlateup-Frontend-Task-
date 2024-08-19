// src/InfiniteScroll.js
import React from "react";
import '../../css/InfiniteScroll.css'
import { imagesA, imagesB } from "../../utils/Json data/InfinteScrollImages";

const InfiniteScroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-column">
        <div className="scroll-content top-to-bottom">
          {imagesA.map((item) => (
            <img key={item.id} src={item.img} alt={`Image ${1}`} />
          ))}
        </div>
      </div>
      <div className="scroll-column">
        <div className="scroll-content bottom-to-top">
          {imagesB.map((item) => (
            <img key={item.id} src={item.img} alt={`Image ${1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
