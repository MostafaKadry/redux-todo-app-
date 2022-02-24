import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BoemLines from "./poemLines.js";
import { stopSearching } from "../redux/sortpoems/sortpoems.actions";
import "./favePage.css";
const FavePage = () => {
  const dispatch = useDispatch();
  const faves = useSelector((state) => state.faveReducer);
  const allPoems = useSelector((state) => state.poemsReducer);
  const [poemLines, setLines] = useState("");
  const handleAddLine = (lins, id) => {
    document.getElementById(`${id}`).classList.add("active-poemLines");
    setLines(lins);
  };
  const handleBacktoHome = () => {
    dispatch(stopSearching(allPoems));
    return;
  };
  return (
    <>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black" }}
        onClick={handleBacktoHome}
      >
        <button className="back-to-all-poems-btn">Home</button>
      </Link>
      {faves.length !== 0 ? (
        <>
          {faves.map((poem) => (
            <div className="each-poem-container" key={Math.random()}>
              <h1>{poem.title}</h1>
              <span>{poem.author}</span>
              <button
                className="show-lins-btn"
                onClick={() => handleAddLine(poem.lines, `LID-${poem.title}`)}
              >
                Show Poem
              </button>
              <BoemLines
                poemLines={poemLines}
                id={`LID-${poem.title}`}
                fullPoem={poem}
              />
            </div>
          ))}
        </>
      ) : (
        <div className="not-found-msg">Sorry, You have no faved poems!</div>
      )}
    </>
  );
};

export default FavePage;
