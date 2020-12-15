import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect, useState, Link } from "react";
import { useHistory } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import { Card, Container, Button } from "react-bootstrap";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

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
  }, []);

  let ListElements = [];
  ListElements = lessons.lessons.map((o) => {
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
  });
  //const cour = courses.courses[2].inscriptions.length;
  const cour = courses.courses;
  let pertCourse = "";

  for (const i in cour) {
    //console.log(doc.lessons[i]);

    if (cour[i]._id == _id) {
      //console.log("Encontre el curso: ", cour[i]);
      for (const j in cour[i].inscriptions) {
        if (cour[i].inscriptions[j] == auth.user._id) {
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

    /*     if (courses[i].id == lessonId) {
      //console.log(doc.lessons[i]);
      return doc.lessons[i];
    } */
  }
  //console.log(courses.courses);
  // console.log("Curso", " ", cour);

  //console.log("Elementos: ", ListElements.length);
  console.log("El falso o verdadero: ");
  // console.log("Este curso le pertenece a: ", pertCourse);

  if (pertCourse == auth.user.email) {
    if (ListElements.length == 0) {
      return (
        <div>
          <Navbar />
          <Container>
            <h2>No hay lecciones aún</h2>
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
      if (ListElements.length == 0) {
        return (
          <div>
            <Navbar />
            <Container>
              <h2>No hay lecciones aún</h2>
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
      if (ListElements.length == 0) {
        return (
          <div>
            <Navbar />
            <Container>
              <h2>No hay lecciones aún</h2>
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
