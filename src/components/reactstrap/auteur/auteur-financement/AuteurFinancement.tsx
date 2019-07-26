// externe
import React, { PureComponent } from 'react'
import { Table } from 'reactstrap';
import {orderBy, sumBy} from 'lodash'


import {IOeuvre}  from './../../../../modules/modeles/interfaces'

interface IOwnProps {
  id?: string
}
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

class AuteurFinancement extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      oeuvres :  orderBy(initOeuvres, [ 'don'], ['desc'])
    }
  }

  getSommeDon(oeuvres :Array<IOeuvre>){
  return sumBy(oeuvres, 'don')
  }

  public render() {
    return <div className="AuteurFinancement">   <h2>Mon financement </h2>  <Table>
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
        <tr key={0}>
          <th scope="row"></th>
          <td> </td>
          <td>{'somme des dons'}</td>
          <td>{this.getSommeDon(this.state.oeuvres)}</td>
        </tr>
        </tbody>
      </Table></div>
  }
}

export default AuteurFinancement
