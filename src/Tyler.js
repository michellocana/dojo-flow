import React from 'react'
import { Text } from 'spectacle'

import FullscreenMedia from './FullscreenMedia'

import igor from './videos/igor.mp4'

import './Tyler.css'
import Title from './Title'

function Tyler() {
  return (
    <div className='tyler'>
      <FullscreenMedia type='video' src={igor} plainTitle background={false}>
        <blockquote className='quote'>
          And i was like "oh shit, this... <strong>FLOWS</strong>", and i was subconscious, i didnt even notice i was
          drawing a circle, it was all feeling, it was great.
          <span className='author'>
            <strong>Tyler, The Creator</strong>, vencedor do grammy de melhor álbum de rap do ano (2020)
          </span>
        </blockquote>
      </FullscreenMedia>
    </div>
  )
}

export default Tyler
