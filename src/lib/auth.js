const Auth = require('j-toker')
Auth.configure({
  apiUrl: `${process.env.REACT_APP_API_ROOT_URL}/${process.env.REACT_APP_API_VERSION}`
})

class JTAuth {
  login (formData) {
    return Auth.emailSignIn(formData)
  }

  logout () {
    return Auth.signOut()
  }

  signedIn () {
    console.log(Auth.user.signedIn)
    return Auth.user.signedIn
  }

  authHeaders () {
    return Auth.retrieveData('authHeaders')
  }
}

const auth = new JTAuth()

export default auth
