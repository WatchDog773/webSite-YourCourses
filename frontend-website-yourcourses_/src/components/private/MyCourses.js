import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import { Card, Container, Button, Row } from "react-bootstrap";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import imgLessons from "./Lessons.png";
import ButtonGeneral from "../common/ButtonGeneral";

import {
  COURSES_LOADING,
  COURSES_LOADED,
  COURSES_RESET,
  COURSES_ERROR,
  COURSES_SET_CURRENT,
} from "../../utilities/store/reducers/courses.reducer";
import NavBar from "../common/Navbar";

const ListCourses = () => {
  const [{ auth, courses }, dispatch] = useStateContext();
  const history = useHistory();
  console.log("El author", auth.user.email);

  useEffect(() => {
    dispatch({ type: COURSES_RESET });
    dispatch({ type: COURSES_LOADING });
    console.log("El author", auth.user.email);
    paxios
      .get(`/api/courses/${auth.user.email}`)
      .then(({ data }) => {
        dispatch({ type: COURSES_LOADED, payload: data });
        console.log(data);
      })
      .catch((ex) => {
        dispatch({ type: COURSES_ERROR });
      }); //end paxios
  }, []);

  let ListElements = [];
  ListElements = courses.courses.map((o) => {
    return (
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <CardDeck>
          <Card className="text-center m-3">
            <Card.Footer></Card.Footer>
            <Card.Body>
              <Card.Title>{o.name}</Card.Title>
              <Card.Text>{o.author}</Card.Text>
              <Card.Text>{o.description}</Card.Text>
              <Card.Text>{o.information}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">$ {o.price}</small>
            </Card.Footer>
            <Card.Body>
              <Button
                onClick={() => {
                  dispatch({
                    type: COURSES_SET_CURRENT,
                    payload: { _id: o._id },
                  });
                  history.push("/courses/one");
                }}
              >
                Ver lecciones
              </Button>
              <Button
                onClick={() => {
                  dispatch({
                    type: COURSES_SET_CURRENT,
                    payload: { _id: o._id },
                  });
                  history.push("/newLesson");
                }}
              >
                Agregar lecciones
              </Button>
              <Button>Eliminar</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  });

  console.log("Mis courses vienen: ", ListElements.length);
  if (ListElements.length == 0) {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <h1 className="mx-auto mt-5">Aun no tienes cursos</h1>
          </Row>
          <Row xs={80} md={80} sm={4} className="justify-content-md-center">
            <img style={{ "max-width": "100%" }} src={imgLessons} rounded />
          </Row>
          <Row>
            <h2 className="mx-auto">¡Crea un curso ya!</h2>
          </Row>
          <Row>
            <div className="mx-auto">
              <ButtonGeneral ruta="/new" contenido="Crear Curso" />
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <Container>{ListElements}</Container>
        <Footer />
      </div>
    );
  }
};

export default ListCourses;
