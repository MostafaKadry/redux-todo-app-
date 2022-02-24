import {
  serach_by_title,
  search_by_auther,
  stop_searching,
} from "./actions.type.js";
const initState = {
  poems: [],
};
const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case search_by_auther:
      const authorPoems = action.poems.filter(
        (p) => p.author.toUpperCase().indexOf(action.words.toUpperCase()) > -1
      );
      if (authorPoems.length > 0) {
        return { ...state, poems: authorPoems };
      } else {
        const notFound = {
          poems: [
            {
              title: "not-found",
              author: "not found",
              lines: "not found",
            },
          ],
        };
        return notFound;
      }
    case serach_by_title:
      const titlePoems = action.poems.filter(
        (poem) =>
          poem.title.toUpperCase().indexOf(action.words.toUpperCase()) > -1
      );
      if (titlePoems.length > 0) {
        return { ...state, poems: titlePoems };
      } else {
        const notFound = {
          poems: [
            { title: "not-found", author: "not found", lines: "not found" },
          ],
        };
        return notFound;
      }
    case stop_searching:
      return { poems: action.poems };
    default:
      return state;
  }
};
export default SearchReducer;
