import React from 'react'

import reading from './images/reading.svg'
import writing from './images/writing.svg'
import photographing from './images/photographing.svg'
import playing from './images/playing.svg'
import drumming from './images/drumming.svg'
import singing from './images/singing.svg'
import painting from './images/painting.svg'
import swimming from './images/swimming.svg'
import lifting from './images/lifting.svg'
import hiking from './images/hiking.svg'
import cooking from './images/cooking.svg'
import fishing from './images/fishing.svg'

import './Hobbies.css'

function Hobbies() {
  const icons = [
    reading,
    writing,
    photographing,
    playing,
    drumming,
    singing,
    painting,
    swimming,
    lifting,
    hiking,
    cooking,
    fishing
  ]

  return (
    <ul className='hobbies'>
      {icons.map((icon) => (
        <li className='hobby' key={icon}>
          <img src={icon} />
        </li>
      ))}
    </ul>
  )
}

export default Hobbies
