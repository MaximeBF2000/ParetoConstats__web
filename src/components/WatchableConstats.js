import React, { useContext } from 'react'
import useFirestore from "../helpers/useFirestore"

import WatchableConstat from "./WatchableConstat"

export default function WatchableConstats() {
  const { docs } = useFirestore("constats")

  return (
    <div className="watchable_constats">
      {
        docs.map((doc, i) => (
          <WatchableConstat key={i} doc={doc} />
        ))
      }
    </div>
  )
}
