// externe
import React, { PureComponent } from 'react'

import { IThematique}  from './../../../../modules/modeles/interfaces'
import { Table } from 'reactstrap';
import {orderBy} from 'lodash'

interface IOwnProps {}
interface IProps extends IOwnProps {}
interface IState {
  thematiques : Array<IThematique>
}





const initThematique :Array<IThematique> = [
  {
    id:1,
    thematique: 'horreur',
    oeuvres : [  {
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
      }
    ]
  },{
    id:3,
    thematique: 'policier',
    oeuvres : [{
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
  }
]

class LecteurLectures extends PureComponent<IProps, IState> {


  constructor(props : IProps){
    super(props)

    this.state = {
      thematiques :  orderBy(initThematique, [ 'thematique'], ['desc'])
    }
  }



  public render() {
    return <div className="LecteurLectures">
    {this.state.thematiques.map (thematique =>

  <div  className="Thematique" key={thematique.id}>
      <h2>{thematique.thematique}</h2>

           <Table>
          <thead>
            <tr>
              <th>titre</th>
              <th>note</th>
              <th>don</th>
            </tr>
          </thead>
          <tbody>
          {orderBy(thematique.oeuvres, [ 'note'], ['desc']).map (oeuvre =>
            <tr key={oeuvre.id}>
              <th scope="row"><a href={`/oeuvre/${oeuvre.id}`} >{oeuvre.titre}</a></th>
              <td>{oeuvre.note}</td>
              <td>{oeuvre.don}</td>
            </tr>
          )}
          </tbody>
        </Table></div>)}
    </div>
  }
}

export default LecteurLectures
