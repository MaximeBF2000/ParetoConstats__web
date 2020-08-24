import React from 'react'
import useFirestore from "../helpers/useFirestore"

import EditableConstat from "./EditableConstat"

export default function EditableConstats() {
  const { docs } = useFirestore("constats")

  return (
    <div className="editable_constats">
      {
        docs.map((doc, i) => (
          <EditableConstat key={i} doc={doc} />
        ))
      }
    </div>
  )
}
