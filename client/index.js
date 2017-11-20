import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Layout from 'components/layouts/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
			<Router>
      	<Component />
			</Router>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(Layout)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('components/layouts/Layout', () => {
    const nextLayout = require('components/layouts/Layout').default;
		render(nextLayout)
	})
}
