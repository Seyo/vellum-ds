import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/globals.css'
import { lightTheme } from './themes'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
    docs: {
      theme: lightTheme,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
