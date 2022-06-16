import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonads/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { ListQuoteTemplate } from '../index'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Quoter/Template/ListQuoteTemplate',
  component: ListQuoteTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['ListQuoteTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <ListQuoteTemplate />
      </BrowserRouter>
    </Provider>
  )
}
