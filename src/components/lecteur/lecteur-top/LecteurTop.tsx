// externe
import React, { PureComponent } from 'react'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurTop extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurTop">{'LecteurTop'}</div>
  }
}

export default LecteurTop
