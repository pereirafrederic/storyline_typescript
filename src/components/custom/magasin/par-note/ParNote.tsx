// externe
import React, { PureComponent } from 'react'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class ParNote extends PureComponent<IProps> {
  public render() {
    return <div className="ParNote">{'ParNote'}</div>
  }
}

export default ParNote
