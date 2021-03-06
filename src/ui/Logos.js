import React from 'react'
import imageMap from '../images'
import { WebsiteDict } from '../WebsiteDict'
export default class TopNav extends React.Component {
  render () {
    return (
      <div className='post'>
        <div className='header'>
          <h3>{this.props.title}</h3>
        </div>
        <div className='logo-list'>
          {imageList.map((str) => (
            <a
              key={str}
              className='img-container'
              target='_blank'
              rel='noopener noreferrer'
              href={WebsiteDict[str]}
            >
              <img src={imageMap[str]} alt={str} />
              <span className='tooltip'>{str}</span>
            </a>
          ))}
        </div>
      </div>
    )
  }
}
const imageList = [
  'Typescript', 'React', 'Redux', 'Electron', 'Cordova', 'React-router', 'React-Bootstrap', 'MongoDb', 'NodeJs', 'Express', 'Socket.io', 'Jira',
  'Sass', 'Git', 'GitHub', 'NightWatch', 'Cucumber Tests', 'Styled Components', 'Jest', 'NPM', 'MathJs', 'Visual studio code', 'Atom', 'Affinity'
]
