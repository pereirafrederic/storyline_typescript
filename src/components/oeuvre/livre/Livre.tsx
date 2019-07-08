// externe
import React, { PureComponent } from 'react'

// composants
import Evenement from '../evenement/Evenement'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Livre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Livre">
        <Evenement />
      </div>
    )
  }
}

export default Livre
