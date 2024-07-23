import React, { useContext } from "react";
import { WordContext } from "../../store/WordContext";
import NotExist from "./NotExist";

const Result = () => {
  const {
    word,
    phonetic,
    partOfSpeech,
    definition,
    example,
    synonyms,
    audio,
    existence,
  } = useContext(WordContext);

  if (!word) {
    return null;
  }

  return !existence ? (
    <NotExist />
  ) : (
    <div className="card my-4 result-container">
      <div className="card-body">
        <h5 className="card-title">
          {word}
          {phonetic && <span className="text-muted"> {phonetic}</span>}
        </h5>
        {audio && (
          <div className="mb-3">
            <audio controls>
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        {partOfSpeech && <h6>{partOfSpeech}</h6>}
        {definition && (
          <p>
            <strong>Definition:</strong> {definition}
          </p>
        )}
        {example && (
          <p>
            <em>Example:</em> {example}
          </p>
        )}
        {synonyms.length > 0 && (
          <p>
            <strong>Synonyms:</strong> {synonyms.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Result;
