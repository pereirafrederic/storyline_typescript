// externe
import React, { PureComponent, FormEvent} from 'react'
import { NavLink } from 'react-router-dom'

import {orderBy} from 'lodash'

import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
  import Menu, {EMenu} from '../site/Menu/Menu'

interface IOwnProps {

}
interface IState {

}


export enum EMenuType{
  TITRE = "TITRE",
  THEMATIQUE ="THEMATIQUE",
  AUTEUR ="AUTEUR",
  DON = "DON",
  NOTE ="NOTE"
}

interface IProps extends IOwnProps {}

class Magasin extends PureComponent<IProps, IState> {

  public render() {
    return (
      <div className="Magasin">
  <Card key={1}>
  <NavLink to="/magasin/oeuvre">
              <CardBody >
                <CardTitle>{'magasin des oeuvres'}</CardTitle>
                <CardSubtitle>{'acheter une oeuvre'}</CardSubtitle>
                <CardText>{'aller dans le magasin'}</CardText>
              </CardBody>
              </NavLink>
            </Card>
            <Card key={1}>
            <NavLink to="/magasin/auteur">
                        <CardBody>

                          <CardTitle>{'magasin des auteurs'}</CardTitle>
                          <CardSubtitle>{'acheter une oeuvre en passant par son auteur'}</CardSubtitle>
                          <CardText>{'aller dans le magasin'}</CardText>

                        </CardBody>
                        </NavLink>
                      </Card>
                      <Card key={1}>
                      <NavLink to="/magasin/auteur">
                                  <CardBody>
                                    <CardTitle>{'magasin des thématique'}</CardTitle>
                                    <CardSubtitle>{'acheter une oeuvre en passant par sa thématique'}</CardSubtitle>
                                    <CardText>{'aller dans le magasin'}</CardText>
                                  </CardBody>
                                  </NavLink>
                                </Card>
          
      </div>
    )
  }
}

export default Magasin
