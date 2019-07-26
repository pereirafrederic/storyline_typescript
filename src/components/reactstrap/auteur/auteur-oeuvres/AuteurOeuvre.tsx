// externe
import React, { PureComponent } from 'react'

import { IOeuvre}  from './../../../../modules/modeles/interfaces'

import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

interface IState {
    oeuvres : Array<IOeuvre>
}

const initOeuvres = [
  {
    id: 1,
    titre : 'klit de sang',
    auteur : 'berinice mc bur',
    thematique : 'dystropie',
    note : 1,
    don : 1000
  },
  {
    id: 2,
    titre : 'jlit de sang 2 ',
    auteur : 'eric mc bur',
    thematique : 'atropie',
    note : 4,
    don : 600
  },
  {
    id: 3,
    titre : 'hlit de sang 2 ',
    auteur : 'won mc bur',
    thematique : 'zootopie',
    note : 8,
    don : 500
  },
  {
    id: 4,
    titre : 'glit de sang 2 ',
    auteur : 'denis mc bur',
    thematique : 'big aventure',
    note : 10,
    don : 300
  },
  {
    id: 5,
    titre : 'flit de sang 2 ',
    auteur : 'loper mc bur',
    thematique : 'thriller',
    note : 10,
    don : 200
  },
  {
    id: 6,
    titre : 'dlit de sang 2 ',
    auteur : 'john mc bur',
    thematique : 'policier',
    note : 12,
    don : 200
  },
  {
    id: 7,
    titre : 'slit de sang 2 ',
    auteur : 'therry mc bur',
    thematique : 'western',
    note : 15,
    don : 100
  },
  {
    id: 8,
    titre : 'qlit de sang 2 ',
    auteur : 'oliver mc bur',
    thematique : 'western spagettis',
    note : 18,
    don : 10
  }
]

class AuteurOeuvre extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      oeuvres : initOeuvres
    }
  }

  public render() {
    return <div className="AuteurOeuvre">
<h2>Mes oeuvres </h2>
<div className="AuteurOeuvre__oeuvre">
      {this.state.oeuvres.map ((oeuvre, index) =>       <Card key={index}>
                  <CardBody>
                    <CardTitle>{oeuvre.titre}</CardTitle>
                    <CardSubtitle>{oeuvre.auteur}</CardSubtitle>
                    <CardText>{oeuvre.thematique}</CardText>
                    <div className="horizontal">
                    <CardText>{oeuvre.note}</CardText>
                      <CardText>{oeuvre.don}</CardText>

                    </div>
                  </CardBody>
                </Card>)}</div></div>
  }
}

export default AuteurOeuvre
