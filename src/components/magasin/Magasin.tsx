// externe
import React, { PureComponent } from 'react'

//composants
import ParThematique from './par-thematique/ParThematique'
import ParNote from './par-note/ParNote'
import ParDon from './par-don/ParDon'
import ParAuteur from './par-auteur/ParAuteur'



interface IOwnProps {}
interface IProps extends IOwnProps {}

class Magasin extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Magasin">
        <ParAuteur />
        <ParThematique />
        <ParNote />
        <ParDon />
      </div>
    )
  }
}

export default Magasin
