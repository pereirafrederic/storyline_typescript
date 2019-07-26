// externe
import React, { PureComponent } from 'react'

// composants
import Livre from '../livre/Livre'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class CollectionLivre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="SerieLivre">
        <Livre />
      </div>
    )
  }
}

export default CollectionLivre
