import React from "react";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import MainInfo from "./Components/TeamInfo/MainInfo";

export default function App() {
  return (
    <div className="absolute sm:max-2xl:absolute top-0 z-[-2] h-screen sm:max-2xl:h-fit sm:max-2xl:w-screen max-w-[100%] overflow-hidden bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] sm:max-2xl:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] sm:max-2xl:bg-[size:20px_20px]">
      <Hero />
      <MainInfo />
      <Analytics />
    </div>
  );
}
