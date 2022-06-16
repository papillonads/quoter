import { getSort, sortObjects } from '@papillonads/library/sort'

export function uiSetListQuotesSort(state, action) {
  const newSort = getSort({ currentSort: state.listQuotes.sort, newSort: action.payload.newSort })

  return {
    ...state,
    listQuotes: {
      ...state.listQuotes,
      quotesObjects: sortObjects({ sort: newSort, objects: state.listQuotes.quotesObjects }),
      search: {
        ...state.listQuotes.search,
        quotesObjects: sortObjects({ sort: newSort, objects: state.listQuotes.search.quotesObjects }),
      },
      sort: newSort,
    },
  }
}
