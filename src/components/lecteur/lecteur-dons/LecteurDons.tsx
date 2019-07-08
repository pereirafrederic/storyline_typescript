// externe
import React, { PureComponent } from 'react'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurDons extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurDons">{'LecteurDons'}</div>
  }
}

export default LecteurDons
