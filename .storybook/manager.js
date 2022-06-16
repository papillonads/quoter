import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { version } from '../lerna.json'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: `Quoter v${version}`,
    brandUrl: 'https://github.com/papillonads/quoter',
    brandImage: 'https://avatars2.githubusercontent.com/u/47340326',
  }),
})
