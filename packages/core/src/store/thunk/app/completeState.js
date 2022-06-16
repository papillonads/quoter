import { bindActionCreators } from 'redux'
import * as actionCreators from '../../action/actionCreators'
import { appState } from '../../../state/default'
import { getQuotes, getRandomQuotes } from './index'
import { timeout, messageType } from '../../../library/constant'
import { alertTextApp } from '../../../library/constant/alertText/app'
import { alertTextListQuotes } from '../../../library/constant/alertText/listQuotes'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const { contextSetNavigationAction, contextSetProgressAction, uiSetListQuotesAction } = bindActionCreators(actionCreators, dispatch)

  contextSetProgressAction({
    message: {
      text: alertTextListQuotes.action.set.progress,
      type: messageType.info,
    },
    isLoading: true,
  })

  const getQuotesResponseData = await getQuotes({ dispatch })

  uiSetListQuotesAction(getRandomQuotes({ quotes: getQuotesResponseData }))

  contextSetNavigationAction(appState.context.navigation)

  contextSetProgressAction({
    message: {
      text: alertTextListQuotes.action.set.success,
      type: messageType.success,
    },
    isLoading: false,
  })

  setTimeout(() => {
    contextSetProgressAction({
      message: {
        text: alertTextApp.ready,
        type: messageType.success,
      },
      isLoading: false,
    })
  }, timeout.fetch)
}
