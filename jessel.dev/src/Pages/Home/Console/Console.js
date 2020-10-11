import React, { useState, useEffect } from "react";
import "./Console.scss";

export const Console = () => {

  const [consoleUser, setConsoleUser] = useState('guestuser@JesseL.dev $')
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };


  return (
    <div id="Console">
      <h1>Jesse Loftus</h1>
      <ul>
        <li>
          <u>P</u> rojects
        </li>
        <li>
          <u>A</u> bout
        </li>
        <li>
          <u>C</u> ontact
        </li>
        <li><u>?</u> help</li>
      </ul>
      <span className="console-text">{consoleUser}
        <textarea className="command-line" value={inputValue} onChange={onChangeHandler} placeholder="Type command and press enter." maxLength="76"/>
      </span>
    </div>
  );
};
