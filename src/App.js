import {Switch, Route} from 'react-router-dom'

import NotFound from './components/NotFound'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
