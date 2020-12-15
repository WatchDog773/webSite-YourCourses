import NavBar from "../common/Navbar";
import { Button, Form, Container, Card } from "react-bootstrap";
import Footer from "../common/Footer";

import { COURSES_RESET } from "../../utilities/store/reducers/courses.reducer";
import { useStateContext } from "../../utilities/Context";
import { useState } from "react";
import { paxios } from "../../utilities/Axios";
import { useHistory } from "react-router-dom";

const AddCourse = () => {
  const [, dispatch] = useStateContext();
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    description: "",
    information: "",
    price: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const addNewCourse = (e) => {
    e.preventDefault();
    e.stopPropagation();
    paxios
      .post("/api/courses/new", form)
      .then((data) => {
        console.log(data);
        dispatch({ type: COURSES_RESET });
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
              <Form.Label>Nombre del curso</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={onChange}
                type="text"
                placeholder="Ej: NodeJS Server Side"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                name="description"
                value={form.description}
                onChange={onChange}
                type="text"
                placeholder="Ej: Desarrollo de APIs en NodeJS"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Informacion</Form.Label>
              <Form.Control
                name="information"
                value={form.information}
                onChange={onChange}
                type="text"
                placeholder="Ej: Comprederas los conceptos del desarrollo de NodeJS"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                name="price"
                value={form.price}
                onChange={onChange}
                type="text"
                placeholder="Ej: $12"
              />
            </Form.Group>

            <Button onClick={addNewCourse} variant="primary">
              Guardar
            </Button>
          </Form>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default AddCourse;
