// externe
import React, { PureComponent } from 'react'


// composants
import LecteurStatistique from './lecteur-statistiques/LecteurStatistique'
import LecteurSouhaits from './lecteur-souhaits/LecteurSouhaits'
import LecteurNotes from './lecteur-notes/LecteurNotes'
import LecteurLectures from './lecteur-lectures/LecteurLectures'
import LecteurDons from './lecteur-dons/LecteurDons'


interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class Lecteur extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Lecteur">
        {this.props.id}
        <LecteurLectures />
        <LecteurNotes />
        <LecteurDons />
        <LecteurSouhaits />
        <LecteurStatistique />
      </div>
    )
  }
}

export default Lecteur
