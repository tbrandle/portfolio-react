// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import { compose, withPropsOnChange } from 'recompose'
import { withRouter } from 'react-router'
import Header from './Header'

export const enhance = compose(
  withRouter
  // withPropsOnChange(['location'], () => {
  //   return { active:  }
  // })
)

export default enhance(Header)
