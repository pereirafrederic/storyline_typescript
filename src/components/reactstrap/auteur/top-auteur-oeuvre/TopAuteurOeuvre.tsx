// externe
import React, { PureComponent } from 'react'
import { Table } from 'reactstrap';
import {orderBy} from 'lodash'

import {IOeuvre}  from './../../../../modules/modeles/interfaces'

interface IOwnProps {}
interface IProps extends IOwnProps {}

interface IState {
  oeuvres : Array<IOeuvre>
}



const initOeuvres :Array<IOeuvre> = [
  {
    id:1,
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
]

class TopAuteurOeuvre extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      oeuvres :  orderBy(initOeuvres, [ 'note'], ['desc'])
    }
  }


  public render() {
    return <div className="TopAuteur">
<h2>Mes meilleurs oeuvres </h2>
        <Table>
        <thead>
          <tr>
            <th>titre</th>
            <th>thématique</th>
            <th>note</th>
            <th>don</th>
          </tr>
        </thead>
        <tbody>
        {this.state.oeuvres.map ((oeuvre,index) =>
          <tr key={index}>
            <th scope="row"><a href={`/oeuvre/${oeuvre.id}`} >{oeuvre.titre}</a></th>
            <td>{oeuvre.thematique}</td>
            <td>{oeuvre.note}</td>
            <td>{oeuvre.don}</td>
          </tr>
        )}
        </tbody>
      </Table></div>
  }
}

export default TopAuteurOeuvre
