import Home from './Components/Home'
import  NavBar  from './Components/NavBar'
import Create from './Components/Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetails from './Components/BlogDetails'
import NotFound from './Components/NotFounds'
function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/home">
          <Home />
          </Route>
          <Route path="/create">
          <Create />
          </Route>
          <Route path="/blogs/:id">
          <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
