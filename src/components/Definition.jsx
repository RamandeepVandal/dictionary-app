import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { Header } from "./Header";

export const Definition = () => {
  // api data
  const [termData, setTermData] = useState({});

  // fetch the data
  useEffect(() => {
    getTermData();
  }, []);

  // fetch func
  const getTermData = async () => {
    const res = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/paradigm"
    );
    const data = await res.json();
    setTermData(data);
  };

  // create audio
  const audio = new Audio(termData[0]?.phonetics[0]?.audio);

  // play audio
  const start = () => {
    audio.play();
  };

  // user search fetch func
  const userTerm = async (term) => {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    );
    const data = await res.json();

    setTermData(data);
  };

  // user clicks on synonyms/antonyms
  const clickSynAnt = (e) => {
    userTerm(e.target.innerText);
  }

  return (
    <>
      <Header />
      <div className="container definition-section">
        <Search userTerm={userTerm} />
        <div className="d-flex align-items-center">
          <h1 className="mt-2 mb-2 me-2">
            {String(
              termData[0]?.word.charAt(0).toUpperCase() +
                termData[0]?.word.slice(1)
            )}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="hsl(288, 80%, 60%)"
            className="bi bi-volume-up-fill"
            viewBox="0 0 15 15"
            onClick={start}
          >
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
          </svg>
        </div>

        <div className="d-flex align-items-center phonetics-div">
          <p className="m-1">{termData[0]?.phonetics[1]?.text}</p>
          <p className="m-1">{termData[0]?.phonetics[2]?.text}</p>
        </div>

        <div className="mt-5">
          <h2>Definitions</h2>
          {termData[0]?.meanings[0]?.definitions.map((val, i) => {
            return (
              <p key={i}>
                <span style={{ fontWeight: "bold" }}>{i + 1}. </span>
                {val?.definition}
              </p>
            );
          })}

          <h3>Synonyms</h3>
          <div className="d-flex mb-2 syn-ant-section">
            {termData[0]?.meanings[0]?.synonyms.length > 0 ? termData[0]?.meanings[0]?.synonyms.map((val, key) => {
              return (
                <p key={key} className="me-3 related-terms" onClick={clickSynAnt}>
                  {val.charAt(0).toUpperCase() + val.slice(1)}
                </p>
              );
            }) : <p>None to show.</p>}
          </div>

          <h3>Antonyms</h3>
          <div className="d-flex mb-2 syn-ant-section">
            {termData[0]?.meanings[0]?.antonyms.length > 0 ? (
              termData[0]?.meanings[0]?.antonyms.map((val, key) => {
                return (
                  <p key={key} className="me-3 related-terms" onClick={clickSynAnt}>
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </p>
                );
              })
            ) : (
              <p>None to show.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
