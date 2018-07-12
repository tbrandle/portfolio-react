const Auth = require('j-toker')

Auth.configure({
  apiUrl: process.env.REACT_APP_API_ROOT_URL
})

export default Auth
