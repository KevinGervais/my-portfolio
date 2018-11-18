import React from 'react'
import ReactDOM from 'react-dom'
import Header from './ui/Header'
import Content from './ui/Content'
import './styles/index.js'
import { fr } from './languages/fr'
import { en } from './languages/en'
import * as serviceWorker from './serviceWorker'
class Index extends React.Component {
  constructor (props) {
    super(props)
    const lang = navigator.language || navigator.userLanguage
    this.state = { say: lang.includes('en') ? en : fr }
  }
  render () {
    return (
        <>
          <Header global={this.state} />
          <Content global={this.state} />
      </>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))

serviceWorker.unregister()
