//externe
import React, { PureComponent } from 'react'

// modules
import { Button, Card } from 'reactstrap';

// Module internal

interface IOwnProps {}
interface IProps extends IOwnProps {}

class EditionIdentite extends PureComponent<IProps> {
  public render() {
    return (
      <Card className="EditionIdentite">
        <Button color="warning"
          onClick={() => console.log('editer mon compte')}
        >{'editer mon compte'}</Button>
      </Card>
    )
  }
}

export default EditionIdentite
