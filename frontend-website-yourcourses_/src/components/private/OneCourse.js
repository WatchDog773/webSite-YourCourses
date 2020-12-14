import { useEffect, useState } from "react";
import { useStateContext } from "../../utilities/Context";
import { paxios } from "../../utilities/Axios";
import { useHistory } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import {
  LESSONS_ERROR,
  LESSONS_LOADED,
  LESSONS_RESET,
  LESSONS_LOADING,
} from "../../utilities/store/reducers/lessons.reducer";

import ButtonGeneral from "../common/ButtonGeneral";
// import Page from '../common/Page';
// import Field from '../cmns/Field';
// import { SecondaryButton, PrimaryButton } from '../cmns/Buttons';
const OneCourse = () => {
  const [{ lessons, courses }, dispath] = useStateContext();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const history = useHistory();
  console.log("Este console log", lessons);

  useEffect(() => {
    //console.log(lessons);
    dispath({ type: LESSONS_LOADING });
    const _id = courses.currentId;
    paxios
      .get(`/api/courses/lessons/${_id}`)
      .then(({ data }) => {
        //console.log("Dataaaa", data);
        dispath({ type: LESSONS_LOADED, payload: data });
        //setForm(data);
      })
      .catch((ex) => {
        console.log(ex);
        dispath({ type: LESSONS_ERROR });
        alert("Algo salio mal.");
        history.push("/courses");
      });
  }, []);
  //console.log("foorm", form);
  //console.log("lecioneeeeees", lessons);
  let ListElements = [];
  ListElements = lessons.lessons.map((o) => {
    return (
      <div>
        <h2>{o.name}</h2>
      </div>
    );
  });
  return (
    // <div>
    //   <Container>
    //     <Card className="m-3">
    //       <h1>{form.name}</h1>
    //     </Card>
    //   </Container>
    // </div>
    <div>
      <ButtonGeneral ruta="/courses" contenido="Atras" />
      <Container>{ListElements}</Container>
    </div>
  );
};

export default OneCourse;
