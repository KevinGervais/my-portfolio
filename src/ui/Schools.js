import React from 'react'
import imageMap from '../images'
export default class Schools extends React.Component {
  render () {
    return (
      <div className='post'>
        <div className='header'>
          <h3>{this.props.title}</h3>
        </div>
        <div className='school-list'>
          {(this.props.subjectList || []).map((obj, index) => (
            <div className='school-item' key={index}>
              <div className='left-container'>
                <div className='picture' style={{ backgroundImage: `url(${imageMap[obj.image]})` }} />
                {this.props.subjectList.length - 1 !== index &&
                  <div className='line' />
                }
              </div>
              <div className='right-container'>
                <div className='title-container'>
                  <h4>{obj.title}</h4>
                  <h5>{obj.subTitle}</h5>
                  <h6>{obj.date}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
