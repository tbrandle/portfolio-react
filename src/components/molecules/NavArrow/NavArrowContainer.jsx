// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import React from 'react'
import { withRouter } from 'react-router'
import { compose, withPropsOnChange, withState, withStateHandlers, lifecycle, withHandlers } from 'recompose'
import { withEither, withMaybe } from '@bowtie/react-utils'
import withForm from 'helpers/withForm'
import NavArrow from './NavArrow'
import { Loading } from 'atoms'

// conditional functions here:
const nullConditionFn = (props) => !props
const loadingConditionFn = (props) => props.isLoading

export const enhance = compose(
  withRouter,
  withHandlers({
    handleClick: ({ dir, page, history, location }) => () => {
      const pagesList = [
        'home',
        'about',
        'work',
        'contact'
      ]

      const currentIndex = pagesList.indexOf(page)

      dir === 'right' && history.push(`/${pagesList[currentIndex + 1]}`)
      dir === 'left' && history.push(`/${pagesList[currentIndex - 1]}`)
      // dir === 'down' && history.push(`/${location.pathname}/#0`)
    }
  })
)
export default enhance(NavArrow)
