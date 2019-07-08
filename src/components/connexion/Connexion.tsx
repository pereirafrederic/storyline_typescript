// externe
import React, { PureComponent } from 'react'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Connexion extends PureComponent<IProps> {
  public render() {
    return <div className="Connexion">{'Connexion'}</div>
  }
}

export default Connexion
