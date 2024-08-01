import NavBar from "./components/NavBar";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersBlog from "./pages/userBlogs";
function App() {
  return (
    <Router>
      <div className="max-w-screen min-h-screen bg-gray-100">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/myblogs">
            <UsersBlog />
          </Route>
          <Route path="/signup">
            <div>hello</div>
          </Route>
          <Route path="/signin">
            <div>login</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
