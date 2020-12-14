import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap'
import img from '../public/login.svg'

const CardView = () => {
    return(
        <div style={{paddingTop : "2%"}}>
        <CardGroup className="container">
            <Card style={{ width: '18rem', padding: '10px 10px 10px 10px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Curso de Node.js </Card.Title>
                <Card.Text>
                    Aprende programacion web, del lado del servidor con Node.js
                </Card.Text>
                <Button style={{ width: '100%', background: "#ff8a50", border: "#ff8a50" }}>MAS INFORMACIÓN</Button>
                <Button style={{ width: '100%', background: "#ff8a50", border: "#ff8a50" }}>SUSCRIBETE</Button>
            </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );
}
export default CardView;