// externe

import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// interne
import './App.scss'

//composant custom
import Accueil from './components/custom/accueil/Accueil'
//import Compte from './components/compte/Compte'
//import Auteur from './components/custom/auteur/Auteur'
//import TopBar from './components/site/top-bar/TopBar'
//import Menu from './components/site/menu/Menu'
//import Footer from './components/site/footer/Footer'
import Lecteur from './components/custom/lecteur/Lecteur'

//import Magasin from './components/custom/magasin/Magasin'
import Oeuvre from './components/custom/oeuvre/Oeuvre'

// composant reactstrap
import Inscription from './components/reactstrap/compte/inscription/Inscription'
import Connexion from './components/reactstrap/compte/connexion/Connexion'
import Compte from './components/reactstrap/compte/Compte'
import Recuperation from './components/reactstrap/compte/recuperation/Recuperation'
import EditionIdentite from './components/reactstrap/compte/identite/edition/EditionIdentite'
import EditionBancaire from './components/reactstrap/compte/coordonnee-bancaire/edition/EditionBancaire'
import Magasin  from './components/reactstrap/magasin/Magasin'
import MagasinAuteur  from './components/reactstrap/magasin/magasin-auteur/MagasinAuteur'
import MagasinOeuvre  from './components/reactstrap/magasin/magasin-oeuvre/MagasinOeuvre'
import MagasinThematique  from './components/reactstrap/magasin/magasin-thematique/MagasinThematique'
import Auteur from './components/reactstrap/auteur/Auteur'
import Top from './components/reactstrap/top/Top'
import TopAuteur from './components/reactstrap/top/top-auteur/TopAuteur'
import TopThematique from './components/reactstrap/top/top-thematique/TopThematique'

// Module custom
import Tile, { ETileTheme } from './modules/custom/visuel/tile/Tile'

//boot
import TopBar from './components/reactstrap/site/TopBar/TopBar'
import Footer from './components/reactstrap/site/Footer/Footer'

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <div className="App">
        <Router>
          <TopBar />
          <div className="App__Body">

            <div className="App__Body__Content">
              <Switch>
                <Route exact path={'/'} render={() => <Accueil />} />
                <Route
                  exact
                  path={'/compte/me'}
                  render={({ match }) => <Compte id={match.params.id} />}
                />

                <Route
                  exact
                  path={'/compte/inscription'}
                  render={() => <Inscription />}
                />
                <Route
                  exact
                  path={'/compte/recuperation'}
                  render={() => <Recuperation />}
                />
                <Route
                  exact
                  path={'/compte/edition'}
                  render={() => <EditionIdentite />}
                />
                <Route
                  exact
                  path={'/compte/coordonnee-bancaire/edition'}
                  render={() => <EditionBancaire />}
                />
                <Route
                  exact
                  path={'/compte/:id'}
                  render={({ match }) => <Compte id={match.params.id} />}
                />
                <Route exact path={'/connexion'} render={() => <Connexion />} />

                <Route path={`/auteur/me`} render={() => <Auteur />} />
                <Route
                  path={`/auteur/:id`}
                  render={({ match }) => <Auteur id={match.params.id} />}
                />

                <Route path={`/lecteur/me`} render={() => <Lecteur />} />
                <Route
                  path={`/lecteur/:id`}
                  render={({ match }) => <Lecteur id={match.params.id} />}
                />
                <Route
                  path={`/oeuvre/:id`}
                  render={({ match }) => <Oeuvre id={match.params.id} />}
                />

                <Route exact path={'/top'} render={() => <Top />} />
                <Route exact path={'/top/auteur'} render={() => <TopAuteur />} />
                <Route exact path={'/top/thematique'} render={() => <TopThematique />} />

                <Route exact path={'/magasin'} render={() => <Magasin />} />
                <Route exact path={'/magasin/oeuvre'} render={() => <MagasinOeuvre />} />
                <Route exact path={'/magasin/auteur'} render={() => <MagasinAuteur />} />
                <Route exact path={'/magasin/thematique'} render={() => <MagasinThematique />} />
              </Switch>
            </div>
          </div>
          <div className="App__footer">
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
/*
//<Route exact path={'/top'} render={() =><Fragment><TopAuteur /><TopOeuvre/><TopDon /></Fragment>} />
*/
