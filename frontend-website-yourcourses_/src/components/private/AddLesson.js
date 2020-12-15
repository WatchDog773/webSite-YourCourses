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
        <Card className="mt-3">
          <Container>
            <h1>Instrucciones para agregar tu video</h1>
          </Container>
          <Container>
            <Card className="m-3">
              <Container>
                <h2>
                  Primero sube el video a una plataforma de almacenamiento, en
                  este caso te recomendamos Google Drive
                </h2>

                <img style={{ "max-width": "100%" }} src="assets/paso1.jpeg" alt="imagen cursos" />
              </Container>
            </Card>

            <Card className="m-3">
              <Container>
                <h2>
                  Luego haga clic derecho sobre el video y luego de clic en
                  compartir
                </h2>

                <img style={{ "max-width": "100%" }} src="assets/paso2.png" alt="Añadir leccion" />
              </Container>
            </Card>

            <Card className="m-3">
              <Container>
                <h2>
                  Aparecera lo siguiente y de clic en cambiar, como se muestra a
                  continuacion
                </h2>

                <img style={{ "max-width": "100%" }} src="assets/paso3.PNG" alt="Añadir leccion" />
              </Container>
            </Card>

            <Card className="m-3">
              <Container>
                <h2>
                  Luego presione clic donde dice restringido (Si el video nunca
                  ha sido compartido)y aparecera este menu, luego de click en:
                  Cualquier persona con el enlace como se muestra a continuacion
                </h2>

                <img style={{ "max-width": "100%" }} src="assets/paso4.PNG" alt="Añadir leccion" />
              </Container>
            </Card>

            <Card className="m-3">
              <Container>
                <h2>
                  A continuacion haga clic donde se muestra en la imagen, para
                  copiar el enlace al portapapeles
                </h2>

                <img style={{ "max-width": "100%" }} src="assets/paso5.PNG" alt="Añadir leccion" />
              </Container>
            </Card>

            <Card className="m-3">
              <Container>
                <h2>Haga clic en listo para confirmar los cambios</h2>

                <img style={{ "max-width": "100%" }} src="assets/paso6.PNG" alt="Añadir leccion"/>
              </Container>
            </Card>

            <Card className="m-3">
              <Container>
                <h2>
                  Pegue el enlace copiado en el formulario que se muestra en el
                  principio de esta pagina
                </h2>

                <img style={{ "max-width": "100%" }} src="assets/paso7.PNG" alt="Añadir leccion" />
              </Container>
            </Card>
          </Container>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default AddLesson;
