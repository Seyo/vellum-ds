import React, { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react'
import '../src/styles/globals.css'
import { lightTheme } from './themes'

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals['theme'] as string) ?? 'light'

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [theme])

  return <Story />
}

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    layout: 'centered',
    docs: {
      theme: lightTheme,
    },
  },
  decorators: [withTheme],
}

export default preview
