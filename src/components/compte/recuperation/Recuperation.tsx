//externe
import React, { PureComponent } from 'react'

// modules
import Tile from '../../../modules/custom/visuel/tile/Tile'
import Button, { EButtonTheme } from '../../../modules/custom/button/Button'

// Module internal

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Recuperation extends PureComponent<IProps> {
  public render() {
    return (
      <Tile className="Recuperation">
        <Button
          label={'recuperer votre mot de passe'}
          theme={EButtonTheme.Dark}
          onAction={() => console.log('recup')}
        />
      </Tile>
    )
  }
}

export default Recuperation
