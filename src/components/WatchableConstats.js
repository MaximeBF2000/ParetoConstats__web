import React, { useContext } from 'react'
import { AppContext } from "../index"

import WatchableConstat from "./WatchableConstat"

export default function WatchableConstats() {
  const { constats } = useContext(AppContext)

  return (
    <div className="watchable_constats">
      {
        constats.map((constat, i) => (
          <WatchableConstat key={i} constat={constat} />
        ))
      }
    </div>
  )
}
