import { Auth as jtAuth } from 'j-toker';
jtAuth.configure({
  apiUrl: `${process.env.REACT_APP_API_ROOT_URL}/${process.env.REACT_APP_API_VERSION}`
})

class Auth {
  login(formData) {
    return jtAuth.emailSignIn(formData)
  }

  logout() {
    jtAuth.signOut()
    .then(resp => {
      console.log('Signed Out')
    })
    .catch(resp => {
      console.error('Error Signed Out')
    })
  }

  signedIn() {
    return jtAuth.user.signed()
  }

  authHeaders() {
    return jtAuth.retrieveData('authHeaders')
  }
}

const auth = new Auth()

export default auth
