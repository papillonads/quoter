import { getPagination } from '@papillonads/library/pagination'
import { sortObjects } from '@papillonads/library/sort'
import { getListQuotesObjectsByQuote } from '../get'

export function getListQuotesSearch({ state, action }) {
  const newSearch = {
    quote: action.payload?.quote ?? state.listQuotes.search?.quote,
    quotesObjects:
      !action.payload.quote && !state.listQuotes.search
        ? state.listQuotes.quotesObjects
        : getListQuotesObjectsByQuote({
            objects: state.listQuotes.quotesObjects,
            quote: action.payload?.quote,
          }),
  }

  return newSearch
}

export function uiSetListQuotesSearch(state, action) {
  const newSearch = getListQuotesSearch({ state, action })

  const newPagination = getPagination({
    searchObjects: newSearch.quotesObjects,
    regularObjects: state.listQuotes.quotesObjects,
    pagination: state.listQuotes.pagination,
  })

  return {
    ...state,
    listQuotes: {
      ...state.listQuotes,
      quotesObjects: sortObjects({ sort: state.listQuotes.sort, objects: state.listQuotes.quotesObjects }),
      pagination: newPagination,
      search: {
        ...newSearch,
        quotesObjects: sortObjects({ sort: state.listQuotes.sort, objects: newSearch.quotesObjects }),
      },
    },
  }
}
