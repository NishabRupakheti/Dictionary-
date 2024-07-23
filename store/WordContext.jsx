import React, { createContext, useState } from "react";
import axios from "axios";

export const WordContext = createContext();

const WordContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("Search");
  const [resultRender, setResultRender] = useState(false);
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [audio, setAudio] = useState("");
  const [existence, setExistence] = useState(true)


  const searchWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      const data = response.data[0];

      setWord(data.word);
      setPhonetic(data.phonetics[0]?.text || "");
      setAudio(data.phonetics[0]?.audio || "");
      setPartOfSpeech(data.meanings[0]?.partOfSpeech || "");
      setDefinition(data.meanings[0]?.definitions[0]?.definition || "");
      setExample(data.meanings[0]?.definitions[0]?.example || "");
      setSynonyms(data.meanings[0]?.synonyms || []);
      setResultRender(true);
      setBtn("Clear");
    } catch (error) {
      setExistence(false);
      console.error(error);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (input !== "") {
      if (e.key === "Enter") {
        e.preventDefault();
        searchWord();
      }
    }
  };

  return (
    <WordContext.Provider
      value={{
        input,
        setInput,
        handleInput,
        handleEnter,
        btn,
        setBtn,
        resultRender,
        setResultRender,
        searchWord,
        word,
        setWord,
        phonetic,
        setPhonetic,
        definition,
        setDefinition,
        example,
        setExample,
        partOfSpeech,
        setPartOfSpeech,
        synonyms,
        setSynonyms,
        audio,
        setAudio,
        existence
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordContextProvider;
