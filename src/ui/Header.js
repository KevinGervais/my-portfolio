import React from 'react'
import imageMap from '../images'
export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='title'>
          <img src={imageMap['html-css-js']} alt='html css js' />
          <h1>{this.props.global.say.developer}</h1>
        </div>
        <div className='line' />
        <div className='profile'>
          <div className='border'>
            <div
              className='image'
              style={{ backgroundImage: `url(${imageMap['dev']})` }}
            />
          </div>
          <h2>Kevin Gervais Gilman</h2>
        </div>
      </header>
    )
  }
}
