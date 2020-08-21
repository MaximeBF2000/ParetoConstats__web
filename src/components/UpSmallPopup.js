import React from 'react'
import { motion } from "framer-motion"
import ReactDOM from "react-dom"

export default function UpSmallPopup({ text, type }) {
  return ReactDOM.createPortal(
    <motion.div 
      className={`upSmallPopup ${type}`}
      initial={{ scale: 0, opacity: 0, x: "-50%" }}
      animate={{ scale: 1, opacity: 1, x: "-50%" }}
    >
      {text}
    </motion.div>,
    document.querySelector("#portal")
  )
}
