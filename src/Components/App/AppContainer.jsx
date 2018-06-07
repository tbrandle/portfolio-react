// Containers should include all logic that enhances a component
// this includes any reduce methods, recompose, or middleware.

import React from 'react';
import { withRouter } from 'react-router';
import { compose, withHandlers } from 'recompose';
import { withEither, withMaybe } from '../../helpers/HOC_helpers.jsx';
import App from './App';
import Loading from '../Loading/Loading';

// conditional functions here:
const nullConditionFn = (props) => !props;
const loadingConditionFn = (props) => props.isLoading;

export const enhance = compose(
  withRouter,
  withMaybe(nullConditionFn),
  withEither(loadingConditionFn, Loading),
  withHandlers({
    mapFeatures: ({ featureList }) => () => featureList.map((feature, i) => <li className='list-item' key={`feature-${i}`}>{feature}</li>),
  }),
)
export default enhance(App);