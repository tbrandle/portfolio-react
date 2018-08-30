import { withEither } from '@bowtie/react-utils'
import DefaultFormGroup from './DefaultFormGroup'
import RadioFormGroup from './RadioFormGroup'

const radioGroupConditionFn = ({ radio }) => radio

export default withEither(radioGroupConditionFn, RadioFormGroup)(DefaultFormGroup)
