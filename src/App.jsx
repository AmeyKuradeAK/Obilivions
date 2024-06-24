import React from "react";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div>
      <Hero/>
      <Analytics />
    </div>
  );
}
