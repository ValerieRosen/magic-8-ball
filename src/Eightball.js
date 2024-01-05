import React, { useState } from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

//The component for the magic eight ball

function EightBall({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState({
    msg: "Ask the Magic 8 ball a question.",
    color: "black",
  });

  function handleClick(e) {
    setAnswer(choice(answers));
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <b>{answer.msg}</b>
    </div>
  );
}

export default EightBall;
