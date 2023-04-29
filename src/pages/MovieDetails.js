import React from "react";
import { useLocation } from "react-router-dom";

import altImg from "../assets/altImg.png";

export default function MovieDetails() {
  //to get passed data thro useNavigate hook
  const location = useLocation();
  const props = location.state;
  const movieData = props.data;
  const img = movieData.primaryImage?.url ? movieData.primaryImage.url : altImg;

  const title = movieData.titleText.text;
  const description = movieData.primaryImage?.caption.plainText
    ? movieData.primaryImage?.caption.plainText
    : "no caption";

  console.log(movieData);

  return (
    <div className="grid grid-cols-12 p-3 m-2 bg-slate-200 md:mt-20 2xs:mt-10 rounded-md">
      {/* show poster */}
      <div
        className="md:col-start-1 md:col-span-6 2xs:col-start-1 2xs:col-span-12"
        style={styles.imgContainer}
      >
        <img src={img} className="w-full h-full" />
      </div>
      {/* description */}
      <p className="md:col-start-7 md:col-span-6 2xs:col-start-1 2xs:col-span-12 md:ml-2 2xs:mt-4  font-semibold text-slate-800 text-center">
        <p className="text-5xl mb-6">{title}</p>
        <p className="text-3xl">{description}</p>
      </p>
    </div>
  );
}

const styles = {
  imgContainer: {
    height: 380,
  },
};
