import { favedPoem, unfavedPoem } from "./actionsTypes";

export const FavingAction = (poemstobefaved) => {
  return {
    type: favedPoem,
    poemstobefaved,
  };
};
export const unfavingAction = (poemstobeunfaved) => {
  return { type: unfavedPoem, poemstobeunfaved };
};
