import actions from "./actionTypes"

export default (state, action) => {
  const { type, payload } = action

  switch(type){
    case actions.ADD_CONSTAT:
      return { ...state, constats: [...state.constats, payload] }
    case actions.UPDATE_CONSTATS:
      return { ...state, constats: payload }
    default:
      return state
  }
}