// /inscription/:userId

import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import { Card, Container, Button, Form } from "react-bootstrap";
import axios from "axios";

import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

import {
  COURSES_LOADING,
  COURSES_LOADED,
  COURSES_RESET,
  COURSES_ERROR,
  COURSES_SET_CURRENT,
} from "../../utilities/store/reducers/courses.reducer";

const ListCourses = () => {
  const [{ auth, courses }, dispatch] = useStateContext();
  const history = useHistory();

  let ListElements = [];

  ListElements = courses.courses.map((o) => {
    if (auth.user.email != o.author) {
      return (
        <div className="col-md-4 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          <CardDeck>
            <Card className="text-center mt-2">
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
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      );
    } else {
      return (
        <div className="col-md-4">
          <CardDeck>
          <Card className="text-center mt-2">
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
    }
  });

  console.log("El largo de la lista: ", ListElements.length);
  useEffect(() => {
    dispatch({ type: COURSES_RESET });
    dispatch({ type: COURSES_LOADING });
    paxios
      .get(`/api/courses/inscription/${auth.user._id}`)
      .then(({ data }) => {
        dispatch({ type: COURSES_LOADED, payload: data });
        console.log(data);
      })
      .catch((ex) => {
        dispatch({ type: COURSES_ERROR });
      }); //end paxios
  }, []);

  return (
    <div >
      <Navbar />
      <div className="container">
        <div className="row">
        {ListElements}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListCourses;
