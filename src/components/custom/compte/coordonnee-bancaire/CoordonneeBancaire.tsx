// externe
import React, { PureComponent } from 'react'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class CoordonneeBancaire extends PureComponent<IProps> {
  public render() {
    return <div className="CoordonneeBancaire">{'CoordonneeBancaire'}</div>
  }
}

export default CoordonneeBancaire
