import appReducer from "./reducers/app.reducer";
import authReducer from "./reducers/auth.reducer";
import coursesReducer from "./reducers/courses.reducer";


function mainReducer(state = {}, action = {}) {
  const { app, auth, courses} = state;
  return {
    app: appReducer(app, action),
    auth: authReducer(auth, action),
    courses: coursesReducer(courses,action),
    //prods: prodsReducer(prods, action),
  };
}

export default mainReducer;
