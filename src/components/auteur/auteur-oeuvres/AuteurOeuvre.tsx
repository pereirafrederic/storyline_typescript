// externe
import React, { PureComponent } from 'react'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurOeuvre extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurOeuvre">{'AuteurOeuvre'}</div>
  }
}

export default AuteurOeuvre
