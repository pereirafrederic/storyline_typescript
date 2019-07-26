// externe
import React, { PureComponent } from 'react'
import { Table } from 'reactstrap';
import {orderBy} from 'lodash'

import {IAuteur}  from './../../../../modules/modeles/interfaces'

interface IOwnProps {}
interface IProps extends IOwnProps {}

interface IState {
  auteurs : Array<IAuteur>
}



const initAuteurs :Array<IAuteur> = [
  {
    id:1,
    pseudo: 'joco',
    nom : 'rico',
    prenom:  'john',
    nbOeuvre: 12,
    moyenneNote : 8.4
  },{
    id:2,
    pseudo: 'nico',
    nom : 'recco',
    prenom:  'nicolas',
    nbOeuvre: 1,
    moyenneNote : 18
  },{
    id:3,
    pseudo: 'bello',
    nom : 'bella',
    prenom:  'ela',
    nbOeuvre: 100,
    moyenneNote : 8.4
  }
]

class TopAuteur extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      auteurs :  orderBy(initAuteurs, [ 'moyenneNote','nbOeuvre' ], ['desc','desc'])
    }
  }


  public render() {
    return <div className="TopAuteur"><h1>Top des auteurs</h1>

       <Table>
        <thead>
          <tr>
            <th>pseudo</th>
            <th>nom</th>
            <th>prenom</th>
            <th>nombre d'oeuvre</th>
            <th>moyenne des notes</th>
          </tr>
        </thead>
        <tbody>
        {this.state.auteurs.map ((auteur, index) =>
          <tr key={index}>
            <th scope="row"><a href={`/auteur/${auteur.id}`} >{auteur.pseudo}</a></th>
            <td>{auteur.nom}</td>
            <td>{auteur.prenom}</td>
            <td>{auteur.nbOeuvre}</td>
            <td>{auteur.moyenneNote}</td>
          </tr>
        )}
        </tbody>
      </Table></div>
  }
}

export default TopAuteur
