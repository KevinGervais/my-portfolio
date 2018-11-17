import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleLeft, faAngleRight } from '@fortawesome/pro-solid-svg-icons'
export default class ImageGalery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageList: [],
      height: '',
      index: 0,
      isFullscreen: false
    }
    this.Fullscreen = Fullscreen.bind(this)
  }
  componentDidMount () {
    this.getMinImageSize()
  }
  getGaleryHeight () {
    this.galeryNode = ReactDOM.findDOMNode(this.galeryRef)
    if (!this.galeryNode) return
    this.setState({ height: this.galeryNode.style.getPropertyValue('width') + 'px' })
  }
  promiseLoop (arr, func) {
    return new Promise(async (resolve, reject) => {
      let result = []
      let lastLoop = await arr.reduce(async (lastPromise, currentValue, index) => {
        let lastValue = await lastPromise
        if (lastValue) result.push(lastValue)
        return func(currentValue, index)
      }, Promise.resolve())
      let lastValue = await lastLoop
      if (lastValue) result.push(lastValue)
      resolve(result)
    })
  }
  async getMinImageSize () {
    const imageList = await Promise.all(this.props.list.slice().map(async (item, index) => {
      return this.getImageSize(item)
    }))
    this.setState({ imageList }, () => {
      this.getGaleryHeight()
    })
  }
  getImageSize (file) {
    return new Promise((resolve, reject) => {
      var image = new window.Image()
      image.onload = () => {
        resolve({ width: image.width, height: image.height })
      }
      image.src = file
    })
  }
  renderList (length, from, isMore) {
    let { imageList } = this.state
    return (
      <React.Fragment>
        {[...Array(length)].map((v, index) => (
          <div
            key={index}
            onClick={() => this.setState({
              isFullscreen: true,
              index: index + from
            })}
            alt={`${this.props.title} project ${index + from + 1} of ${this.props.list.length}`}
            ref={(ref) => { this[`img${index}`] = ref }}
            style={{
              backgroundImage: `url('${this.props.list[index + from]}')`,
              maxWidth: imageList[index + from].width + 'px',
              maxHeight: imageList[index + from].height + 'px'
            }}>
            {(isMore && index === length - 1) &&
              <div>+{this.props.list.length - 5}</div>
            }
          </div>
        ))}
      </React.Fragment>
    )
  }
  next (evt) {
    evt.stopPropagation()
    let index = this.state.index + 1
    if (index === this.props.list.length) index = 0
    this.setState({ index })
  }
  back (evt) {
    evt.stopPropagation()
    let index = this.state.index - 1
    if (index === -1) index = this.props.list.length - 1
    this.setState({ index })
  }
  getMin () {
    let li = this.state.imageList
    return li.reduce((min, obj) => {
      if (min.width > obj.width) min.width = obj.width
      if (min.height > obj.height) min.height = obj.height
      return min
    }, { width: Infinity, height: Infinity })
  }
  render () {
    const { imageList: li } = this.state
    if (!li.length) return null
    const { width, height } = this.getMin()
    const mainProps = {
      ref: (ref) => { this.galeryRef = ref },
      style: { height: this.state.height }
    }
    if (width < 250 || height < 250 || this.props.type === 'inline') {
      return (
        <div className='image-galery simple' {...mainProps} >
          {[...Array(li.length <= 9 ? li.length : 9)].map((v, index) => (
            <img
              onClick={() => this.setState({
                isFullscreen: true,
                index: index
              })}
              style={{ width: `
              calc(${100 / this.props.list.length}% -  (5px * ${this.props.list.length - 1}))
              ` }}
              key={this.props.list[index]}
              src={this.props.list[index]}
              alt={`${this.props.title} project ${index + 1} of ${this.props.list.length}`}
            />
          ))}
          {li.length === 10 &&
          <img
            src={this.props.list[10]}
            alt={`${this.props.title} project ${10} of ${this.props.list.length}`}
          />}
          {li.length > 10 &&
            <div className='more' style={{ backgroundImage: `url('${this.props.list[10]}')` }}>
              <div>+{li.length - 10}</div>
            </div>
          }
          {this.state.isFullscreen && <this.Fullscreen />}
        </div>
      )
    }
    if (this.props.list.length === 1) {
      return (
        <div className='one-image'>
          <img
            src={this.props.list[0]}
            alt={this.props.list[0]}
            style={{ maxWidth: width }}
          />
          {this.state.isFullscreen && <this.Fullscreen />}
        </div>
      )
    } else if (this.props.list.length === 2) {
      if (li[0].width < li[0].height && li[1].width < li[1].height) {
        return (
          <div className='image-galery' {...mainProps}>
            <div>{this.renderList(1, 0)}</div>
            <div>{this.renderList(1, 1)}</div>
            {this.state.isFullscreen && <this.Fullscreen />}
          </div>
        )
      } else {
        return (
          <div className='image-galery' {...mainProps}>
            <div>{this.renderList(2, 0)}</div>
            {this.state.isFullscreen && <this.Fullscreen />}
          </div>
        )
      }
    } else if (this.props.list.length === 3) {
      return (
        <div className='image-galery' {...mainProps}>
          <div>{this.renderList(1, 0)}</div>
          <div>{this.renderList(2, 1)}</div>
          {this.state.isFullscreen && <this.Fullscreen />}
        </div>
      )
    } else if (this.props.list.length === 4) {
      return (
        <div className='image-galery' {...mainProps}>
          <div>{this.renderList(2, 0)}</div>
          <div>{this.renderList(2, 2)}</div>
          {this.state.isFullscreen && <this.Fullscreen />}
        </div>
      )
    } else if (this.props.list.length === 5) {
      return (
        <div className='image-galery' {...mainProps}>
          <div>{this.renderList(2, 0)}</div>
          <div>{this.renderList(3, 2)}</div>
          {this.state.isFullscreen && <this.Fullscreen />}
        </div>
      )
    } else if (this.props.list.length > 5) {
      return (
        <div className='image-galery' {...mainProps}>
          <div>{this.renderList(2, 0)}</div>
          <div>{this.renderList(3, 2, true)}</div>
          {this.state.isFullscreen && <this.Fullscreen />}
        </div>
      )
    }
  }
}
function Fullscreen () {
  return (
    <div
      className='fullscreen'
      onClick={() => this.setState({ isFullscreen: false })}
    >
      <FontAwesomeIcon icon={faTimes} />
      <div>
        <FontAwesomeIcon icon={faAngleLeft} onClick={this.back.bind(this)} />
        <img
          alt={`${this.props.title} project ${this.state.index + 1} of ${this.props.list.length}`}
          src={this.props.list[this.state.index]}
          onClick={this.next.bind(this)}
        />
        <FontAwesomeIcon icon={faAngleRight} onClick={this.next.bind(this)} />
      </div>

    </div>
  )
}
