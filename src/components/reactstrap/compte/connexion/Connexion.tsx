// externe
import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {LoginWS } from '../../../../services/web-services'

interface IOwnProps {}
interface IProps extends IOwnProps {}


const INITIAL_STATE: IState = {
  pseudo: '',
  password: '',
  error: null,
};


interface IState {
    pseudo: string
  password: string
  error: IError | null
}

interface IError {
  message : string
}

class Connexion extends PureComponent<IProps, IState> {

  constructor(props: IProps) {
     super(props);
     this.state = INITIAL_STATE;
   }

  onSubmit = (event:  React.FormEvent<HTMLFormElement>): any => {
    const { pseudo, password } = this.state;

    console.log('onSubmit', this.state)

LoginWS.login(pseudo,password).then( response =>{
        console.log('login reussi')
})

    /* todo */
    event.preventDefault();
  }

  onChangePseudo = (event:  any) => {

    this.setState({ pseudo: event.target.value });
  }
  onChangePassword = (event:  any) => {

    this.setState({ password: event.target.value });
  }

  public render() {


    const {
  pseudo,
  password,
  error
} = this.state;
    return <div className="Connexion">

    <Form onSubmit={this.onSubmit}>

    <FormGroup>
      <Label for="exampleEmail">Email</Label>
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
      <input
        name="passwordOne"
        value={password}
        onChange={this.onChangePassword}
        type="password"
        placeholder="Password"
      />
      </FormGroup>

       <Button type="submit">
        Sign in
      </Button>

      {error && <p>{error.message}</p>}
    </Form>
    </div>
  }
}

export default Connexion
