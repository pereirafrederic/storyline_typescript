// externe
import React, { PureComponent } from 'react'

//composants
import Page from '../page/Page'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class Arbre extends PureComponent<IProps> {
  public render() {
    return <div className="Arbre">{'Arbre'}</div>
  }
}

export default Arbre
