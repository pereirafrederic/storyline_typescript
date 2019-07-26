// externe
import React, { PureComponent } from 'react'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class LecteurNotes extends PureComponent<IProps> {
  public render() {
    return <div className="LecteurNotes">{'LecteurNotes'}</div>
  }
}

export default LecteurNotes
