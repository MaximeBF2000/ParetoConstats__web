import React from 'react'
import { Link } from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav_link">
        <Link to="/"> Watch <VisibilityIcon /> </Link>
      </div>
      <div className="nav_link">
        <Link to="/edit"> Edit <EditIcon /> </Link>
      </div>
    </nav>
  )
}
