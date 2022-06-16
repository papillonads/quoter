import { bindActionCreators } from 'redux'
import { getCurrentIndex, getIndexItems, getRange } from '@papillonads/library/array'
import { getRandomBoolean } from '@papillonads/library/boolean'
import { getRandomInteger } from '@papillonads/library/number'
import { sortDefault, sortObjects } from '@papillonads/library/sort'
import { messageType, pageSize, pageNumber, maxRating } from '../../../library/constant'
import * as actionCreators from '../../action/actionCreators'
import { quotesStaticData } from './quotesStaticData'

export async function getQuotes({ dispatch }) {
  const { contextSetProgressAction } = bindActionCreators(actionCreators, dispatch)

  contextSetProgressAction({
    message: {
      text: 'Collecting quotes...',
      type: messageType.info,
    },
    isLoading: true,
  })

  let quotesResponse
  let quotesResponseData

  try {
    quotesResponse = await window.fetch('https://quotes.stormconsultancy.co.uk/quotes.json')
    quotesResponseData = await quotesResponse.json()
  } catch (err) {
    return quotesStaticData
  } finally {
    contextSetProgressAction({
      message: {
        text: quotesResponseData?.length !== 0 ? 'Successfully collected quotes!' : 'There are no quotes yet!',
        type: quotesResponseData?.length !== 0 ? messageType.success : messageType.warning,
      },
      isLoading: false,
    })
  }

  if (quotesResponseData?.length === 0) {
    return quotesStaticData
  }

  return quotesResponseData
}

export function getRandomQuotes({ quotes }) {
  const randomQuotes = quotes
    .map((quote) =>
      getRandomBoolean()
        ? {
            ...quote,
            rating: getRandomInteger({ max: maxRating }),
          }
        : null,
    )
    .filter((element) => element !== null)

  const quotesObjects = sortObjects({
    sort: {
      index: 3,
      value: 'rating',
      order: 'descending',
    },
    objects: randomQuotes,
  })

  const items = getRange({
    range: Math.ceil(quotesObjects.length / pageSize.quotes),
  }).map((_, index) => ({
    isCurrent: index === pageNumber - 1,
  }))

  const currentPage = {
    indexItems: getIndexItems(items),
    currentIndex: getCurrentIndex(getIndexItems(items)),
    canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
    canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
  }

  const singleRandomQuoteObject = quotesObjects === [] ? '' : quotesObjects[getRandomInteger({ max: quotesObjects.length - 1 })]

  return {
    pagination: {
      pageSize: pageSize.quotes,
      pageNumber,
      currentPage,
    },
    quotesObjects,
    singleRandomQuoteObject: {
      ...singleRandomQuoteObject,
      quote: `“${singleRandomQuoteObject.quote}”`,
    },
    search: {
      quotesObjects: null,
    },
    sort: sortDefault,
  }
}
