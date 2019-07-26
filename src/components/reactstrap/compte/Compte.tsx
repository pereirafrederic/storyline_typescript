// externe
import React, { PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
// interne

// composants
import Recuperation from './recuperation/Recuperation'
import Identite from './identite/Identite'
import CoordonneeBancaire from './coordonnee-bancaire/CoordonneeBancaire'
import AuteurInscription from './auteur-inscription/AuteurInscription'

interface IProps {
    id?: string
}


interface IState
 {
   isOpen : boolean,
   isAuteur : boolean,
 }


class Compte extends PureComponent<IProps, IState> {

  constructor(props:IProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
     isAuteur: true
    };
  }

  toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

  public render() {

    const {isAuteur} = this.state

    return (
      <div className="Compte">
        <Identite />
        <CoordonneeBancaire />

        <Button color="warning" href="/compte/recuperation"
        >{"recuperer mon mot de passe"}</Button>
        <br />
        {!isAuteur && <AuteurInscription />}
        {isAuteur && (<Link to={`/auteur/me`}>voir mon profil Auteur</Link>)}
      </div>)

  }
}

export default Compte
