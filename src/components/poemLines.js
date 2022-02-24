import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FavingAction,
  unfavingAction,
} from "../redux/favepoems/fave.actions.js";
import "./poemLines.css";
const BoemLines = (props) => {
  const closeLines = (id) => {
    const ele = document.getElementById(id);
    ele.classList.remove("active-poemLines");
    return;
  };
  let state = useSelector((state) => state.faveReducer);
  const dispatch = useDispatch();
  const tobefaved = state.find((p) => p.title === props.fullPoem.title);
  setTimeout(() => {
    if (tobefaved) {
      document.getElementById(`fav-btn-${props.id}`).style.color = "red";
    }
    // else {
    //   document.getElementById(`fav-btn-${props.id}`).style.color = "#00ff95";
    // }
  }, 100);

  const handleAddToFav = (e) => {
    const tobefaved = state.find((p) => p.title === props.fullPoem.title);
    if (tobefaved) {
      e.style.color = "#00ff95";
      dispatch(unfavingAction(props.fullPoem));
    } else {
      e.style.color = "red";
      dispatch(FavingAction(props.fullPoem));
    }

    return;
  };
  return (
    <>
      <div className={`poemLines-container`} id={props.id}>
        <div>
          <div
            className="add-to-fav-btn"
            id={`fav-btn-${props.id}`}
            onClick={(e) => handleAddToFav(e.target)}
          >
            ❤
          </div>
          <div className="close-poemLines" onClick={() => closeLines(props.id)}>
            ✖
          </div>
        </div>
        <span className="poem-line"> {props.poemLines} </span>
      </div>
    </>
  );
};

export default BoemLines;
