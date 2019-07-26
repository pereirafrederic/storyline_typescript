// externe
import React, { PureComponent } from 'react'

import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurPresentation extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurPresentation">
     <h2>Ma présentation </h2>
    <Card >
            <CardBody>
              <CardTitle>{`ma présentation en tant qu'auteur`}</CardTitle>
              <CardSubtitle>{`je suis l'héritier de ggr martin`}</CardSubtitle>
                <CardText>{'je suis auteur de otherside'}</CardText>
            </CardBody>
          </Card>
    </div>
  }
}

export default AuteurPresentation
