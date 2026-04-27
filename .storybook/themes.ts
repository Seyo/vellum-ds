import { create } from 'storybook/theming/create'

export const lightTheme = create({
  base: 'light',
  brandTitle: 'Vellum Design System',
  brandUrl: 'https://seyo.github.io/vellum-ds',

  colorPrimary: '#567b92',
  colorSecondary: '#9a7b3a',

  appBg: '#d9d0bc',
  appContentBg: '#e8e0cf',
  appPreviewBg: '#e8e0cf',
  appBorderColor: '#c9bfa6',
  appBorderRadius: 5,

  textColor: '#1b2033',
  textInverseColor: '#e8e0cf',
  textMutedColor: '#4a5370',

  barTextColor: '#4a5370',
  barHoverColor: '#567b92',
  barSelectedColor: '#567b92',
  barBg: '#d9d0bc',

  inputBg: '#e8e0cf',
  inputBorder: '#c9bfa6',
  inputTextColor: '#1b2033',
  inputBorderRadius: 4,

  fontBase: '"EB Garamond", Georgia, serif',
  fontCode: '"IBM Plex Mono", monospace',
})

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'Vellum Design System',
  brandUrl: 'https://seyo.github.io/vellum-ds',

  colorPrimary: '#8cc5df',
  colorSecondary: '#d4b26a',

  appBg: '#1e2739',
  appContentBg: '#171e2b',
  appPreviewBg: '#171e2b',
  appBorderColor: '#2b3448',
  appBorderRadius: 5,

  textColor: '#e4ecf2',
  textInverseColor: '#171e2b',
  textMutedColor: '#92a1b2',

  barTextColor: '#92a1b2',
  barHoverColor: '#8cc5df',
  barSelectedColor: '#8cc5df',
  barBg: '#1e2739',

  inputBg: '#1e2739',
  inputBorder: '#2b3448',
  inputTextColor: '#e4ecf2',
  inputBorderRadius: 4,

  fontBase: '"EB Garamond", Georgia, serif',
  fontCode: '"IBM Plex Mono", monospace',
})
