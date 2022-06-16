import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAppMockStore } from '@papillonads/library/store'
import { withTests } from '@storybook/addon-jest'
import { state } from '../../../../state'
import { AsyncListQuotePage } from '../AsyncListQuotePage'
import { ListQuotePage } from '../ListQuotePage'
import results from '../../../../../../../.jest-test-results.json'

const {
  mock: { appState },
} = state

export default {
  title: 'Quoter/Page/ListQuotePage',
  component: ListQuotePage,
  decorators: [withTests({ results })],
  parameters: { jest: ['ListQuotePage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <AsyncListQuotePage />
      </BrowserRouter>
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(appState)}>
      <BrowserRouter>
        <ListQuotePage />
      </BrowserRouter>
    </Provider>
  )
}
