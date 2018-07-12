import Auth from '../../../lib/jToker'

const Logout = ({ history }) => {
  Auth.signOut()
    .then(resp => {
      console.log('Signed Out')
      history.push('/login')
    })
    .catch(resp => {
      console.log('Error Signed Out')
    })

  return null
}

export default Logout
