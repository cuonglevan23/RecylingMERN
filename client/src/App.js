import './App.css';
import Landing from './components/layout/Landing'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return <Router>
    <Switch>
      <Route exact path ='/' component={Landing} />
    </Switch>
  </Router>
}

export default App;
