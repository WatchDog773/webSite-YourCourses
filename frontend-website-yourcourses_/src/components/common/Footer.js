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
                            <li><a href="#home">Login</a></li>
                            <li><a href="#home">Sign Up</a></li>
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
                            <li><a href="#home">Certificaciones</a></li>
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
                        <li><a href="#home">Politicas de Privacidad</a></li>
                        <li><a href="#home">Terminos de uso</a></li>
                        <li><a href="#home">Contactanos</a></li>
                        </ul>
    </Card.Text>
    </Card.Body>

</Card>
</CardGroup>

<Card collapseOnSelect bg="dark" expand="lg" variant="dark" className="text-center">
<Card.Footer className="text-muted" className="text-white">©2020 Your Courses Todos los derechos reservados</Card.Footer>
</Card>
</div>





/*
<Card className="text-center">
<Card.Header>Your Courses</Card.Header>
<Card.Body>
    
    <Card.Text className="text-left">

        

                <div>

                    <div>
                        <h2>Explorar</h2>
                        <ul class = "box">
                            
                            <li><a href="#home">Cursos</a></li>
                            <li><a href="#home">Login</a></li>
                            <li><a href="#home">Sign Up</a></li>
                            <li><a href="#home">Acerca de</a></li>
                        </ul>
                    </div>

                    <div>

                        
                        <h2>¿Necesitas ayuda?</h2>
                        <ul class="box h-box"> 
                            <li><a href="#home">Blog</a></li>
                            <li><a href="#home">Precios</a></li>
                            <li><a href="#home">Cursos</a></li>
                            <li><a href="#home">Certificaciones</a></li>
                            <li><a href="#home">Servicio al cliente</a></li>
                        </ul>
                    </div>


                    <div>

                    
                        <h2>Legal</h2>
                        <ul class="box">
                        <li><a href="#home">Politicas de Privacidad</a></li>
                        <li><a href="#home">Terminos de uso</a></li>
                        <li><a href="#home">Contactanos</a></li>
                        </ul>
                    </div>

                    </div>
    </Card.Text>
    
</Card.Body>
<Card.Footer className="text-muted">Todos los derechos reservados por ©2020 Your Courses</Card.Footer>
</Card>

*/

    );

}

export default Footer;

/*

import React from 'react';


const Footer = () => {
    return(
        <div className="Footer">
            
            <Footer class="footer">
                <div clas="l-footer">
                <h1><img src="../public/login.svg" alt=""></img></h1>
                </div>

                <ul class="r-fotter">
                    <li>
                        <h2>Explorar</h2>
                        <ul class = "box">
                            
                            <li><a href="#home">Cursos</a></li>
                            <li><a href="#home">Login</a></li>
                            <li><a href="#home">Sign Up</a></li>
                            <li><a href="#home">Acerca de</a></li>
                        </ul>
                    </li>
                    
                    <li clas="features">
                        <h2>¿Necesitas ayuda?</h2>
                        <ul class="box h-box"> 
                            <li><a href="#home">Blog</a></li>
                            <li><a href="#home">Precios</a></li>
                            <li><a href="#home">Cursos</a></li>
                            <li><a href="#home">Certificaciones</a></li>
                            <li><a href="#home">Servicio al cliente</a></li>
                        </ul>
                    </li>

                    <li>
                        <h2>Legal</h2>
                        <ul class="box">
                        <li><a href="#home">Politicas de Privacidad</a></li>
                        <li><a href="#home">Terminos de uso</a></li>
                        <li><a href="#home">Contactanos</a></li>
                        </ul>
                    </li>

                </ul>


                <div class="b-footer">
                    <p>Todos los derechos reservados por ©2020 Your Courses</p>
                </div>


            </Footer>

        </div>
    )
}

export default Footer;
*/