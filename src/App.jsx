import { Route } from 'wouter'

import Home from '@/pages/Home'
import PasswordValidator from '@/pages/stuff/PasswordValidator'
import SortableList from '@/pages/stuff/SortableList'
import FloatingButton from '@/pages/stuff/FloatingButton'

const App = () => {
  return (
    <>
      <Route path='/'><Home /></Route>
      <Route path='/password-validator'><PasswordValidator /></Route>
      <Route path='/sortable-list'><SortableList /></Route>
      <Route path='/floating-button'><FloatingButton /></Route>
    </>
  )
}

export default App
