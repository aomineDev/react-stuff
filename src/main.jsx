import React from 'react'
import ReactDOM from 'react-dom'
import { HeadProvider } from 'react-head'

import App from '@/App'
import { GlobalReset } from '@/assets/styles/reset'
import { GlobalFonts } from '@/assets/styles/fonts'
import { GlobalStyles } from '@/assets/styles'

ReactDOM.render(
  <React.StrictMode>
    <HeadProvider>
      <GlobalReset />
      <GlobalFonts />
      <GlobalStyles />
      <App />
    </HeadProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
