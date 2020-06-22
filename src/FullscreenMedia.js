import React from 'react'
import PropTypes from 'prop-types'

import Title from './Title'

import './FullscreenMedia.css'

function FullscreenMedia({ type, src, children, inverted = false }) {
  function renderMedia() {
    return (
      <div className='mediaWrapper'>
        <div className='media'>
          {type === 'image' ? (
            <img src={src} />
          ) : (
            <video autoPlay muted playsInline loop>
              <source src={src} type='video/mp4' />
            </video>
          )}
        </div>

        <div className='mediaBackground'>
          {type === 'image' ? (
            <img src={src} />
          ) : (
            <video autoPlay muted playsInline loop>
              <source src={src} type='video/mp4' />
            </video>
          )}
        </div>
      </div>
    )
  }

  function renderTitle() {
    return (
      <div className='titleWrapper'>
        <Title center={false}>{children}</Title>
      </div>
    )
  }

  return (
    <div className='fullscreenMedia'>
      {inverted ? renderTitle() : renderMedia()}
      {inverted ? renderMedia() : renderTitle()}
    </div>
  )
}

FullscreenMedia.propTypes = {
  type: PropTypes.oneOf(['image', 'video']).isRequired,
  src: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  inverted: PropTypes.bool
}

export default FullscreenMedia
