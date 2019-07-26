//externe
import React, { PureComponent } from 'react'

// modules
import Tile from '../../../../modules/custom/visuel/tile/Tile'
import { Button, Card } from 'reactstrap';

// Module internal

interface IOwnProps {}
interface IProps extends IOwnProps {}

class EditionCompte extends PureComponent<IProps> {
  public render() {
    return (
      <Card className="Recuperation">
        <Button color="danger"
          onClick={() => console.log('recup')}
        >{'recuperer votre mot de passe'}</Button>
      </Card>
    )
  }
}

export default EditionCompte
