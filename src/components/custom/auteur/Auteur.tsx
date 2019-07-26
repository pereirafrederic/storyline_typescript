//externe
import React, { PureComponent } from 'react'

// componsants
import AuteurPage from './auteur-page/AuteurPage'
import AuteurOeuvre from './auteur-oeuvre/AuteurOeuvre'
import TopAuteurOeuvre from './top-auteur-oeuvre/TopAuteurOeuvre'
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
        <TopAuteurOeuvre />
        <AuteurFinancement />
      </div>
    )
  }
}

export default Auteur
