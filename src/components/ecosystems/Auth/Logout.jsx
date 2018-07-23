import auth from 'lib/auth'

const Logout = ({ history }) => {
  auth.logout()
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
