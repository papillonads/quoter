import { Link } from 'react-router-dom'
import { pageContent } from '../../../library/constant'

import { listQuotePagePath } from '../../../route/path'

export const navigation = {
  ariaAttr: {
    label: pageContent.listQuote.contextNavigationItemText,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: listQuotePagePath } },
        children: pageContent.listQuote.contextNavigationItemText,
      },
      isSelected: true,
      enabled: true,
      visible: true,
    },
  ],
}
