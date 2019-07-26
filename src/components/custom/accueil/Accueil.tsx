// externe
import React, { PureComponent } from 'react'
import { mdiAccessPoint } from '@mdi/js'

import Menu , {EMenu} from '../../reactstrap/site/Menu/Menu'

// interne
import './Accueil.scss'

//composants
// import TopAuteur from '../auteur/top-auteur/TopAuteur'
import TopOeuvre from '../oeuvre/top-oeuvre/TopOeuvre'

// custom



interface IProps {}

class Accueil extends PureComponent<IProps> {
  public render() {
    return (
      <div className="Accueil">
      <Menu typeMenu={EMenu.ACCUEIL}/>
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
