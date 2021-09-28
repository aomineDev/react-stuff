import { createGlobalStyle } from 'styled-components'

import Nunito from '../fonts/Nunito.ttf'
import Poppins from '../fonts/Poppins.ttf'
import Luna from '../fonts/Luna.ttf'
import Caveat from '../fonts/Caveat.ttf'

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

  @font-face {
    font-family: 'Luna';
    src: url(${Luna});
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Caveat';
    src: url(${Caveat});
    font-style: normal;
    font-weight: 400;
  }
`
