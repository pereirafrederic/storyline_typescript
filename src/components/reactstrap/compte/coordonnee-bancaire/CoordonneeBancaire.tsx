// externe
import React, { PureComponent } from 'react'
import {  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { Link } from 'react-router-dom'



interface IOwnProps {}
interface IProps extends IOwnProps {}

class CoordonneeBancaire extends PureComponent<IProps> {
  public render() {
    return (
    <Card className="CoordonneeBancaire">
    <CardTitle>Vos Coordonnées .Bancaires</CardTitle>
    <CardSubtitle>RIB</CardSubtitle>
    <CardText>1354 5468 1561 6515</CardText>
    <CardText>262</CardText>
    <Button color="warning" href="/compte/coordonnee-bancaire/edition"
    >{"modifier mes coordonnées bancaires"}</Button>
    </Card>)
  }
}

export default CoordonneeBancaire
