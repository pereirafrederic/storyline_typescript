// externe
import React, { PureComponent } from 'react'

//composants
import CollectionLivre from './collection-livre/CollectionLivre'
import InfoFlash from './info-flash/InfoFlash'


interface IOwnProps {
  id: string
}
interface IProps extends IOwnProps {}

class Oeuvre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Oeuvre">
        {this.props.id}
        <InfoFlash />
        <CollectionLivre />
      </div>
    )
  }
}

export default Oeuvre
