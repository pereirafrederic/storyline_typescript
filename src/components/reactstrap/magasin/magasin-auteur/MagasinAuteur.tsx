// externe
import React, { PureComponent, FormEvent } from 'react'

import {IAuteurThematique, IAuteur } from './../../../../modules/modeles/interfaces'


import {EMenuType} from './../../../../modules/modeles/enumeration'

import {orderBy} from 'lodash'

import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron, Pagination, PaginationItem, PaginationLink  } from 'reactstrap';
  import Menu, {EMenu} from '../../site/Menu/Menu'

//
import { Table } from 'reactstrap';




interface IOwnProps {

}
interface IState {
  auteurs : Array<IAuteurThematique>
  lettres : Set<string> | null
}

interface IProps extends IOwnProps {}

const initAuteurs :Array<IAuteurThematique> = [
  {
    id:1,
    pseudo: 'joco',
    nom : 'rico',
    prenom:  'john',
    nbOeuvre: 12,
    moyenneNote : 8.4,
    thematiques : [{
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
    }]
  },{
    id:2,
    pseudo: 'nico',
    nom : 'recco',
    prenom:  'nicolas',
    nbOeuvre: 1,
    moyenneNote : 18,
    thematiques : [{
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
    }]
  },{
    id:3,
    pseudo: 'bello',
    nom : 'bella',
    prenom:  'ela',
    nbOeuvre: 100,
    moyenneNote : 8.4,
    thematiques : [{
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
        }
      ]
    },{
      id:3,
      thematique: 'fantasy',
      oeuvres : [  {
          id: 10,
          titre : 'klit de sang',
          auteur : 'berinice mc bur',
          thematique : 'dystropie',
          note : 1,
          don : 1000
        }
      ]
    }]
  }
]

class MagasinAuteur extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      auteurs : initAuteurs,
      lettres : new Set<string>()
    }
  }

  componentDidMount(){
    this.setState({lettres: this.getLettres(initAuteurs)})
  }

getLettres(auteurs : Array<IAuteur>) {
  const lettres = new Set<string>()
  initAuteurs.forEach (auteur => {
    lettres.add(auteur.nom.slice(0,1))
    lettres.add(auteur.prenom.slice(0,1))
  })
  return lettres;
}

filter(lettre: string){
  const filterAuteur = initAuteurs.filter(auteur => [auteur.nom.slice(0,1),  auteur.prenom.slice(0,1)].includes(lettre))
  this.setState({auteurs : orderBy(filterAuteur, ["nom", "prenom"], ["desc", "desc"])})
}
stopFilter(){
  this.setState({auteurs : initAuteurs})
}

domLettres(){
const {  lettres} = this.state

if(!lettres) return null;

  return ( <Pagination aria-label="Page navigation example" className="lettres-pagination">
<PaginationItem key={"tous"}>  <PaginationLink onClick={() =>this.stopFilter()}>
         {"tous"}
       </PaginationLink>
    </PaginationItem>
{Array.from(lettres).map( (lettre, index) =>   <PaginationItem key={index}>
  <PaginationLink onClick={() =>this.filter(lettre)}>
         {lettre}
       </PaginationLink>
    </PaginationItem>
  )}
</Pagination>
    )
}


  public render() {

    const { auteurs, lettres} = this.state

    return (
      <div className="MagasinAuteur">

      {this.domLettres()}
      <div className="MagasinAuteur__auteur">
      {auteurs.map ((auteur, index) =>       <Card key={index}>
              <CardBody>
                <CardTitle><a href={`/auteur/${auteur.id}`} >{`${auteur.nom} ${auteur.prenom}`}</a></CardTitle>
                <CardSubtitle>{`${auteur.nbOeuvre} - ${auteur.moyenneNote}`}</CardSubtitle>
                <br />
                {auteur.thematiques.map((thematique , index) =>
                    <div className="thematique" key={index}>
                      {thematique.thematique}

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
                        <tr key={index}>
                          <th scope="row"><a href={`/oeuvre/${oeuvre.id}`} >{oeuvre.titre}</a></th>
                          <td>{oeuvre.note}</td>
                          <td>{oeuvre.don}</td>
                        </tr>
                      )}
                              </tbody>
                                     </Table>
                                     <br />
                    </div>

                )}
              </CardBody>
            </Card>)}
            </div>
      </div>
    )
  }
}

export default MagasinAuteur
