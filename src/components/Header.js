import React, { useState } from 'react'

export default function Header() {
  const [showDescription, setShowDescription] = useState(false)

  const switchDescription = () => setShowDescription(ps => !ps)

  const descriptionStyle = {
    invisible: {
      height: 0,
      opacity: 0,
      pointerEvents: "none"
    },
    visible: {
      height: "unset",
      opacity: 1
    }
  }

  return (
    <header>
      <h1 onClick={switchDescription}>Pareto's Constats</h1>
      <p style={showDescription ? descriptionStyle.visible : descriptionStyle.invisible}>
        Pareto's Law came from the constat that 80% of the outcome are coming from 20% of the input.
        It is the most know law of productivity. You can make constats of activities in your life and compare the time spent, the money spent, the emotionnal involvment... Find what's bringing you the most postitive value with the least take away.
      </p>
    </header>
  )
}
