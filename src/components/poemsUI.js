import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPoemsaction } from "../redux/fetchingpoems/poems.actions.js";
import BoemLines from "./poemLines.js";
import {
  searchingByTitles,
  searchingByAuther,
  stopSearching,
} from "../redux/sortpoems/sortpoems.actions";
import "./poemUI.css";
const PoemsUI = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.poemsReducer);
  const [poemLines, setLines] = useState("");

  const searchState = useSelector((state) => state.SearchReducer);

  const handleFetchPoem = () => {
    dispatch(fetchPoemsaction());
  };

  const handleAddLine = (lins, id) => {
    document.getElementById(`${id}`).classList.add("active-poemLines");
    setLines(lins);
  };
  const handleSearchby = (e) => {
    const sortby = document.getElementById("select-sortby").value;
    if (state.poems.length > 0) {
      if (e.length > 0) {
        if (sortby === "title") {
          dispatch(searchingByTitles(e, state.poems));
        } else if (sortby === "auther") {
          dispatch(searchingByAuther(e, state.poems));
        }
      } else {
        dispatch(stopSearching(state.poems));
      }
    } else {
      window.alert("Fetch poems previously");
    }
  };

  return (
    <>
      <div className="nav-container">
        <button onClick={handleFetchPoem} className="fetch-poems-btn">
          fetch poems
        </button>
        <Link to="/faves" style={{ textDecoration: "none", color: "black" }}>
          <button className="veiw-fav-btn"> Fave Page</button>
        </Link>
        <select id="select-sortby">
          <option value="" defaultValue disabled>
            sort by..
          </option>
          <option value="title">title</option>
          <option value="auther">author</option>
        </select>
        <input
          type="text"
          placeholder="sort poems"
          id="search-inpt"
          onChange={(e) => handleSearchby(e.target.value)}
        />
      </div>
      <div className="all-poems-container">
        {state.loading ? (
          <div className="loading">Loading...</div>
        ) : state.error ? (
          <div className="error"> {state.error}</div>
        ) : searchState.poems.length > 0 &&
          searchState.poems[0].title !== "not-found" ? (
          <>
            {searchState.poems.map((poem) => (
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
        ) : searchState.poems.length > 0 &&
          searchState.poems[0].title === "not-found" ? (
          <>
            {searchState.poems.map((poem) => (
              <div className="each-poem-container" key={Math.random()}>
                <h1>{poem.title}</h1>
                <span>{poem.author}</span>
              </div>
            ))}
          </>
        ) : state.poems.length > 0 && state !== null ? (
          <>
            {state.poems.map((poem) => (
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
          <>Click Fetch poems to get 20 rendom poems</>
        )}
      </div>
    </>
  );
};

export default PoemsUI;
