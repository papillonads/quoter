export function uiSetListQuotes(state, action) {
  return {
    ...state,
    listQuotes: action.payload,
  }
}
