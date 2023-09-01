import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import * as styles from 'style'
import * as utils from 'utils'
import * as pages from 'pages'
import * as components from 'components'

function App() {
  return (
    <Router>
        <Routes>
            <Route path={utils.URL.HOME.MAIN} element={<components.Layout />}>
                <Route path={utils.URL.HOME.MAIN} element={<pages.Main />} />
                <Route path={utils.URL.CHAT.TEXT} element={<pages.TextChat />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;