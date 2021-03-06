import {Card} from 'react-bootstrap'
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup'


const Footer = () => {
    return(


<div>
    <p></p>
    
<Card collapseOnSelect bg="dark" expand="lg" variant="dark" className="text-center">
    <Card.Title className="text-white" >Your Courses</Card.Title>
</Card>
<CardGroup>
<Card collapseOnSelect bg="dark" expand="lg" variant="dark" className="text-center">
    
    <Card.Body>
    <Card.Title className="text-white">Explorar</Card.Title>
    <Card.Text >
    
                        <ul class = "box" className="text-dark">
                            
                            <li><a href="#home">Cursos</a></li>
                            <li><a href="#home">Acceder</a></li>
                            <li><a href="#home">Registrarse</a></li>
                            <li><a href="#home">Acerca de</a></li>
                        </ul>
    </Card.Text>
    </Card.Body>
    
</Card>

<Card collapseOnSelect bg="dark" expand="lg" variant="dark" className="text-center">
    
    <Card.Body>
    <Card.Title className="text-white">¿Necesitas Ayuda?</Card.Title>
    <Card.Text>
    <ul class="box h-box" className="text-dark"> 
                            <li><a href="#home">Blog</a></li>
                            <li><a href="#home">Precios</a></li>
                            <li><a href="#home">Cursos</a></li>
                            <li><a href="#home">Certificaciónes</a></li>
                            <li><a href="#home">Servicio al cliente</a></li>
                        </ul>
    </Card.Text>
    </Card.Body>
    </Card>

<Card collapseOnSelect bg="dark" expand="lg" variant="dark" className="text-center">
    
    <Card.Body>
    <Card.Title className="text-white">Legal</Card.Title>
    <Card.Text>
    <ul class="box" className="text-dark">
                        <li><a href="#home">Políticas de Privacidad</a></li>
                        <li><a href="#home">Términos de uso</a></li>
                        <li><a href="#home">Contáctanos</a></li>
                        </ul>
    </Card.Text>
    </Card.Body>

</Card>
</CardGroup>

<Card collapseOnSelect bg="dark" expand="lg" variant="dark" className="text-center">
<Card.Footer className="text-muted" className="text-white">©2020 Your Courses Todos los derechos reservados</Card.Footer>
</Card>
</div>






    );

}

export default Footer;