import React from 'react'
import './Main.css'
import { animals } from '../../data.js'
import Animal from '../Animal/Animal.js'

import background from '../../../src/background.png'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.type} {...animal} />
      ))}
    </main>
  )
}
