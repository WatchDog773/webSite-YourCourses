import {Container, Row, Col, Image} from 'react-bootstrap'
import React from 'react';
import img from './developer_activity_bv83.svg'

const Section = () =>{
    return(
        <div style={{background:"#bfe0ff"}}> 
        <Container style={{paddingTop: '9%', paddingBottom: '9%'}}>
        <Row>
          <Col md>
            <Image src = {img} fluid ></Image>
          </Col>
          <Col md>
            <h1 style={{textAlign:"center"}}><strong>¿Por qué es importante aprender a programar?</strong> </h1>
            <h4 style={{textAlign:"justify"}}>La programación es una herramienta fundamental 
              en el mundo en el que vivimos, convirtiéndose en 
              una salida laboral importante. Además, su aprendizaje 
              constituye una oportunidad al mejorar el razonamiento 
              lógico formal.</h4>
          </Col>
        </Row>
      </Container>
      </div>
    );
} 
export default Section;