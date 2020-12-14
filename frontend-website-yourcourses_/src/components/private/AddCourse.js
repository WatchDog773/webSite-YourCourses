import NavBar from "../common/Navbar";
import { Form, Container, Card } from "react-bootstrap";

const AddCourse = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Card className="mt-5">
          <Form>
            <Form.Group>
              <Form.Label>Nombre del curso</Form.Label>
              <Form.Control type="text" placeholder="Introduccion a python" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="text" placeholder="Descripcion" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Informacion</Form.Label>
              <Form.Control type="text" placeholder="Informacion" />
            </Form.Group>

            <Form.Group>  
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" placeholder="Precio" />
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default AddCourse;
