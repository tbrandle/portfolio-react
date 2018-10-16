// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import React from 'react'
import { withRouter } from 'react-router'
import { compose, withPropsOnChange, withState, withStateHandlers, lifecycle } from 'recompose'
import { withEither, withMaybe } from '@bowtie/react-utils'
import withForm from 'helpers/withForm'
import ProjectSingle from './ProjectSingle'
import { Loading } from 'atoms'

// conditional functions here:
const nullConditionFn = (props) => !props
const loadingConditionFn = (props) => props.isLoading

export const enhance = compose(
  withRouter
)
export default enhance(ProjectSingle)
