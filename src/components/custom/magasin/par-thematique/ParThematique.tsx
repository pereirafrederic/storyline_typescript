// externe
import React, { PureComponent } from 'react'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class ParThematique extends PureComponent<IProps> {
  public render() {
    return <div className="ParThematique">{'ParThematique'}</div>
  }
}

export default ParThematique
