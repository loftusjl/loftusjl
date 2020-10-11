import React, { useState } from "react";
import "./Console.scss";

export const Console = () => {
  const [consoleText, setconsoleText] = useState("test");

  return (
    <div id="Console">
      <h5>Jesse Loftus</h5>
      <h6>Web Developer</h6>
      <ul>
        <li>
          <u>P</u>rojects
        </li>
        <li>
          <u>A</u>bout
        </li>
        <li>
          <u>C</u>ontact
        </li>
      </ul>
      <span className="command-line">
        guestuser@JesseL.dev $ {consoleText}
        <span className="blinking-cursor"> ▍</span>
      </span>
    </div>
  );
};
