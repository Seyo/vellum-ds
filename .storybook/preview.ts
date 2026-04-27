import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/styles/globals.css'
import { lightTheme, darkTheme } from './themes'

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      current: 'light',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
    },
    backgrounds: { disable: true },
    layout: 'centered',
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
