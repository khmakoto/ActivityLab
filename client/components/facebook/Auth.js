const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`

const Auth = {
  isAuthenticated() {
		return fetch(`${host}/auth/facebook/isAuthenticated`, {credentials: 'include'})
			.then( res => res.json());
  }
}

export default Auth
