import { createGlobalStyle } from 'styled-components'

import Nunito from '../fonts/Nunito.ttf'
import Poppins from '../fonts/Poppins.ttf'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: url(${Nunito});
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins});
    font-style: normal;
    font-weight: 400;
  }
`
