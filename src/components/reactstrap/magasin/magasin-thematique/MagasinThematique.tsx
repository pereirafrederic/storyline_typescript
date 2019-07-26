// externe
import React, { PureComponent, FormEvent } from 'react'

import {IThematique } from './../../../../modules/modeles/interfaces'

import {EMenuType} from './../../../../modules/modeles/enumeration'

import {orderBy} from 'lodash'

import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
  import Menu, {EMenu} from '../../site/Menu/Menu'

//
import { Table } from 'reactstrap';




interface IOwnProps {

}
interface IState {
  thematiques : Array<IThematique>
}

interface IProps extends IOwnProps {}


const initThematique = [{
  id:1,
  thematique: 'horreur',
  oeuvres : [  {
      id: 1,
      titre : 'klit de sang',
      auteur : 'berinice mc bur',
      thematique : 'dystropie',
      note : 1,
      don : 1000
    }
  ]
},{
  id:2,
  thematique: 'S.F',
  oeuvres : [  {
      id: 10,
      titre : 'klit de sang',
      auteur : 'berinice mc bur',
      thematique : 'dystropie',
      note : 1,
      don : 1000
    },{
      id: 200,
      titre : 'jlit de sang 2 ',
      auteur : 'eric mc bur',
      thematique : 'atropie',
      note : 4,
      don : 600
    }
  ]
},{
  id:3,
  thematique: 'fantasy',
  oeuvres : [ {
      id: 100,
      titre : 'klit de sang',
      auteur : 'berinice mc bur',
      thematique : 'dystropie',
      note : 1,
      don : 1000
    },
    {
      id: 200,
      titre : 'jlit de sang 2 ',
      auteur : 'eric mc bur',
      thematique : 'atropie',
      note : 4,
      don : 600
    } , {
        id: 300,
        titre : 'klit de sang',
        auteur : 'berinice mc bur',
        thematique : 'dystropie',
        note : 1,
        don : 1000
      },
      {
        id: 400,
        titre : 'jlit de sang 2 ',
        auteur : 'eric mc bur',
        thematique : 'atropie',
        note : 5,
        don : 450
      }
  ]
}]

class MagasinThematique extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      thematiques : initThematique
    }
  }

  public render() {
    const { thematiques} = this.state

    return (
      <div className="MagasinThematique">
      {thematiques.map ((thematique, index) =>       <Card key={index}>
              <CardBody>
                <CardTitle>{thematique.thematique}</CardTitle>
                <CardSubtitle>{thematique.oeuvres.length}</CardSubtitle>
                <br />

                      <Table>
                     <thead>
                       <tr>
                         <th>titre</th>
                         <th>note</th>
                         <th>don</th>
                       </tr>
                     </thead>
                     <tbody>
                      {thematique.oeuvres.map((oeuvre, index) =>
                        <tr key={oeuvre.id}>
                          <th scope="row"><a href={`/oeuvre/${oeuvre.id}`} >{oeuvre.titre}</a></th>
                          <td>{oeuvre.note}</td>
                          <td>{oeuvre.don}</td>
                        </tr>
                      )}
                              </tbody>
                                     </Table>
                                     <br />

              </CardBody>
            </Card>)}
      </div>
    )
  }
}

export default MagasinThematique
