import { regular } from './ListQuoteTemplate.int.story'

describe('<ListQuoteTemplate />', () => {
  describe('Render', () => {
    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
