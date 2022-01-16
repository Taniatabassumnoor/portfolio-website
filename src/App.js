import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Project from './Pages/HomePage/ProjectSection/Project/Project';
import Contact from './Pages/HomePage/ContactSection/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectDetail from './Pages/HomePage/ProjectDetail/ProjectDetail';
import Header from './Header/Header';
import HomeDetail from './Pages/HomePage/HomeDetail';
import Blog from './Pages/HomePage/Blogs/Blog';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
     <Switch>
         <Route exact path="/"><HomeDetail></HomeDetail></Route>
         <Route exact path="/home"><HomeDetail></HomeDetail></Route>
         <Route exact path="/project"><Project></Project></Route>
         <Route exact path="/contact"><Contact></Contact></Route>
         <Route exact path="/blog"><Blog></Blog></Route>
         <Route exact path="/about"><About></About></Route>

         <Route path="/projectDetail/:detailId"><ProjectDetail></ProjectDetail></Route>
         <Route></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
