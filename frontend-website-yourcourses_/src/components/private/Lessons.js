import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import { Card, Container, Button } from "react-bootstrap";

import {
  LESSONS_LOADING,
  LESSONS_LOADED,
  LESSONS_ERROR,
  LESSONS_RESET,
  LESSONS_SET_CURRENT,
} from "../../utilities/store/reducers/lessons.reducer";

const ListCourses = () => {
  const [{ lessons, courses }, dispath] = useStateContext();
  const history = useHistory();
  const _id = courses.currentId;
  console.log("El Id", _id);
  useEffect(() => {
    dispath({ type: LESSONS_RESET });
    dispath({ type: LESSONS_LOADING });
    paxios
      .get(`/api/courses/lessons/${_id}`)
      .then(({ data }) => {
        dispath({ type: LESSONS_LOADED, payload: data });
        console.log("La data", data);
        //dispath({ type: LESSONS_RESET });
      })
      .catch((ex) => {
        dispath({ type: LESSONS_ERROR });
      }); //end paxios
  }, []);

  const ListElements = lessons.lessons.map((o) => {
    return (
      <CardDeck>
        <Card className="text-center m-3">
          <Card.Body>
            <Card.Title>{o.name}</Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  });

  return (
    <div>
      <Container>{ListElements}</Container>
    </div>
  );
};

export default ListCourses;
