// externe
import React, { PureComponent } from 'react'

// interne
import i18n from '../i18n'

interface IProps {}

class Footer extends PureComponent<IProps> {
  public render() {
    return <div className="Footer">{i18n.titre}</div>
  }
}

export default Footer
