export const ActionTypes = {
  SET_ACCOUNT_ID: 'SET_HERO_LIMIT',
  RESET: 'RESET'
}

export const setAccountId = id => {
  return {
    type: ActionTypes.SET_ACCOUNT_ID,
    payload: id
  }
}

export const reset = () => {
  return {
    type: ActionTypes.RESET
  }
}
