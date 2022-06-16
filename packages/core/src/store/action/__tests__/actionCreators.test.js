import {
  contextSetNavigationAction,
  contextSetProgressAction,
  uiSelectListQuotesAction,
  uiSetListQuotesSortAction,
  uiSetListQuotesSearchAction,
  uiSetListQuotesPaginationAction,
  uiSetListQuotesAction,
} from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'fantastic-payload' }

  describe('context', () => {
    describe('navigation', () => {
      describe('contextSetNavigationAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetNavigationAction(payload)).toMatchObject({ type: 'CONTEXT_SET_NAVIGATION', payload })
        })
      })
    })

    describe('progress', () => {
      describe('contextSetProgressAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetProgressAction(payload)).toMatchObject({ type: 'CONTEXT_SET_PROGRESS', payload })
        })
      })
    })
  })

  describe('ui', () => {
    describe('listQuotes', () => {
      describe('uiSelectListQuotesAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSelectListQuotesAction(payload)).toMatchObject({ type: 'UI_SELECT_LIST_QUOTES', payload })
        })
      })

      describe('uiSetListQuotesSortAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListQuotesSortAction(payload)).toMatchObject({ type: 'UI_SET_LIST_QUOTES_SORT', payload })
        })
      })

      describe('uiSetListQuotesSearchAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListQuotesSearchAction(payload)).toMatchObject({ type: 'UI_SET_LIST_QUOTES_SEARCH', payload })
        })
      })

      describe('uiSetListQuotesPaginationAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListQuotesPaginationAction(payload)).toMatchObject({ type: 'UI_SET_LIST_QUOTES_PAGINATION', payload })
        })
      })

      describe('uiSetListQuotesAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListQuotesAction(payload)).toMatchObject({ type: 'UI_SET_LIST_QUOTES', payload })
        })
      })
    })
  })
})
