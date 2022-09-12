import React, { useState } from "react";
import "./Populatediv.css";
import data from "./mock-data.json";
export default function Populatediv() {
  const [item, setitem] = useState(data);
  const div = item.map((populate) => (
    <div className="quarter-div" key={Math.random()}>
      <h2>{populate.quarter}</h2>
      <ul>
        {populate.list.map((lists) => (
          <li key={Math.random()}>{lists}</li>
        ))}
      </ul>
    </div>
  ));
  setTimeout(() => {
    let event = document.getElementById("Populatediv");
    let left_btn = document.getElementById("btn_left");
    let right_btn = document.getElementById("btn_right");

    // function sleep(milliseconds) {
    //   const date = Date.now();
    //   let currentDate = null;
    //   do {
    //     currentDate = Date.now();
    //   } while (currentDate - date < milliseconds);
    // }
      left_btn.onclick = () => {
        // sleep(500);
        event.scrollLeft -= event.clientWidth;
      };
   
    right_btn.onclick = () => {
      // sleep(500);
      event.scrollLeft += event.clientWidth;
    };
  }, 1);

  return (
    <>
    <div id="Populate" className="Populate">
      <div id="Populatediv" className="Populatediv-container">
        {div}
      </div>
      <div>
        <button id="btn_left" className="scroll-btn">
          ←
        </button>
        <button id="btn_right" className="scroll-btn" >
          →
        </button>
      </div>
    </div>
    </>
  );
}
