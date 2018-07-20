const Auth = require('j-toker')
Auth.configure({
  apiUrl: `${process.env.REACT_APP_API_ROOT_URL}/${process.env.REACT_APP_API_VERSION}`
})

class jtAuth {
  login(formData) {
    return Auth.emailSignIn(formData)
  }

  logout() {
    Auth.signOut()
    .then(resp => {
      console.log('Signed Out')
    })
    .catch(resp => {
      console.error('Error Signed Out')
    })
  }

  signedIn() {
    console.log(Auth.user.signedIn)
    return Auth.user.signedIn
  }

  authHeaders() {
    return Auth.retrieveData('authHeaders')
  }
}

const auth = new jtAuth()

export default auth
