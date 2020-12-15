import NavBar from "../common/Navbar";
import Footer from "../common/Footer";
import { Button, Form, Container, Card } from "react-bootstrap";

import { LESSONS_RESET } from "../../utilities/store/reducers/lessons.reducer";
import { useStateContext } from "../../utilities/Context";
import { useState } from "react";
import { paxios } from "../../utilities/Axios";
import { useHistory } from "react-router-dom";

const AddLesson = () => {
  const [{ courses }, dispatch] = useStateContext();
  const history = useHistory();
  const _id = courses.currentId;
  const [form, setForm] = useState({
    name: "",
    description: "",
    video:"", 
   });

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const AddNewLesson = (e) => {
    e.preventDefault();
    e.stopPropagation();
    paxios
      .post(`/api/courses/addLesson/${_id}`, form) // "/addLesson/:id",
      .then((data) => {
        console.log(data);
        dispatch({ type: LESSONS_RESET });
        history.push("/startit");
      })
      .catch((ex) => {
        console.log(ex);
        alert("Algo salio mál al ingresar");
      });
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Card className="mt-5">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de leccion</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={onChange}
                type="text"
                placeholder="Ej: Primera leccion de NodeJS"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                name="description"
                value={form.description}
                onChange={onChange}
                type="text"
                placeholder="Ej: Passport"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                name="video"
                value={form.video}
                onChange={onChange}
                type="text"
                placeholder="Ej: https://"
              />
            </Form.Group>


            <Button onClick={AddNewLesson} variant="primary">
              Guardar
            </Button>
          </Form>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default AddLesson;
