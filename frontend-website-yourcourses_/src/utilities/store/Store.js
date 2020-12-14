import appReducer from "./reducers/app.reducer";
import authReducer from "./reducers/auth.reducer";
import coursesReducer from "./reducers/courses.reducer";
import lessonsReducer from "./reducers/lessons.reducer";

function mainReducer(state = {}, action = {}) {
  const { app, auth, courses, lessons } = state;
  return {
    app: appReducer(app, action),
    auth: authReducer(auth, action),
    courses: coursesReducer(courses, action),
    lessons: lessonsReducer(lessons, action),
  };
}

export default mainReducer;
