import React, { useEffect,useState } from 'react'
import './App.css';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Nav from './pages/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import registration from './pages/registration';
import AllPost from './pages/AllPost';
import PostByID from './pages/PostByID';
import NewDetails from './pages/NewDetails';
import WriteReview from './pages/WriteReview';
import MiddlePage from './pages/MiddlePage';
// import Test from './component/Test';
import { AuthContext } from './helpers/AuthContext';
import axios from 'axios';
function App() {
  const [authState,setAuthState] = useState({
      username: "",
      id: 0,
      status: false
  })

  useEffect(()=>{
      axios.get("http://localhost:3001/auth",{headers: {
          accessToken : localStorage.getItem("accessToken")
      }}).then((response)=>{
          if (response.data.error){
              setAuthState({...authState,status:false});
          } else{
              setAuthState({
                  username: response.data.username,
                  id: response.data.id,
                  status: true
              });
          }
      })

  })
  return (
    <div>
    <AuthContext.Provider value = {{authState,setAuthState}}> 
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={registration} />
        <Route path="/Posts" exact component = {AllPost}/>
        <Route path="/Middle" exact component = {MiddlePage}/>
        <Route path="/Posts/:id" exact component = {PostByID}/>
        <Route path="/Details" exact component = {NewDetails}/>
        <Route path="/WriteReview" exact component = {WriteReview}/>
        {/* <Route path="/Test" exact component = {Test}/> */}
      </Switch>
    </Router>
    </AuthContext.Provider>
    </div>
    
  );
}

export default App;
