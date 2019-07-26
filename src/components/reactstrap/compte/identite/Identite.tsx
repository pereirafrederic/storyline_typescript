// externe
import React, { PureComponent } from 'react'

// custom
import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';

import EditionIdentite from './edition/EditionIdentite'

import {Icon} from '@mdi/react'
  import {mdiAccount} from '@mdi/js'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Identite extends PureComponent<IProps> {
  public render() {
    return (
      <Card>
      <Icon path={mdiAccount}
          size={3}
          rotate={0}
          color="gray"/>
    <CardBody>
      <CardTitle>pereira frédéric</CardTitle>
      <CardSubtitle>écrivain</CardSubtitle>
      <CardText>pereira.frederic.ecrivain@gmail.com</CardText>
      <Jumbotron>
    <h1 className="">Hello, world!</h1>
    <p className="lead">je suis un simple écrivain qui tente de commencer sa première oeuvre</p>
    <hr className="my-2" />
    <p>merci de me donner votre avis et n'hesitez pas à me noter, voir me faire un don</p>
    <p className="lead">
    </p>
  </Jumbotron>
    </CardBody>
    <EditionIdentite/>


  </Card>
    )
  }
}

export default Identite
