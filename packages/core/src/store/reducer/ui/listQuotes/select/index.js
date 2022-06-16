import { selectQuotesObjects } from './quotesObjects'
import { getListQuotesSearch } from '../get'

export function uiSelectListQuotes(state, action) {
  const newQuotesObjects = selectQuotesObjects({
    quotesObjects: state.listQuotes.quotesObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearchQuotesObjects = selectQuotesObjects({
    quotesObjects: state.listQuotes.search.quotesObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearch = getListQuotesSearch({ search: state.listQuotes.search, newSearchQuotesObjects })

  return {
    ...state,
    listQuotes: {
      ...state.listQuotes,
      quotesObjects: newQuotesObjects,
      search: {
        ...newSearch,
        quotesObjects: newSearch.quotesObjects,
      },
    },
  }
}
