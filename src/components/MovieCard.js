import React from "react";
import altImg from "../assets/altImg.png";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ image = altImg, title = "title", data }) {
  const navigate = useNavigate();
  return (
    <div className="flex-row w-full bg-slate-500">
      <div
        className="w-full flex justify-center items-center relative hover:cursor-pointer transition duration-1000 ease-out hover:scale-105"
        style={styles.card}
        onClick={() => {
          navigate("/details", { state: { data } });
        }}
      >
        <img
          src={image}
          className="absolute top-0 left-0 flex w-full h-full z-40 hover:z-10 bg-slate-500"
        />
        <div className="absolute bottom-0 left-0 w-full h-full justify-center items-end flex z-10 hover:z-40 bg-slate-900 opacity-70">
          <label className="mt-2 text-lg font-semibold text-center text-white pb-3 p-2">
            {title}
          </label>
        </div>
      </div>
      <div className="pt-2 pb-0.5 md:hidden px-1 flex justify-center bg-slate-700 h-full">
        <label className="w-fit h-fit text-center bottom-2 text-lg font-semibold text-white">
          {title}
        </label>
      </div>
    </div>
  );
}

const styles = {
  card: {
    height: 350,
  },
};
