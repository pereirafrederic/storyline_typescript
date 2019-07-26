//externe
import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText,  InputGroup, InputGroupAddon } from 'reactstrap';
import { Card } from 'reactstrap';
// modules
import Tile from '../../../../modules/custom/visuel/tile/Tile'


const INITIAL_STATE: IState = {
  pseudo: '',
  email: '',
  error: null,
};

// Module internal

interface IOwnProps {}
interface IProps extends IOwnProps {}

interface IState {
    pseudo: string
  email: string
  error: IError | null
}

interface IError {
  message : string
}

class Recuperation extends PureComponent<IProps, IState> {

  constructor(props: IProps) {
     super(props);
     this.state = INITIAL_STATE;
   }


onSubmit = (event:  React.FormEvent<HTMLFormElement>): any => {
  console.log('recuperation mot de pass')
}

onChangePseudo = (event:  any) => {

  this.setState({ pseudo: event.target.value });
}

onChangeEmail = (event:  any) => {

  this.setState({ email: event.target.value });
}

  public render() {

const { pseudo, email, error} = this.state

const isInvalid =
  email === '' ||
  pseudo === '';

    return (<div className="RECUPERATION">
      <Form onSubmit={this.onSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Pseudo</Label>
        <input
          name="pseudo"
          value={pseudo}
          onChange={this.onChangePseudo}
          type="text"
          placeholder="pseudo"
        />
         </FormGroup>
         <FormGroup>
           <Label for="exampleEmail">Email</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <input
                  name="email"
                  value={email}
                  onChange={this.onChangeEmail}
                  type="text"
                  placeholder="Email"
                />
              </InputGroup>
        </FormGroup>

         <Button color="warning" disabled={isInvalid} type="submit">
          envoyer un mail pour redefinir mon mot de passe
        </Button>

        {error && <p>{error.message}</p>}
      </Form>
      </div>
    )
  }
}

export default Recuperation
