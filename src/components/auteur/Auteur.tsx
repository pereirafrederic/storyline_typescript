//externe
import React, { PureComponent } from 'react'

// componsants
import AuteurPage from './auteur-page/AuteurPage'
import AuteurOeuvre from './auteur-oeuvres/AuteurOeuvre'
import AuteurInscription from './auteur-inscription/AuteurInscription'
import AuteurFinancement from './auteur-financement/AuteurFinancement'


interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class Auteur extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Auteur">
        {this.props.id}
        <AuteurPage />
        <AuteurOeuvre />
        <AuteurInscription />
        <AuteurFinancement />
      </div>
    )
  }
}

export default Auteur
