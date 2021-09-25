import { useState } from 'react'

import GoHome from '@/components/GoHome'
import Fill from './Fill'

import { Wrapper, Form, Message, Input, Button, Spin, Icon } from './styles'

const ANIMATION_TIME = 350
const SPIN_TIME = 520
const WAIT_TIME = 2000 + SPIN_TIME
const FINISH_TIME = WAIT_TIME + ANIMATION_TIME

function App () {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const isValid = password === 'devpass'

  function handleChange (e) {
    setPassword(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      setIsComplete(true)
    }, SPIN_TIME)

    setTimeout(() => {
      setPassword('')
      setIsComplete(false)
    }, WAIT_TIME)

    setTimeout(() => {
      setIsLoading(false)
    }, FINISH_TIME)
  }

  return (
    <Wrapper>
      <GoHome top left />
      <Form onSubmit={handleSubmit}>
        <Message isComplete={isComplete}>
          {
          !isComplete
            ? ''
            : isValid
              ? 'Welcome!'
              : 'try Again!'
        }
        </Message>
        <Input
          type='password'
          placeholder='Password'
          onChange={handleChange}
          value={password}
        />
        <Button>
          <Fill isComplete={isComplete} isValid={isValid} />
          {isLoading || isComplete
            ? (
              <Spin>
                <Icon><i className='fas fa-times' /></Icon>
              </Spin>
              )
            : null}
          {!isLoading && <Icon><i className='fas fa-arrow-right' /></Icon>}
        </Button>
      </Form>
    </Wrapper>
  )
}

export default App
