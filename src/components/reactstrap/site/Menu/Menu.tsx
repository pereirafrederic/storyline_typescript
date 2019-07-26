// externe
import React, { PureComponent, FormEvent } from 'react'
import { Nav, NavItem, NavLink, Card } from 'reactstrap';


import {EMenuType} from '../../magasin/Magasin';
// interne

// composants

export enum EMenu {
  ACCUEIL = "ACCUEIL",
  MAGASIN= "MAGASIN"
}

interface IMenu {
  link: string | EMenuType
  name: string
}

type onChangeType = (sorted: EMenuType | string) => void;
interface IProps {
typeMenu : EMenu | null
onChange?: onChangeType
}


interface IState
 {
   isOpen : boolean
   menus : Array<IMenu>
 }

const menuMagasin = [
  {
    link : EMenuType.TITRE,
    name : 'par titre'
  },
  {
    link : EMenuType.THEMATIQUE,
    name : 'par thématique'

  },{
    link : EMenuType.AUTEUR,
    name : 'par auteur'

  },{
    link : EMenuType.NOTE,
    name : 'par note'

  },{
    link : EMenuType.DON,
    name : 'par don'

  }
]

const menuAccueil = [
  {
    link : '/magasin',
    name : 'magasin'

  },{
    link : '/top/auteur',
    name : 'Top Auteur'

  },{
    link : '/top/thematique',
    name : 'Top thématique'

  }
]

class Footer extends PureComponent<IProps, IState> {

  constructor(props:IProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      menus : this.switchMenu()
    };
  }


  switchMenu(){
    console.log(this.props.typeMenu)
    switch(this.props.typeMenu) {
        case EMenu.ACCUEIL:
          return menuAccueil
        case EMenu.MAGASIN:
          return menuMagasin
        default:
          return menuAccueil;
      }
  }

  toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

  public render() {
    console.log(this.state.menus)
    return <div className="App__Body__Menu"><Card><Nav vertical>
      {this.state.menus.map((menu, index) =>   <NavItem key={index}>
    {this.props.onChange && (    <NavLink ><div className="link" onClick={() => this.props.onChange && this.props.onChange(menu.link)} >{menu.name}</div></NavLink>)}
    {!this.props.onChange && (    <NavLink href={menu.link} >{menu.name}</NavLink>)}


        </NavItem> )}
        </Nav></Card></div>

  }
}

export default Footer
