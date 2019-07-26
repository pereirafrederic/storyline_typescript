// externe
import React, { PureComponent } from 'react'
import { Table } from 'reactstrap';
import {orderBy} from 'lodash'

import TopAuteur from './top-auteur/TopAuteur'
import TopThematique from './top-thematique/TopThematique'


interface IOwnProps {}
interface IProps extends IOwnProps {}

interface IState {
}

class Top extends PureComponent<IProps, IState> {


  public render() {
    return <div className="Top">
              <h1>Top</h1>
              <div className="Top__tops">
              <TopAuteur />
              <TopThematique />
              </div>
      </div>
  }
}

export default Top
