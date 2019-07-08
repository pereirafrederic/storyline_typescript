// externe
import React, { PureComponent } from 'react'
import { mdiAccessPoint } from '@mdi/js'

// interne
import './Accueil.scss'

//composants
import TopAuteur from '../site/top-auteur/TopAuteur'
import TopOeuvre from '../site/top-oeuvre/TopOeuvre'

// modules
import Button from '../../modules/custom/button/Button'
import Spinner, { ESpinnerTheme } from '../../modules/custom/spinner/Spinner'
import IconBadge from '../../modules/custom/icon/icon-badge/IconBadge'
import Popup from '../../modules/custom/popup/Popup'
import Tile, { ETileTheme } from '../../modules/custom/visuel/tile/Tile'
import LayoutTablet, {
  LayoutTabletColumns,
} from '../../modules/custom/visuel/layout/layout-tablet/LayoutTablet'
import LayoutMobile from '../../modules/custom/visuel/layout/layout-mobile/LayoutMobile'
import Tooltip from '../../modules/custom/tooltip/Tooltip'

interface IProps {}

class Accueil extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Accueil">
      </div>
    )
  }
}

export default Accueil
/*
<Popup title={'hello'} onClose={() => console.log('close')}>
          <Button
            iconPath={mdiAccessPoint}
            label={'bonjour'}
            onAction={() => console.log('button')}
          />
          <Spinner size="36px" theme={ESpinnerTheme.Dark} />
          <IconBadge iconPath={mdiAccessPoint} value={4} />
        </Popup>
*/
