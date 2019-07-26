// externe
import React, { PureComponent } from 'react'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurLectures extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurLectures">{'LecteurLectures'}</div>
  }
}

export default LecteurLectures
