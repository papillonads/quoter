import { useSelector } from 'react-redux'
import { paginate } from '@papillonads/library/pagination'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, messageType, pageContent } from '../../../library/constant'
import { alertTextListQuotes } from '../../../library/constant/alertText/listQuotes'

export function useListQuoteState() {
  const {
    uiSelectListQuotesAction,
    uiSetListQuotesSortAction,
    uiSetListQuotesSearchAction,
    uiSetListQuotesPaginationAction,
    contextSetProgressRegularThunk,
  } = useBindActionCreators()

  const progress = useSelector(({ context }) => context.progress)

  const {
    quotesObjects,
    singleRandomQuoteObject,
    pagination: { pageSize, pageNumber, currentPage },
    sort,
    search,
  } = useSelector(({ ui }) => ui.listQuotes)

  const paginatedRandomQuotesObjects = paginate({
    array: search.quotesObjects || quotesObjects,
    pageSize,
    pageNumber,
  })

  const paginatedRandomQuotesObjectsNamesValues = paginatedRandomQuotesObjects.map((quotesObject) =>
    (({ id, isSelected, author, quote, permalink, rating, ...rest }) => ({
      names: Object.keys({
        id,
        isSelected,
        quote,
        rating,
        ...rest,
      }),
      values: Object.values({
        id,
        isSelected,
        quote,
        rating,
        ...rest,
      }),
    }))(quotesObject),
  )

  /* istanbul ignore next */
  function searchQuoteOnChange(event) {
    uiSetListQuotesSearchAction({
      quote: event.target.value,
    })
  }

  /* istanbul ignore next */
  function searchQuoteOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetListQuotesSearchAction({
        quote: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetListQuotesSearchAction({
        quote: null,
      })
      return
    }

    uiSetListQuotesSearchAction({
      quote: search.quote,
    })
  }

  /* istanbul ignore next */
  function searchQuoteOnFocus() {
    uiSetListQuotesSearchAction({
      quote: search.quote,
    })
  }

  /* istanbul ignore next */
  function searchQuoteOnBlur() {}

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetListQuotesPaginationAction({ paginationAction })
    contextSetProgressRegularThunk({ message: { text: alertTextListQuotes.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function quotesObjectsFlexGridOnChange(changedObjects) {
    uiSelectListQuotesAction({ changedObjects })
  }

  /* !!! istanbul ignore next  !!! */
  function quotesObjectsFlexGridOnClick(newSort) {
    uiSetListQuotesSortAction({ newSort })
  }

  return {
    alertTextListQuotes,
    pageContent,
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomQuotesObjectsNamesValues,
    singleRandomQuoteObject,
    searchQuoteOnChange,
    searchQuoteOnKeyUp,
    searchQuoteOnFocus,
    searchQuoteOnBlur,
    paginationOnClick,
    quotesObjectsFlexGridOnChange,
    quotesObjectsFlexGridOnClick,
  }
}
