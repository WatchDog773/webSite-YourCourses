import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect } from "react";
import CardDeck from 'react-bootstrap/CardDeck'
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


  <CardDeck>

  <Card className="text-center">
  <Card.Footer></Card.Footer>
    <Card.Body >
      <Card.Title >{o.name}</Card.Title>
      <Card.Text>{o.author}</Card.Text>
      <Card.Text>{o.description}</Card.Text>
      <Card.Text>{o.information}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$ {o.price}</small>
    </Card.Footer>
    </Card>
  
  
  
</CardDeck>

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
