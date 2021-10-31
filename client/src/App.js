import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Nav from './pages/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import registration from './pages/registration';
import Footer from './pages/Footer';
import AllPost from './pages/AllPost';
import PostByID from './pages/PostByID';
import Details from './pages/Details';
import WriteReview from './pages/WriteReview';
function App() {
  return (
    <div> 
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={registration} />
        <Route path="/Posts" exact component = {AllPost}/>
        <Route path="/Posts/:id" exact component = {PostByID}/>
        <Route path="/Details" exact component = {Details}/>
        {/* <Route path="/WriteReview" exact component = {WriteReview}/> */}
      </Switch>
    </Router>
    {/* <Router> 
      <Nav/>
      <Switch> 
        <Route path = "/user/manage" component= {ManageUser}/>
        <Route path = "/user/add" component = {AddUser}/>
      </Switch>
      
      <Footer/>
    </Router> */}
    
    </div>
    
  );
}

export default App;
