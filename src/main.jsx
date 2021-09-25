import React from 'react'
import ReactDOM from 'react-dom'

import App from '@/App'
import { GlobalReset } from '@/assets/styles/reset'
import { GlobalFonts } from '@/assets/styles/fonts'
import { GlobalStyles } from '@/assets/styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalReset />
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
