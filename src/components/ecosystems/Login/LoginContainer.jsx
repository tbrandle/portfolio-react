
import { compose, withState, withHandlers } from 'recompose'
import { withEither } from '@bowtie/react-utils'
import Login from './Login'
import { Loading } from 'atoms'
import auth from 'lib/auth'
// import notifier from 'lib/notifier'

// conditional functions here:
const loadingConditionFn = ({ isComponentLoading }) => isComponentLoading

export const enhance = compose(
  withState('isComponentLoading', 'setIsComponentLoading', false),
  withEither(loadingConditionFn, Loading),
  withHandlers({
    formSubmit: ({ setIsComponentLoading, history }) => (formData) => {
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
    }
  })

)

export default enhance(Login)
