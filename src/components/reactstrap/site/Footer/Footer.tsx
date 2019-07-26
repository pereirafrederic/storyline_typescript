// externe
import React, { PureComponent } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
// interne

// composants

interface IProps {}


interface IState
 {
   isOpen : boolean
 }


class Footer extends PureComponent<IProps, IState> {

  constructor(props:IProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

  public render() {
    return  <Nav>
          <NavItem>
            <NavLink href="https://github.com/pereirafrederic">mon github</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">mon cv</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">me contacter</NavLink>
          </NavItem>
        </Nav>

  }
}

export default Footer
