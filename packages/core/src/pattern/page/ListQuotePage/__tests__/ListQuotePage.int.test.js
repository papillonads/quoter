import { async, regular } from './ListQuotePage.int.story'

describe('<ListQuotePage />', () => {
  describe('Render', () => {
    test('must match async()', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular()', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
