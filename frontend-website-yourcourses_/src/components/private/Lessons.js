import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import { Card, Container, Button, Row } from "react-bootstrap";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import imgLessons from "./Lessons.png";

import {
  LESSONS_LOADING,
  LESSONS_LOADED,
  LESSONS_ERROR,
  LESSONS_RESET,
} from "../../utilities/store/reducers/lessons.reducer";

const ListCourses = () => {
  const [{ auth, lessons, courses }, dispath] = useStateContext();
  const history = useHistory();
  const _id = courses.currentId;
  //console.log("El Id", _id);
  let vInscription = null;
  // var [vInscription, seti] = useState(false);

  // TODO: AQUI ESTA EL FOR
  const cour = courses.courses;
  let pertCourse = "";
  for (const i in cour) {
    //console.log(doc.lessons[i]);

    if (cour[i]._id === _id) {
      //console.log("Encontre el curso: ", cour[i]);
      for (const j in cour[i].inscriptions) {
        if (cour[i].inscriptions[j] === auth.user._id) {
          //console.log("Encontre la inscription: ", cour[i].inscriptions[j]);
          vInscription = true;
        } else {
          console.log("No encontre la inscripcion");
        }
      }

      pertCourse = cour[i].author;
    } else {
      console.log("No encontre el curso :o");
    }
  }

  useEffect(() => {
    // paxios
    //   .get(`/api/courses/${_id}/inscription/${auth.user._id}`)
    //   .then(({ data }) => {})
    //   .catch((ex) => {
    //     console.log(ex);
    //   });

    dispath({ type: LESSONS_RESET });
    dispath({ type: LESSONS_LOADING });
    paxios
      .get(`/api/courses/lessons/${_id}`)
      .then(({ data }) => {
        dispath({ type: LESSONS_LOADED, payload: data });
      })
      .catch((ex) => {
        dispath({ type: LESSONS_ERROR });
      }); //end paxios
  }, [_id, dispath]);

  let ListElements = [];
  ListElements = lessons.lessons.map((o) => {
    if (vInscription) {
      return (
        <CardDeck>
          <Card className="text-center m-3">
            <Card.Body>
              <Card.Title>{o.name}</Card.Title>
              <Card.Text>{o.description}</Card.Text>
              <Button target="_blank" href={o.video}>
                Ver video
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      );
    } else {
      if (pertCourse === auth.user.email) {
        return (
          <CardDeck>
            <Card className="text-center m-3">
              <Card.Body>
                <Card.Title>{o.name}</Card.Title>
                <Card.Text>{o.description}</Card.Text>
                <Button target="_blank" href={o.video}>
                  Ver video
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        );
      } else {
        return (
          <CardDeck>
            <Card className="text-center m-3">
              <Card.Body>
                <Card.Title>{o.name}</Card.Title>
                <Card.Text>{o.description}</Card.Text>
                {/*               <Button target="_blank" href={o.video}>
                  Ver video
                </Button> */}
                <Card.Text>Inscribite para ver las lecciones</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        );
      }
    }
  });
  //const cour = courses.courses[2].inscriptions.length;

  console.log("El falso o verdadero: ");

  if (pertCourse === auth.user.email) {
    if (ListElements.length === 0) {
      return (
        <div>
          <Navbar />
          <Container>
            <Row>
              <h1 className="mx-auto mt-5">No hay lecciones aún</h1>
            </Row>
            <Row xs={80} md={80} sm={4} className="justify-content-md-center">
              <img style={{ "max-width": "100%" }} src={imgLessons} alt="I" rounded />
            </Row>
            <Row>
              <h2 className="mx-auto">Vuelve mas tarde</h2>
            </Row>
          </Container>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <Container>{ListElements}</Container>
          <Footer />
        </div>
      );
    }
  } else {
    if (vInscription) {
      console.log("Paso aqui al si true");
      if (ListElements.length === 0) {
        return (
          <div>
            <Navbar />
            <Container>
              <Row>
                <h1 className="mx-auto mt-5">No hay lecciones aún</h1>
              </Row>
              <Row xs={80} md={80} sm={4} className="justify-content-md-center">
                <img style={{ "max-width": "100%" }} src={imgLessons} alt="Imagen curso" rounded />
              </Row>
              <Row>
                <h2 className="mx-auto">Vuelve mas tarde</h2>
              </Row>
            </Container>
            <Footer />
          </div>
        );
      } else {
        return (
          <div>
            <Navbar />
            <Container>{ListElements}</Container>
            <Footer />
          </div>
        );
      }
    } else {
      console.log("paso al if si false");
      if (ListElements.length === 0) {
        return (
          <div>
            <Navbar />
            <Container>
              <Row>
                <h1 className="mx-auto mt-5">No hay lecciones aún</h1>
              </Row>
              <Row xs={80} md={80} sm={4} className="justify-content-md-center">
                <img style={{ "max-width": "100%" }} src={imgLessons} alt="imagen cursos "rounded />
              </Row>
              <Row>
                <h2 className="mx-auto">Vuelve mas tarde</h2>
              </Row>
            </Container>
            <Footer />
          </div>
        );
      } else {
        return (
          <div>
            <Navbar />
            <Container>
              <Card>
                <Button
                  onClick={() => {
                    paxios
                      .put(`/api/courses/${auth.user._id}/course/${_id}`)
                      .then((result) => {
                        history.push("/startit");
                      })
                      .catch((ex) => {
                        console.log(ex);
                      });
                  }}
                >
                  Inscribirse
                </Button>
              </Card>
              {ListElements}
            </Container>
            <Footer />
          </div>
        );
      }
    }
  }

  //
};

export default ListCourses;
