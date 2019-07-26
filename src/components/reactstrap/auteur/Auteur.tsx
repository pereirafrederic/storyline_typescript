//externe
import React, { PureComponent } from 'react'

// componsants
import AuteurPresentation from './auteur-presentation/AuteurPresentation'
import AuteurOeuvre from './auteur-oeuvres/AuteurOeuvre'
import AuteurFinancement from './auteur-financement/AuteurFinancement'
import TopAuteurOeuvre from './top-auteur-oeuvre/TopAuteurOeuvre'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class Auteur extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Auteur">
        <AuteurPresentation />
        <TopAuteurOeuvre />
        <AuteurOeuvre />
        <AuteurFinancement />
      </div>
    )
  }
}

export default Auteur
