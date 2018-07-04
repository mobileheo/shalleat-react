import React from "react";
import Img from "react-image";

const Photos = ({ photoUrls }) => {
  // return photoUrls.map((src, i) => (
  //   <Img src={src} key={src + i}/>
  // ));
  console.log(photoUrls);
  return <Img src={photoUrls} />;
};

export default Photos;
