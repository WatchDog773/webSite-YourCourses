import { BrowseRouter as Router, Route } from 'react-router-dom'
import LoginForm from './LoginLayout';
import Nav from './components/menu';
import Menu from './components/example'
import Card from './components/card'
import { Container, Grid, GridColumn } from 'semantic-ui-react';
function App() {
  return (

    <div>
      <Nav />
      <Container>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Card
                header='Material AudioVisual'
                desc="Te ofrecemos los mejores cursos para que puedas adquirir y desarrollar tus conocimientos por medio de videos de máxima calidad para que no pierdas el detalle. Y como el acceso es ilimitado puedes verlos una y otra vez." />

            </Grid.Column>
            <GridColumn>
              <Card
                header='Exelentes Tutores'
                desc="Contamos con los instructores mas capacitados para tu enseñanza. Al estar inscrito a cualquiera de nuestros cursos tendrás el derecho de realizar consultas a tu instructor para despejar todas las dudas que tengas." />
            </GridColumn>
          </Grid.Row>

        </Grid>
      </Container>
    </div>
  );
}

export default App;