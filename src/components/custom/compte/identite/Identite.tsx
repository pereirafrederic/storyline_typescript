// externe
import React, { PureComponent } from 'react'

// custom
import Tile, { ETileTheme } from '../../../../modules/custom/visuel/tile/Tile'
import TileItem from '../../../../modules/custom/tile-item/TileItem'

interface IOwnProps {}
interface IProps extends IOwnProps {}

class Identite extends PureComponent<IProps> {
  public render() {
    return (
      <Tile className="Identite" theme={ETileTheme.External}>
        <TileItem contentLabel={'nom'} contentValue={'Pereira'} />
        <TileItem contentLabel={'prenom'} contentValue={'frédéric'} />
        <TileItem
          contentLabel={'email'}
          contentValue={'pereira.frederic.android@gmail.com'}
        />
      </Tile>
    )
  }
}

export default Identite
