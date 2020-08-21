import React, { createContext, useReducer } from "react"
import ReactDOM from "react-dom"
import AppReducer from "./contexts/AppReducer"
import initialState from "./contexts/inititalState"
import App from "./App"

export const AppContext = createContext(initialState)

const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{
      ...state,
      dispatch
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

ReactDOM.render((
  <AppProvider>
    <App />
  </AppProvider>
), document.getElementById("root"))