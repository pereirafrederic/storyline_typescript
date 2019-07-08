// externe
import React, { PureComponent } from 'react'

interface IOwnProps {
  id?: string
}
interface IProps extends IOwnProps {}

class AuteurPage extends PureComponent<IProps> {
  public render() {
    return <div className="AuteurPage">{'AuteurPage'}</div>
  }
}

export default AuteurPage
