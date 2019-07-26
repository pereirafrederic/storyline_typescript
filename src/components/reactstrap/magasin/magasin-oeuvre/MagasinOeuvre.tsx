// externe
import React, { PureComponent, FormEvent } from 'react'

import {IOeuvre } from './../../../../modules/modeles/interfaces'

import {EMenuType} from './../../../../modules/modeles/enumeration'

import {orderBy} from 'lodash'

import { Card,  CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
  import Menu, {EMenu} from '../../site/Menu/Menu'

//





interface IOwnProps {

}
interface IState {
  sorted: EMenuType | string |null
  oeuvres : Array<IOeuvre>
    lettres : Set<string> | null
}

interface IProps extends IOwnProps {}


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

class MagasinOeuvre extends PureComponent<IProps, IState> {

  constructor(props : IProps){
    super(props)

    this.state = {
      sorted : null,
      oeuvres : initOeuvres,
      lettres:  new Set<string>()
    }
    this.onChangeSorted = this.onChangeSorted.bind(this);
  }

  componentDidMount(){
    this.setState({lettres: this.getLettres(initOeuvres)})
  }

  getLettres(oeuvres : Array<IOeuvre>) {
    const lettres = new Set<string>()
    oeuvres.forEach (oeuvre =>       lettres.add(oeuvre.titre.slice(0,1)) )
    return lettres;
  }

  onChangeSorted( sorted : EMenuType | string){
    console.log(sorted)
    this.setState({sorted})
  }

getOeuvres(){

  switch(this.state.sorted) {
    case EMenuType.TITRE:
      return orderBy(this.state.oeuvres, [ 'titre']);
      case EMenuType.THEMATIQUE:
        return orderBy(this.state.oeuvres, [ 'thematique']);
        case EMenuType.AUTEUR:
          return orderBy(this.state.oeuvres, [ 'auteur']);
        case EMenuType.NOTE:
          return orderBy(this.state.oeuvres, [ 'note'],  ['desc']);
          case EMenuType.DON:
            return orderBy(this.state.oeuvres, [ 'don'],  ['desc']);
      default:
        return this.state.oeuvres;
    }

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

filter(lettre: string){
  const filterAuteur = initOeuvres.filter(oeuvre => oeuvre.titre.slice(0,1) === lettre)
  this.setState({oeuvres : orderBy(filterAuteur, ["nom", "prenom"], ["desc", "desc"])})
}
stopFilter(){
  this.setState({oeuvres : initOeuvres})
}

  public render() {
    console.log(window.location.pathname)
    return (
      <div className="MagasinOeuvre">
          {this.domLettres()}
          <div className="MagasinOeuvre__oeuvre">
      <Menu typeMenu={EMenu.MAGASIN} onChange={this.onChangeSorted}/>
      {this.getOeuvres().map ((oeuvre, index) =>       <Card key={index}>
              <CardBody>
                <CardTitle>{oeuvre.titre}</CardTitle>
                <CardSubtitle>{oeuvre.auteur}</CardSubtitle>
                <CardText>{oeuvre.thematique}</CardText>
                <div className="horizontal">
                <CardText>{oeuvre.note}</CardText>
                  <CardText>{oeuvre.don}</CardText>

                </div>
              </CardBody>
            </Card>)}
      </div>
      </div>
    )
  }
}

export default MagasinOeuvre
