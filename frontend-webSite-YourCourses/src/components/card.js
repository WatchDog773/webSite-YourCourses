import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const CardExampleExtraContent = (props) => (
  <Card.Group>
      <Card>
    <Card.Content header={props.header} />
    <Card.Content description={props.desc} />
  </Card>
  </Card.Group>
)

export default CardExampleExtraContent
