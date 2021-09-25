import { Route } from 'wouter'

import Home from '@/pages/Home'
import PasswordValidator from '@/pages/stuff/PasswordValidator'

const App = () => {
  return (
    <>
      <Route path='/'><Home /></Route>
      <Route path='/password-validator'><PasswordValidator /></Route>
    </>
  )
}

export default App
