import { POEMS_REQUEST, POEMS_SUCCESS, POEMS_FAILED } from "./actionsTypes";

export let initState = {
  loading: false,
  poems: [],
  error: ``,
};

const poemsReducer = (state = initState, action) => {
  switch (action.type) {
    case POEMS_REQUEST:
      return { ...state, loading: true };
    case POEMS_SUCCESS:
      return { error: ``, loading: false, poems: action.poems };
    case POEMS_FAILED:
      return { poems: [], loading: false, error: action.error };
    default:
      return state;
  }
};

export default poemsReducer;
