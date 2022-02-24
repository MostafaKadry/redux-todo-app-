import {
  serach_by_title,
  search_by_auther,
  stop_searching,
} from "./actions.type.js";
export const searchingByTitles = (words, poems) => {
  return {
    type: serach_by_title,
    words,
    poems,
  };
};
export const searchingByAuther = (words, poems) => {
  return {
    type: search_by_auther,
    words,
    poems,
  };
};
export const stopSearching = (poems) => {
  return {
    type: stop_searching,
    poems,
  };
};
