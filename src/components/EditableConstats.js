import React, { useContext } from 'react'
import { AppContext } from "../index"

import EditableConstat from "./EditableConstat"

export default function EditableConstats() {
  const { constats } = useContext(AppContext)

  return (
    <div className="editable_constats">
      {
        constats.map((constat, i) => (
          <EditableConstat key={i} constat={constat} />
        ))
      }
    </div>
  )
}
