import React from 'react'
// sólamente importamos el método render, no ReactDOM completo
import { render } from 'react-dom'

import App from './components/App'

render(<App />, document.getElementById('root'))
