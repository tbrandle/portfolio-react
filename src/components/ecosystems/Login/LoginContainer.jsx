// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import { compose, withState, withHandlers } from 'recompose'
import { withEither } from '@bowtie/react-utils'
import Login from './Login'
import { Loading } from '../../atoms'
import Auth from '../../../lib/jToker'
import withForm from '../../../helpers/withForm'
import api from '../../../lib/api'
// import notifier from '../../../lib/notifier'

// conditional functions here:
const loadingConditionFn = ({ isComponentLoading }) => isComponentLoading

// const methods = {
//   create: 'post',
//   edit: 'put',
//   view: 'get'
// }

export const enhance = compose(
  withForm,
  withState('isComponentLoading', 'setIsComponentLoading', false),
  withEither(loadingConditionFn, Loading),
  withHandlers({
    formSubmit: ({ match, setIsComponentLoading, history }) => (formData) => {
      console.log('formData', formData)
      setIsComponentLoading(true)
      Auth.emailSignIn(formData)
        .then((user) => {
          setIsComponentLoading(false)
          console.log(user)

          api.get('todos')
            .then(console.log)
            .catch(console.error)

          history.push('/home')
        })
        .catch(resp => {
          setIsComponentLoading(false)
          console.log(resp)
        })
      // history.goBack()
      // const { action, modelName, modelId } = match.params

      // const method = methods[action]
      // const route = modelId ? `${modelName}/${modelId}` : `${modelName}`
      // isComponentLoading(true)

      // api[method](route, { [modelName]: formData })
      //   .then(notifier.ok.bind(notifier))
      //   .then(({ data }) => {
      //     isComponentLoading(false)
      //   })
      //   .catch(resp => {
      //     notifier.apiErrors(resp, handleErrors)
      //     isComponentLoading(false)
      //   })
    },
    delete: () => () => {

    }
  })

)

export default enhance(Login)
