// externe
import React, { PureComponent } from 'react'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class Inscription extends PureComponent<IProps> {
  public render() {
    return <div className="Inscription">{'Inscription'}</div>
  }
}

export default Inscription
