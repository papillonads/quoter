import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SELECT_LIST_QUOTES,
  UI_SET_LIST_QUOTES_SORT,
  UI_SET_LIST_QUOTES_SEARCH,
  UI_SET_LIST_QUOTES_PAGINATION,
  UI_SET_LIST_QUOTES,
} from './actionTypes'

export const contextSetNavigationAction = (payload) => ({ type: CONTEXT_SET_NAVIGATION, payload })
export const contextSetProgressAction = (payload) => ({ type: CONTEXT_SET_PROGRESS, payload })
export const uiSelectListQuotesAction = (payload) => ({ type: UI_SELECT_LIST_QUOTES, payload })
export const uiSetListQuotesSortAction = (payload) => ({ type: UI_SET_LIST_QUOTES_SORT, payload })
export const uiSetListQuotesSearchAction = (payload) => ({ type: UI_SET_LIST_QUOTES_SEARCH, payload })
export const uiSetListQuotesPaginationAction = (payload) => ({ type: UI_SET_LIST_QUOTES_PAGINATION, payload })
export const uiSetListQuotesAction = (payload) => ({ type: UI_SET_LIST_QUOTES, payload })
