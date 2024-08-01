import NavBar from "./components/NavBar";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersBlog from "./pages/userBlogs";
import Signup from "./pages/signup";
import SignIn from "./pages/signIn";
import NewBlog from "./pages/newblog";
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
            <Signup />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/newblog">
            <NewBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
