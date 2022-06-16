const rootPath = '/'
const listQuotePath = '/list'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const listQuotePagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${listQuotePath}` : listQuotePath

export const startPagePath = listQuotePagePath
