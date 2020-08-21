import React, { useState, useContext } from 'react'
import { AppContext } from "../index"
import UpSmallPopup from "./UpSmallPopup"
import actions from "../contexts/actionTypes"
import AddIcon from '@material-ui/icons/Add'
import { v4 as uuid } from "uuid"

export default function AddConstat() {
  const [title, setTitle] = useState("")
  const [inputName, setInputName] = useState("")
  const [outputName, setOutputName] = useState("")
  const [inputNumber, setInputNumber] = useState(80)
  const [outputNumber, setOutputNumber] = useState(20)

  const [showRange, setShowRange] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showWarningPopup, setShowWarningPopup] = useState(false)

  const { dispatch } = useContext(AppContext)

  const popupSwitch = setValue => {
    setValue(true)
    setTimeout(() => setValue(false), 2000)
  }

  const addConstat = () => {
    if(title && inputName && outputName) {
      const formState = { id: uuid(), title, inputName, inputNumber, outputName, outputNumber }
      dispatch({ type: actions.ADD_CONSTAT, payload: formState })
      setTitle("")
      setInputName("")
      setOutputName("")
      setInputNumber(80)
      setOutputNumber(20)
      popupSwitch(setShowSuccessPopup)
    } else {
      popupSwitch(setShowWarningPopup)
    }
  }

  const handleChange = (e, setValue) => setValue(e.target.value)

  const handleRangeChange = (e, setValue, setOtherValue) => {
    setValue(parseInt(e.target.value))
    setOtherValue(100 - e.target.value)
  }

  return (
    <>
      {showWarningPopup && <UpSmallPopup text="Please fill the form ❌" type="warning" />}
      {showSuccessPopup && <UpSmallPopup text="Form sent successfully 🚀" />}
      <form className="addConstat" onSubmit={e => e.preventDefault()}>
        <label> Add a new constat 👇 </label>
        <div className="row">
          <div className="options">
            <input className="title" type="text" placeholder="Title of your constat" value={title} onChange={e => handleChange(e, setTitle)} />

            <div className="numbers">

              <div className="row numberOption">
                <input type="text" placeholder="Input / Output" value={inputName} onChange={e => handleChange(e, setInputName)} />
                <button className="numberChoiceBtn" onClick={() => setShowRange(ps => !ps)} > {inputNumber} </button>
                {
                  showRange && 
                  <div className="rangeSelector">
                    <input type="range" min="0" max="100" value={inputNumber} onChange={e => handleRangeChange(e, setInputNumber, setOutputNumber)} />
                  </div>
                }
              </div>

              <div className="row numberOption">
                <input type="text" placeholder="Input / Output" value={outputName} onChange={e => handleChange(e, setOutputName)} />
                <button className="numberChoiceBtn" onClick={() => setShowRange(ps => !ps)} > {outputNumber} </button>
                {
                  showRange && 
                  <div className="rangeSelector">
                    <input type="range" min="0" max="100" value={outputNumber} onChange={e => handleRangeChange(e, setOutputNumber, setInputNumber)} />
                  </div>
                }
              </div>

            </div>
          </div>
        </div>
        <div className="center-v">
          <button type="submit" onClick={addConstat}> <AddIcon /> </button>
        </div>
      </form>
    </>
  )
}
