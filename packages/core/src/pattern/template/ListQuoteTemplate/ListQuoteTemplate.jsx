import { primer } from '@papillonads/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './ListQuoteTemplate.prop'
import { useListQuoteState } from './ListQuoteTemplate.hook'
import {
  container,
  alert,
  content,
  contentDisplay,
  contentDisplaySearch,
  contentDisplaySearchPart,
  contentDisplaySearchPartField,
  contentDisplaySearchPartFieldInput,
  contentDisplaySearchPartFieldLabel,
  contentDisplayGridListQuotes,
  contentDisplayPagination,
} from './ListQuoteTemplate.scss'

export function ListQuoteTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Label,
    Pagination: { PreviousNext, previousNextState },
  } = primer

  const {
    alertTextListQuotes,
    pageContent: {
      listQuote: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomQuotesObjectsNamesValues,
    singleRandomQuoteObject,
    searchQuoteOnChange,
    searchQuoteOnKeyUp,
    searchQuoteOnFocus,
    searchQuoteOnBlur,
    paginationOnClick,
    quotesObjectsFlexGridOnChange,
    quotesObjectsFlexGridOnClick,
  } = useListQuoteState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <Alert className={alert} variant={alertVariant.info}>
        {singleRandomQuoteObject?.quote ?? ''}
      </Alert>
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplaySearch}>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Label className={contentDisplaySearchPartFieldLabel} text="Keyword:" />
                <Input
                  id="T"
                  value={search.quote || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type quote and press Enter to search. Press ESC to clear."
                  ariaAttr={{ label: 'Type in quote' }}
                  onChange={searchQuoteOnChange}
                  onKeyUp={searchQuoteOnKeyUp}
                  onFocus={searchQuoteOnFocus}
                  onBlur={searchQuoteOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
          </div>
          {paginatedRandomQuotesObjectsNamesValues?.length === 0 && (
            <Alert className={alert} variant={alertVariant.warning}>
              {alertTextListQuotes.display.noQuotes}
            </Alert>
          )}
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridListQuotes}
            items={paginatedRandomQuotesObjectsNamesValues}
            idIndex={0}
            isSelectedIndex={1}
            selection={flexGridSelection.checkbox}
            sort={sort || {}}
            onChange={quotesObjectsFlexGridOnChange}
            onClick={quotesObjectsFlexGridOnClick}
            onDoubleClick={() => {}}
            state={progress.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

ListQuoteTemplate.defaultProps = defaultProps

ListQuoteTemplate.propTypes = propTypes
