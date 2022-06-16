export function getListQuotesObjectsByQuote({ objects, quote }) {
  if (!quote) {
    return objects
  }

  let objectsByQuote = []

  objectsByQuote = [...objectsByQuote, ...objects.filter((filterObject) => filterObject.quote.toLowerCase().includes(quote.toLowerCase()))]

  return objectsByQuote.filter((item, position) => objectsByQuote.indexOf(item) === position)
}

export function getListQuotesSearch({ search, newSearchQuotesObjects }) {
  const newSearch = {
    quote: search?.quote,
    quotesObjects: getListQuotesObjectsByQuote({
      objects: newSearchQuotesObjects,
      quote: search?.quote,
    }),
  }

  return newSearch
}
