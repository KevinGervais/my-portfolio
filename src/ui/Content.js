import React from 'react'
import Schools from './Schools'
import Post from './Post'
import Logos from './Logos'
export default class Content extends React.Component {
  render () {
    return (
      <div>
        <div className='content'>
          <Schools {...this.props.global.say.schools} />
          <Logos title={this.props.global.say.logosTitle} />
          <Post
            {...this.props}
            {...this.props.global.say.rentMaya}
            date='2018 - ...'
            toolList={['React', 'NodeJs', 'MongoDb', 'MeteorJs', 'React-router']}
            buttonList={[
              { type: 'gitHub', link: 'https://github.com/KevinGervais/Calendar' },
              { type: 'website', link: 'https://rentmaya.herokuapp.com' }
            ]}
            image='rentMaya'
            imageList={['rentMaya1', 'rentMaya2', 'rentMaya3']}
            imageType='inline'
          />
          <Post
            {...this.props}
            {...this.props.global.say.salsabil}
            image='salsabil'
            date='2016 - ...'
            toolList={['React', 'NodeJs', 'MongoDb', 'Socket.io', 'React-router', 'Affinity']}
            buttonList={[
              { type: 'gitHub', link: 'https://github.com/KevinGervais/Salsabil' }
            ]}
            imageList={['salsabil1', 'salsabil2', 'salsabil3', 'salsabil4', 'salsabil5']}
          />
          <Post
            {...this.props}
            {...this.props.global.say.bell}
            date='2018'
            image='bell'
            toolList={['React', 'NodeJs', 'MongoDb', 'Express', 'React-Bootstrap']}
          />

          <Post
            {...this.props}
            {...this.props.global.say.caravana}
            subTitle='Caravana.ca'
            image='caravana'
            date='2018'
            toolList={['Affinity']}
            imageList={['caravana1', 'caravana2', 'caravana3', 'caravana4', 'caravana5']}
          />
          <Post
            {...this.props}
            {...this.props.global.say.tasmim}
            subTitle='tasmim.ca'
            date='2017'
            toolList={['Affinity', 'JQuery', 'Wordpress']}
          />

        </div>
      </div>
    )
  }
}
