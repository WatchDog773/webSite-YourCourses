import appReducer from "./reducers/app.reducer";
import authReducer from "./reducers/auth.reducer";

function mainReducer(state = {}, action = {}) {
  const { app, auth } = state;
  return {
    app: appReducer(app, action),
    auth: authReducer(auth, action),
    //prods: prodsReducer(prods, action),
  };
}

export default mainReducer;
