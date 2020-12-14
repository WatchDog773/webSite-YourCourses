// 1. El estado inicial
const emptyAuth = {
  logged: false,
  jwt: "",
  user: {},
  isFetching: false,
  error: "",
  signin: false,
  redirect: false,
  searchFilter: "",
};

// 1.2 El estado inicial
let initialState = {
  ...emptyAuth,
  ...JSON.parse(localStorage.getItem("store_auth")),
};

// 2. Acciones o eventos
// Para el login
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FETCHING_FAILED = "LOGIN_FETCHING_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const JWT_INVALID = "JWT_INVALID";

// Para el logout
export const LOGOUT = "LOGOUT";

// Para signup
export const SIGNIN_FETCHING = "SIGNIN_FETCHING";
export const SIGNIN_FETCHING_FAILED = "SIGNIN_FETCHING_FAILED";
export const SIGNIN_SUCCES = "SIGNIN_SUCCES";
export const SIGNIN_END = "SIGNIN_END";

// 3.
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_FETCHING: {
      return { ...state, isFetching: true };
    }

    case LOGIN_FETCHING_FAILED: {
      return { ...state, isFetching: false };
    }

    case LOGIN_SUCCESS: {
      const newState = {
        ...state,
        ...action.payload,
        isFetching: false,
        logged: true,
      };
      localStorage.setItem("store_auth", JSON.stringify(newState));
      return { ...newState };
    }

    case JWT_INVALID: {
      return {
        ...emptyAuth,
        redirect: action.payload.to,
      };
    }

    case SIGNIN_FETCHING: {
      return { ...state, isFetching: true };
    }

    // https://www.youtube.com/watch?v=Xa7ECigMWRs
    case LOGOUT: {
      localStorage.removeItem("store_auth");
      return { logged: false };
    }

    case SIGNIN_SUCCES:
      if (action.payload) {
        return { ...initialState, searchFilter: action.payload.searchFilter };
      } else {
        let { searchFilter } = state;
        return { ...initialState, searchFilter: searchFilter };
      }

    default: {
      return state;
    }
  }
};

export default authReducer;

// const emptyAuth = {
//   logged: false,
//   jwt: "",
//   user: {},
//   isFetching: false,
//   error: "",
//   signing: false,
//   redirect: false,
// };

// let initialState = {
//   ...emptyAuth,
//   ...JSON.parse(localStorage.getItem("store_auth")),
// };

// export const LOGIN_FETCHING = "LOGIN_FETCHING";
// export const LOGIN_FETCHING_FAILED = "LOGIN_FETCHING_FAILED";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGOUT = "LOGOUT";
// export const JWT_INVALID = "JWT_INVALID";

// export const SIGNIN_FETCHING = "SIGNIN_FETCHING";
// export const SIGNIN_FETCHING_FAILED = "SIGNIN_FETCHING_FAILED";
// export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
// export const SIGNIN_END = "SIGNIN_END";

// const authReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case LOGIN_FETCHING:
//       return { ...state, isFetching: true };
//     case LOGIN_FETCHING_FAILED:
//       return { ...state, isFetching: false };
//     case LOGIN_SUCCESS:
//       const newState = {
//         ...state,
//         ...action.payload,
//         isFetching: false,
//         logged: true,
//       };
//       localStorage.setItem("store_auth", JSON.stringify(newState));
//       return { ...newState };
//     case LOGOUT:
//       return { ...state };
//     case JWT_INVALID:
//       return { ...emptyAuth, redirect: action.payload.to };
//     case SIGNIN_FETCHING:
//       return { ...state };
//     case SIGNIN_FETCHING_FAILED:
//       return { ...state };
//     case SIGNIN_SUCCESS:
//       return { ...state };
//     case SIGNIN_END:
//       return { ...state };
//     default:
//       return state;
//   }
// };

// export default authReducer;
