// externe
import React, { PureComponent } from 'react'

// composants
import Page from '../page/Page'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class Evenement extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Evenement">
        <Page />
      </div>
    )
  }
}

export default Evenement
