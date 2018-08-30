// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import PublicRoute from './PublicRoute'
import { compose, withProps } from 'recompose'

export const enhance = compose(
  withProps(({ component, routerAction }) => {
    if (component && routerAction) {
      console.error('Please either pass an routerAction or a component into PublicRoute, not both.')
    }

    const routerActionAsComponent = () => {
      routerAction()
      return null
    }

    const newComponent = routerAction ? routerActionAsComponent : component
    return { component: newComponent }
  })
)

export default enhance(PublicRoute)
