import React from 'react'
import ImageGalery from './ImageGalery'
import imageMap from '../images'
import { WebsiteDict } from '../WebsiteDict'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
export default class TopNav extends React.Component {
  render () {
    return (
      <div className='post'>
        <div className='header'>
          {this.props.image &&
            <div
              className={`picture ${this.props.noBorder ? ' no-border' : ''}`}
              style={{ backgroundImage: `url(${imageMap[this.props.image]})` }}
            />
          }
          <div className='title-container'>
            <div className='title-wrapper'>
              <h4>{this.props.title}</h4>
              <h5>{this.props.subTitle}</h5>
            </div>
            <h6>{this.props.date}</h6>
          </div>
        </div>
        <div className='post-content'>
          {!!(this.props.buttonList || []).length &&
          <div className='button-list'>
            {this.props.buttonList.map((button, index) => (
              <a
                href={button.link}
                key={index}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={{
                    github: faGithub,
                    website: faGlobe,
                    appStore: faAppStore
                  }[button.type]}
                />
                {this.props.global.say[button.type]}
              </a>
            ))}
          </div>
          }
          {this.props.toolList &&
            <div className='tool-list'>
              {this.props.toolList.map(str => (
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
          }

          {this.props.unorderedList &&
            <ul
              style={{ marginBottom: this.props.imageList ? '30px' : '' }}
            >
              {this.props.unorderedList.map((str, index) => (
                <li key={index}>{str}</li>
              ))}
            </ul>
          }
          <ImageGalery
            title={this.props.subTitle}
            type={this.props.imageType}
            list={(this.props.imageList || []).map(str => imageMap[str])}
          />
        </div>
      </div>
    )
  }
}
