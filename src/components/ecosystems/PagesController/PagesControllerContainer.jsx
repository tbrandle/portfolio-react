// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import React from 'react'
import { withRouter } from 'react-router'
import { compose, withPropsOnChange, withState, withStateHandlers, lifecycle } from 'recompose'
import { withEither, withMaybe } from '@bowtie/react-utils'
import withForm from 'helpers/withForm'
import PagesController from './PagesController'
import { Loading } from 'atoms'

// conditional functions here:
const nullConditionFn = (props) => !props
const loadingConditionFn = (props) => props.isLoading

export const enhance = compose(
  withRouter,
  withStateHandlers(({ match: { params } }) => ({
    page: ''
    // show: false
  }), {
    setPage: () => (payload) => ({ page: payload})
    // toggleShow: () => (payload) => ({ show: payload}),
  }),
  withPropsOnChange(['match'], ({ match, setPage }) =>
    setPage(match.params.page)
  ),
  lifecycle({
    componentDidMount () {
      const { setPage, toggleShow, match } = this.props
      setPage(match.params.page)
      // toggleShow(true)
    },
    componentWillUnmount () {
      console.log('UNMOUNTING')
    }
  }),
  withMaybe(nullConditionFn),
  withEither(loadingConditionFn, Loading)
)
export default enhance(PagesController)
