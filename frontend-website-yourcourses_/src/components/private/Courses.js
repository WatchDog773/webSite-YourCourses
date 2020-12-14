import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import {
  COURSES_LOADING,
  COURSES_LOADED,
  COURSES_ERROR,
} from "../../utilities/store/reducers/courses.reducer";

const ListCourses = () => {
  const [{ courses }, dispatch] = useStateContext();

  //f dummy data
  const ListElements = courses.courses.map((o) => {
    return (
      <Card className="m-4" key={o._id}>
        <h2>{o.name}</h2>
        <h3>{o.author}</h3>
        <h3>{o.description}</h3>
        <h3>{o.information}</h3>
        <h3>{o.price}</h3>
      </Card>
    );
  });

  useEffect(() => {
    dispatch({ type: COURSES_LOADING });
    paxios
      .get("/api/courses/allCourses")
      .then(({ data }) => {
        dispatch({ type: COURSES_LOADED, payload: data });
        console.log(data);
      })
      .catch((ex) => {
        dispatch({ type: COURSES_ERROR });
      }); //end paxios
  }, []);

  return (
    <div>
      <Container>{ListElements}</Container>
    </div>
  );
};

export default ListCourses;
