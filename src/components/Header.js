import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/altImg.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center relative px-3 py-0.5 w-full h-16 mb-3 bg-slate-800 rounded-b-xl z-50"
      style={styles.container}
    >
      <label
        className="absolute left-3 text-slate-300 text-2xl font-bold transition duration-500 ease-out hover:scale-105 hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        KHODARYcima
      </label>
      <img
        src={logo}
        className="w-16 absolute right-2 hover:cursor-pointer hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

const styles = {
  container: {},
};
