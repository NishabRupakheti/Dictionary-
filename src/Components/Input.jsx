import React, { useContext, useEffect } from "react";
import styles from "../../styles/Input.module.css";
import { WordContext } from "../../store/WordContext";

const Input = () => {
  const {
    input,
    handleInput,
    handleEnter,
    setResultRender,
    setBtn,
  } = useContext(WordContext);

  const clearInput = () => {
    if (input === "") {
      setResultRender(false);
      setBtn("Search");
    }
  };

  useEffect(clearInput, [input]);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={input}
        onChange={handleInput}
        onKeyDown={handleEnter}
        className={`form-control ${styles.inputF} `}
        placeholder="Enter a word"
        aria-label="Word"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default Input;
