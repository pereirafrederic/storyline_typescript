// externe
import React, { PureComponent } from 'react'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurInscription extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurInscription">{'AuteurInscription'}</div>
  }
}

export default AuteurInscription
