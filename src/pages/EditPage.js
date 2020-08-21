import React from 'react'

import AddConstat from "../components/AddConstat"
import EditableConstats from "../components/EditableConstats"

export default function EditPage() {
  return (
    <div className="center-v">
      <AddConstat />
      <EditableConstats />
    </div>
  )
}
