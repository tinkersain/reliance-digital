import React from "react";
import "./ProductSwipe.css";
import { Image } from "@chakra-ui/react";

function ProductSwipe({ items }) {
  return (
    <div className="swipe-container">
      {items.map((item, index) => (
        <div className="swipe-item" key={index}>
          <div className="img-swipe">
            <Image src={item["img"]} alt={item["categories"]} />
          </div>
          <div className="txt-swipe">{item["categories"]}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductSwipe;
