import { initialState } from './store'
import { ActionTypes } from './action'

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACCOUNT_ID:
      return {
        ...state,
        accountId: action.payload
      }

    case ActionTypes.SET_ACCOUNT_NAME:
      return {
        ...state,
        accountName: action.payload
      }

    case ActionTypes.SET_QUESTION_COUNT:
      return {
        ...state,
        questionCount: action.payload
      }

    case ActionTypes.RESET:
      return {
        ...initialState
      }

    default:
      return state
  }
}
