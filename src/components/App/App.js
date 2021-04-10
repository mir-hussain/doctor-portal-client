//css
import "./App.css";
//react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//components
import Home from "../Home/Home";
import About from "../About/About";
import DentalService from "../DentalService/DentalService";
import Reviews from "../Reviews/Reviews";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Navbar from "../Home/Header/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/service'>
          <DentalService />
        </Route>
        <Route path='/reviews'>
          <Reviews />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
