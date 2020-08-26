import React, { useContext } from 'react'
import useFirestore from "../helpers/useFirestore"

import WatchableConstat from "./WatchableConstat"

export default function WatchableConstats() {
  const { docs } = useFirestore("constats")

  return (
    <div className="watchable_constats">
      {
        docs.map(doc => (
          <WatchableConstat key={doc.id} doc={doc} />
        ))
      }
    </div>
  )
}
