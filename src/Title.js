import React from 'react'
import { Text } from 'spectacle'

import './Title.css'

function Title({ children, center = true, verticalCenter = false, className = '', fontSize = 64, ...otherProps }) {
  return (
    <Text
      fontWeight='normal'
      className={`title ${className} ${center ? 'titleCenter' : ''} ${verticalCenter ? 'titleVerticalCenter' : ''}`}
      fontSize={fontSize}
      {...otherProps}
    >
      {children.split('\n').map((line) => (
        <span key={line}>{line}</span>
      ))}
    </Text>
  )
}

export default Title
