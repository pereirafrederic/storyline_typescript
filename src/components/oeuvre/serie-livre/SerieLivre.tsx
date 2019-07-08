// externe
import React, { PureComponent } from 'react'

// composants
import Livre from '../livre/Livre'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class SerieLivre extends PureComponent<IProps> {
  public render() {
    return (
      <div className="SerieLivre">
        <Livre />
      </div>
    )
  }
}

export default SerieLivre
