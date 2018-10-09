// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import { compose, lifecycle, withStateHandlers } from 'recompose'
import { withRouter } from 'react-router'
import Home from './Home'

export const enhance = compose(
  withStateHandlers({
    show: false
  }, {
    toggleShow: () => (payload) => ({ show: payload })
  }),
  lifecycle({
    componentDidMount () {
      this.props.toggleShow(true)
    },
    componentWillUnmount () {
      this.props.toggleShow(false)

      console.log('HOME UNMOUNTED')
    }
  })
)

export default enhance(Home)
