import React from 'react'
 import Home from '../src/Home/home'
 import About  from './Home/About/About';
 import { BrowserRouter, Route, Link } from "react-router-dom";
  import Login from  '../src/Home/Signup/login/login'
   import SignUp  from './Home/Signup/signup';

class App extends React.Component {
  //http://localhost:3000/
 
  render() {
    return (
    <BrowserRouter>
     <Route exact path="/" component={Home}  />
     <Route path="/about" component={About}  />
     <Route path="/login" component={Login}  />
     <Route path="/singup" component={SignUp}  />



    
    </BrowserRouter>

    )

  }


}
export default App