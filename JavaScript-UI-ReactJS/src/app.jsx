import React, { useState, useContext, useCallback } from "react";
import { fetchProverb } from "@/api/proverb";
import { GlobalContext } from "@/context/GlobalContext";

const Timer = () => {
  const { createDate, currentDate } = useContext(GlobalContext);

  return (
    <p>
      You opened this page at: {createDate.toLocaleString()}
      <br />
      Current date time is: {currentDate.toLocaleString()}
    </p>
  );
};

const RandomProverb = () => {
  const [proverb, setProverb] = useState("← Click it!");
  const onClick = useCallback(
    () => fetchProverb().then(res => setProverb(res.data.proverb)),
    []
  );
  return (
    <p>
      <button onClick={onClick}>Refresh proverb</button>
      <span style={{ paddingLeft: "10px" }}>{proverb}</span>
    </p>
  );
};

export default () => {
  return (
    <div className="hello-world">
      <p>Hello React world!</p>
      <Timer />
      <RandomProverb />
    </div>
  );
};
