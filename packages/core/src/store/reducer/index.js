import { combineReducers } from 'redux'
import {
  CONTEXT_SET_NAVIGATION,
  CONTEXT_SET_PROGRESS,
  UI_SELECT_LIST_QUOTES,
  UI_SET_LIST_QUOTES_SORT,
  UI_SET_LIST_QUOTES_SEARCH,
  UI_SET_LIST_QUOTES_PAGINATION,
  UI_SET_LIST_QUOTES,
} from '../action/actionTypes'

import { contextSetNavigation } from './context/navigation/set'
import { contextSetProgress } from './context/progress/set'

import { uiSelectListQuotes } from './ui/listQuotes/select'
import { uiSetListQuotesSort } from './ui/listQuotes/sort'
import { uiSetListQuotesSearch } from './ui/listQuotes/search'
import { uiSetListQuotesPagination } from './ui/listQuotes/pagination'
import { uiSetListQuotes } from './ui/listQuotes/set'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        case CONTEXT_SET_NAVIGATION:
          return contextSetNavigation(state, action)
        case CONTEXT_SET_PROGRESS:
          return contextSetProgress(state, action)
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        case UI_SELECT_LIST_QUOTES:
          return uiSelectListQuotes(state, action)
        case UI_SET_LIST_QUOTES_SORT:
          return uiSetListQuotesSort(state, action)
        case UI_SET_LIST_QUOTES_SEARCH:
          return uiSetListQuotesSearch(state, action)
        case UI_SET_LIST_QUOTES_PAGINATION:
          return uiSetListQuotesPagination(state, action)
        case UI_SET_LIST_QUOTES:
          return uiSetListQuotes(state, action)
        default:
          return state
      }
    },
  })
