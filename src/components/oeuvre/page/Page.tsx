// interne
import React, { PureComponent } from 'react'


interface IOwnProps {}
interface IProps extends IOwnProps {}

class Page extends PureComponent<IProps> {
  public render() {
    return <div className="Page">{'Page'}</div>
  }
}

export default Page
