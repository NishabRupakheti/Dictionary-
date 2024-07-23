import React, { useContext, useEffect } from "react";
import Input from "./Input";
import Result from "./Result";
import { WordContext } from "../../store/WordContext";
import styles from "../../styles/card.module.css";
import { PiEyesFill } from "react-icons/pi";
import { IoLogoReact } from "react-icons/io5";



const Card = () => {
  const {
    btn,
    setBtn,
    resultRender,
    setResultRender,
    setInput,
    input,
    searchWord,
  } = useContext(WordContext);


  const handleClick = async () => {
    if (!input == "") {
      if (btn === "Search") {
        await searchWord();
        setResultRender(true);
        setBtn("Clear");
      } else {
        setResultRender(false);
        setBtn("Search");
        setInput("");
      }
    }
  };

  return (
    <div className="card text-center p-3 ">
      <div className={`card-header ${styles.headerCard}`}>Dictionary</div>
      <div className="card-body">
        <h5 className="card-title font-monospace  mt-3 mb-3 "> Search for something ...
          <PiEyesFill />
           </h5>
        <p className="card-text w-75 m-auto">
          <Input />
        </p>
        {resultRender ? <Result /> : ""}
        <a href="#" className="btn btn-outline-dark" onClick={handleClick}>
          {btn}
        </a>
      </div>
      <div className="card-footer text-body-secondary">
        <IoLogoReact  />
      </div>
    </div>
  );
};

export default Card;
