import { favedPoem, unfavedPoem } from "./actionsTypes";
const initState = [];
const favReducer = (state = initState, action) => {
  switch (action.type) {
    case favedPoem:
      state.push(action.poemstobefaved);
      return state;
    case unfavedPoem:
      const otherPoem = state.filter(
        (p) => p.title !== action.poemstobeunfaved.title
      );
      return otherPoem;
    default:
      return state;
  }
};
export default favReducer;
