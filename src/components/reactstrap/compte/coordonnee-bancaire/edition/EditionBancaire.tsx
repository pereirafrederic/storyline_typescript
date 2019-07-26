// externe
import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText,  InputGroup, InputGroupAddon } from 'reactstrap';


interface IOwnProps {}
interface IProps extends IOwnProps {}

const INITIAL_STATE: IState = {
  rib: '',
  code: '',
  error: null,
};
interface IState {
    rib: string
  code: string
  error: IError | null
}

interface IError {
  message : string
}

class EditionBancaire extends PureComponent<IProps, IState> {


  constructor(props: IProps) {
     super(props);
     this.state = INITIAL_STATE;
   }


  onSubmit = (event:  React.FormEvent<HTMLFormElement>): any => {
    console.log('recuperation mot de pass')
  }

  onChangeRib = (event:  any) => {

    this.setState({ rib: event.target.value });
  }

  onChangeCode = (event:  any) => {

    this.setState({ code: event.target.value });
  }

  public render() {

      const { rib, code, error} = this.state

      const isInvalid =
        code === '' ||
        rib === '';

          return (<div className="EditionBancaire">
            <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="rib">rib</Label>
              <input
                name="rib"
                value={rib}
                onChange={this.onChangeRib}
                type="text"
                placeholder="rib"
              />
               </FormGroup>
               <FormGroup>
                 <Label for="code">code</Label>
                  <InputGroup>
                      <input
                        name="code"
                        value={code}
                        onChange={this.onChangeCode}
                        type="text"
                        placeholder="code"
                      />
                    </InputGroup>
              </FormGroup>

               <Button color="warning" disabled={isInvalid} type="submit">
                modifier
              </Button>

              {error && <p>{error.message}</p>}
            </Form>
            </div>)
  }
}

export default EditionBancaire
