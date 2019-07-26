// externe
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

// interne
import './Compte.scss'
import i18n from './i18n'

// composants
import Recuperation from './recuperation/Recuperation'
import Identite from './identite/Identite'
import CoordonneeBancaire from './coordonnee-bancaire/CoordonneeBancaire'
import AuteurInscription from './auteur-inscription/AuteurInscription'


interface IOwnProps {
  id?: string
}

interface IState {
  isAuteur : boolean
}
interface IProps extends IOwnProps {}

class Compte extends PureComponent<IProps, IState> {

constructor(props: IProps){
  super(props)

  this.state = {
    isAuteur: true
  }
}

  public render() {
    const { isAuteur } = this.state
    console.log(isAuteur)

    
    return (
      <div className="Compte">
        {i18n.titre}
        <div className="Compte__identite">
          {this.props.id}
          <Identite />
          <CoordonneeBancaire />
          <Recuperation />
          {!isAuteur && (<AuteurInscription />)}
          {isAuteur && (<Link to="/about">mon profil Auteur</Link>)}
        </div>
      </div>
    )
  }
}

export default Compte
