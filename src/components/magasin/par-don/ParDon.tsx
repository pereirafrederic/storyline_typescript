// externe
import React, { PureComponent } from 'react'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class ParDon extends PureComponent<IProps> {
  public render() {
    return <div className="ParDon">{'ParDon'}</div>
  }
}

export default ParDon
