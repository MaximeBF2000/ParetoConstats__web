import React, { useState, useContext } from 'react'
import { AppContext } from "../index"
import actions from "../contexts/actionTypes"
import { firestore } from "../helpers/firebase"
import UpSmallPopup from "./UpSmallPopup"
import DeleteIcon from '@material-ui/icons/Delete'

export default function EditableConstat({ doc }) {
  const id = doc.id
  const { title, inputName, inputNumber, outputName, outputNumber } = doc.data()

  const [showUpdatePopup, setShowUpdatePopup] = useState(false)
  const [showUpdateWarning, setShowUpdateWarning] = useState(false)
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const [showEditRange, setShowEditRange] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [inName, setInName] = useState(inputName)
  const [outName, setOutName] = useState(outputName)
  const [inVal, setInVal] = useState(inputNumber)
  const [outVal, setOutVal] = useState(outputNumber)

  const toggleRange = () => setShowEditRange(previousState => !previousState)

  const handleChange = (e, setValue) => setValue(e.target.value)

  const handleRangeChange = (e, setValue, setOtherValue) => {
    setValue(parseInt(e.target.value))
    setOtherValue(100 - e.target.value)
  }

  const popupSwitch = (setValue) => {
    setValue(ps => !ps)
    setTimeout(() => setValue(ps => !ps), 2000)
  }

  const updateConstat = () => {
    if(editTitle && inName && outName) {
      const newConstat = { title: editTitle , inputName: inName, inputNumber: inVal, outputName: outName, outputNumber: outVal }
      firestore.collection("constats").doc(id).update(newConstat).then(() => {
        setEditTitle(title)
        setInName(inputName)
        setInVal(inputNumber)
        setOutName(outputName)
        setOutVal(outputNumber)
      })
      popupSwitch(setShowUpdatePopup)
    } else {
      popupSwitch(setShowUpdateWarning)
    }
  }

  const deleteConstat = () => {
    firestore.collection("constats").doc(id).delete()
    popupSwitch(setShowDeletePopup)
  }

  return (
    <>
      {showUpdatePopup && <UpSmallPopup text="Constat updated 👍" />}
      {showUpdateWarning && <UpSmallPopup text="Form cannot have empty fields ❌" type="warning" />}
      {showDeletePopup && <UpSmallPopup text="Constat has been deleted 👍" type="danger" />}
      <form className="editable_constat" onSubmit={e => e.preventDefault()}>
        <input type="text" className="title" value={editTitle} onChange={e => handleChange(e, setEditTitle)} />
        <div className="row numberRow">
          <input type="text" className="name" value={inName} onChange={e => handleChange(e, setInName)} />
          <button className="numberBtn" onClick={toggleRange}>{ inVal }</button>
          {
            showEditRange &&
            <div className="rangeSelector">
              <input type="range" value={inVal} onChange={e => handleRangeChange(e, setInVal, setOutVal)} />
            </div>
          }
        </div>
        <div className="row numberRow">
          <input type="text" className="name" value={outName} onChange={e => handleChange(e, setOutName)} />
          <button className="numberBtn" onClick={toggleRange}>{ outVal }</button>
          {
            showEditRange &&
            <div className="rangeSelector">
              <input type="range" value={outVal} onChange={e => handleRangeChange(e, setOutVal, setInVal)} />
            </div>
          }
        </div>
        <div className="row">
          <button className="updateBtn" onClick={updateConstat}>Update</button>
          <button className="deleteBtn" onClick={deleteConstat} > <DeleteIcon /> </button>
        </div>
      </form>
    </>
  )
}
