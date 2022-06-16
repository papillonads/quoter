import * as types from '../actionTypes'

describe('actionTypes', () => {
  test('must return all action types', () => {
    expect(types).toHaveProperty('CONTEXT_SET_NAVIGATION')
    expect(types).toHaveProperty('CONTEXT_SET_PROGRESS')
    expect(types).toHaveProperty('UI_SELECT_LIST_QUOTES')
    expect(types).toHaveProperty('UI_SET_LIST_QUOTES_SORT')
    expect(types).toHaveProperty('UI_SET_LIST_QUOTES_SEARCH')
    expect(types).toHaveProperty('UI_SET_LIST_QUOTES_PAGINATION')
    expect(types).toHaveProperty('UI_SET_LIST_QUOTES')
  })
})
