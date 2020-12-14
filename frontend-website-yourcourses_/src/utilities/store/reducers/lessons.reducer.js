// import { StateContext } from "../../Context";

const initialState = {
  hasMore: true,
  lessons: [],
  total: 0,
  currentPage: 1,
  pageLimit: 5,
  fetching: false,
  error: "",
  currentId: null,
  searchfilter: "",
};

export const LESSONS_LOADING = "LESSONS_LOADING";
export const LESSONS_LOADED = "LESSONS_LOADED";
export const LESSONS_RESET = "LESSONS_RESET";
export const LESSONS_ERROR = "LESSONS_ERROR";
export const LESSONS_SET_CURRENT = "LESSONS_SET_CURRENT";

const lessonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LESSONS_LOADING:
      return { ...state, fetching: true };

    case LESSONS_LOADED:
      return {
        ...state,
        lessons: [...state.lessons, ...action.payload],
        fetching: false,
      };

    case LESSONS_RESET:
      if (action.payload) {
        return { ...initialState, searchfilter: action.payload.searchfilter };
      } else {
        let { searchfilter } = state;

        return { ...initialState, searchfilter: searchfilter };
      }

    case LESSONS_ERROR:
      return { ...state, fetching: false };

    case LESSONS_SET_CURRENT:
      console.log(action);
      return { ...state, currentId: action.payload._id };
    default:
      return state;
  }
};

export default lessonsReducer;
