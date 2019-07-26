// externe
import React, { PureComponent, MouseEvent, FormEvent } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText,  InputGroup, InputGroupAddon } from 'reactstrap';

import {InscriptionWS } from '../../../../services/web-services'


interface IOwnProps {}
interface IProps extends IOwnProps {}

const INITIAL_STATE: IState = {
  pseudo: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


interface IState {
    pseudo: string
  email: string
  passwordOne: string
  passwordTwo: string
  error: IError | null
}

interface IError {
  message : string
}

class Inscription extends PureComponent<IProps, IState> {

  constructor(props: IProps) {
     super(props);
     this.state = INITIAL_STATE;
   }

  onSubmit = (event:  React.FormEvent<HTMLFormElement>): any => {
    const { pseudo, email, passwordOne, passwordTwo } = this.state;

    console.log('onSubmit', this.state)

InscriptionWS.creerCompte(pseudo,email, passwordOne, passwordTwo)
.then( response =>{
        console.log('creerCompte reussi')
})


    /* todo */
    event.preventDefault();
  }

  onChangePseudo = (event:  any) => {

    this.setState({ pseudo: event.target.value });
  }

  onChangeEmail = (event:  any) => {

    this.setState({ email: event.target.value });
  }

  onChangePassword1 = (event:  any) => {

    this.setState({ passwordOne: event.target.value });
  }

  onChangePassword2 = (event:  any) => {

    this.setState({ passwordTwo: event.target.value });
  }

  public render() {

    const {
  pseudo,
  email,
  passwordOne,
  passwordTwo,
  error
} = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      pseudo === '';

    return <div className="Inscription">

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
      <FormGroup>
        <Label for="exampleEmail">password</Label>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={this.onChangePassword1}
        type="password"
        placeholder="Password"
      />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">confirmation</Label>
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={this.onChangePassword2}
        type="password"
        placeholder="Confirm Password"
      />       </FormGroup>


       <Button disabled={isInvalid} type="submit">
        Sign Up
      </Button>

      {error && <p>{error.message}</p>}
    </Form>
    </div>
  }
}

export default Inscription
