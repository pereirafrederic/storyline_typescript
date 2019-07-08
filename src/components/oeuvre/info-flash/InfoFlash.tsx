// externe
import React, { PureComponent } from 'react'

//composants
import Evenement from '../evenement/Evenement'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class InfoFlash extends PureComponent<IProps> {
  public render() {
    return <div className="InfoFlash">{'InfoFlash'}</div>
  }
}

export default InfoFlash
