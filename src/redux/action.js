export const ActionTypes = {
  SET_ACCOUNT_ID: 'SET_ACCOUNT_ID',
  SET_QUESTION_COUNT: 'SET_QUESTION_COUNT',
  RESET: 'RESET'
}

export const setAccountId = id => {
  return {
    type: ActionTypes.SET_ACCOUNT_ID,
    payload: id
  }
}

export const setQuestionCount = id => {
  return {
    type: ActionTypes.SET_QUESTION_COUNT,
    payload: id
  }
}
export const reset = () => {
  return {
    type: ActionTypes.RESET
  }
}
