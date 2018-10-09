// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import React from 'react'
import { withRouter } from 'react-router'
import { compose, withPropsOnChange, withState, withStateHandlers, lifecycle, withHandlers } from 'recompose'
import { withEither, withMaybe } from '@bowtie/react-utils'
import withForm from 'helpers/withForm'
import NavArrows from './NavArrows'
import { Loading } from 'atoms'

// conditional functions here:
const nullConditionFn = (props) => !props
const loadingConditionFn = (props) => props.isLoading

export const enhance = compose(
  withRouter,
  withHandlers({
    handleClick: ({ dir, history, match }) => () => {
      const { page } = match.params
      const currentIndex = pagesList.indexOf(page)
      const pagesList = [
        'home',
        'about',
        'work',
        'contact'
      ]

      dir === 'right'
        ? history.push(`/${pagesList[currentIndex + 1]}`)
        : history.push(`/${pagesList[currentIndex - 1]}`)
    }
  })
)
export default enhance(NavArrows)
