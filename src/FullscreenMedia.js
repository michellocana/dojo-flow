import React from 'react'
import PropTypes from 'prop-types'

import './FullscreenMedia.css'

function FullscreenMedia({ type, src, children }) {
  return (
    <div className='fullscreen-media'>
      {type === 'image' ? (
        <img src={src} />
      ) : (
        <video autoPlay muted playsInline>
          <source src={src} type='video/mp4' />
        </video>
      )}

      {children}
    </div>
  )
}

FullscreenMedia.propTypes = {
  type: PropTypes.oneOf(['image', 'video']).isRequired,
  src: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default FullscreenMedia
