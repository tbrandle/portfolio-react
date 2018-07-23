// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import Auth from './Auth'
import { compose, withState, withHandlers } from 'recompose'
import { withEither } from '@bowtie/react-utils'
import { auth } from 'lib'
import { Loading } from 'atoms'

const loadingConditionFn = ({ isComponentLoading }) => isComponentLoading

export const enhance = compose(
  withState('isComponentLoading', 'setIsComponentLoading', false),
  withHandlers({
    handleLoginSubmit: ({ setIsComponentLoading, history }) => (formData) => {
      console.log('formData', formData)
      setIsComponentLoading(true)

      auth.login(formData)
        .then((user) => {
          setIsComponentLoading(false)
          console.log(user)
          history.push('/home')
        })
        .catch(resp => {
          setIsComponentLoading(false)
          console.log(resp)
        })
    },
    handleLogout: ({ history }) => () => {
      console.log('logged out')
      return null
      // auth.logout()
      //   .then(resp => {
      //     console.log('Signed Out')
      //     history.push('/login')
      //   })
      //   .catch(resp => {
      //     console.log('Error Signed Out')
      //   })
    }
  }),
  withEither(loadingConditionFn, Loading)
)

export default enhance(Auth)
