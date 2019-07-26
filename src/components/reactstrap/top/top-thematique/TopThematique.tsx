// externe
import React, { PureComponent } from 'react'
import { Table } from 'reactstrap';
import {orderBy, sumBy} from 'lodash'

import { IThematique, IOeuvre}  from './../../../../modules/modeles/interfaces'

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

class TopThematique extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      thematiques :  orderBy(initThematique, [ 'thematique'], ['desc'])
    }
  }

getNoteMoyenne(oeuvres :Array<IOeuvre>){

return sumBy(oeuvres, 'note')/oeuvres.length;
}

getSommeDon(oeuvres :Array<IOeuvre>){
return sumBy(oeuvres, 'don')
}

  public render() {
    return <div className="TopThematique">
<h1>Top thématique </h1>

<Table>
<thead>
 <tr>
   <th>thematique</th>
   <th>note moyenne</th>
   <th>don</th>
 </tr>
</thead>
<tbody>
  {this.state.thematiques.map (thematique =>
    <tr key={thematique.id}>
      <td scope="row">{thematique.thematique}</td>
      <td>{this.getNoteMoyenne(thematique.oeuvres)}</td>
      <td>{this.getSommeDon(thematique.oeuvres)}</td>
      </tr>
  )}

        </tbody>
      </Table></div>

  }
}

export default TopThematique
