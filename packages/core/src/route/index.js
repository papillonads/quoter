import { AsyncListQuotePage, ListQuotePage } from '../pattern/page/ListQuotePage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listQuotePagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
}

export const listQuotePageRoute = {
  path: listQuotePagePath,
  clientComponent: AsyncListQuotePage,
  serverComponent: ListQuotePage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
