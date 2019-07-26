// externe
import React, { PureComponent } from 'react'

// interne
import i18n from '../i18n'

interface IProps {}

class Menu extends PureComponent<IProps> {
  public render() {
    return <div className="Menu">{i18n.titre}</div>
  }
}

export default Menu
