// externe
import React, { PureComponent,Fragment } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// interne

// composants




export enum ETypeUtilisateur{
  ADMIN ="ADMIN",
  LECTEUR ="LECTEUR",
  AUTEUR ="AUTEUR"
}

interface IProps {}


interface IState
 {
   isConnecte : boolean
   typeUtilisateur? : ETypeUtilisateur
   isOpen : boolean
 }

 const auteurLecteur:Array<ETypeUtilisateur> =[ETypeUtilisateur.LECTEUR, ETypeUtilisateur.AUTEUR]


class TopBar extends PureComponent<IProps, IState> {

  constructor(props:IProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isConnecte : true,
      isOpen: false,
      typeUtilisateur: ETypeUtilisateur.AUTEUR
    };
  }

  toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

  public render() {
    return         <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.state.isConnecte ? 'Mon compte' : 'se connecter'}
              </DropdownToggle>
              <DropdownMenu right>
              {this.state.isConnecte &&(<Fragment><DropdownItem href="/compte/me">
                Mon compte
              </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/compte/coordonnee-bancaire/edition">
                    Editer mes coordonnees bancaires
                  </DropdownItem>
                  <DropdownItem divider />
                <DropdownItem href="/deconnexion">
                  Se déconnecter
                </DropdownItem></Fragment>)}

                {!this.state.isConnecte &&(<Fragment>
                  <DropdownItem href="/connexion">
                    se connecter
                  </DropdownItem>

                  </Fragment>)}
              </DropdownMenu>
            </UncontrolledDropdown>

            {this.state.isConnecte  && this.state.typeUtilisateur && auteurLecteur.includes(this.state.typeUtilisateur) &&(<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Mes lectures
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem href="/livre/non-lus">
                Mes livres non lues
              </DropdownItem>
              <DropdownItem href="/livre/en-cours">
                Mes livres en cours
              </DropdownItem>
                <DropdownItem href="/livre/a-jour">
                  Mes livres finis en cours de publication
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/livre/fini">
                  Mes livres finis et publication terminé
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/livre/don/me">
                  Mes dons
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>)}

            {this.state.isConnecte  && this.state.typeUtilisateur === ETypeUtilisateur.AUTEUR &&(<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Mes Oeuvres
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem href="/oeuvre/en-cours">
                Mes Oeuvres en cours
              </DropdownItem>
                <DropdownItem href="/oeuvre/fini">
                  Mes Oeuvres finis
                </DropdownItem>
                          <DropdownItem divider />
                <DropdownItem href="/oeuvre/financement">
                  Mes financements
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>)}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Voir les tops
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem href="/top/auteur">
                Top auteur
              </DropdownItem>
                <DropdownItem  href="/top/thematique">
                  Top thématique
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Magasin
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem href="/magasin/oeuvre">
                  Oeuvres
                </DropdownItem>
                  <DropdownItem href="/magasin/auteur">
                    Auteurs
                  </DropdownItem>
                  <DropdownItem href="/magasin/thematique">
                    Thématiques
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
  }
}

export default TopBar
