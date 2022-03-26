// import logo from './logo.svg';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {

  const [mode,setMode] = useState("light"); 
  const [alert,setAlert] = useState(null); 

  const showAlert = (type,message)=> {
    setAlert({
      type:type,
      msg:message
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }


  // const removeBodyClasses=()=>{

  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");

  // }

  // Similarlyyou can add dark and white pallets and remove the switch button for toggleMode 
  // pass cls to toggleMode as parameter for pallets color mode  
  const toggleMode = ()=> {

    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls);

    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#1d3250";
      showAlert("success","Dark Mode has been enabled !");
      // document.title="Dark Mode";

      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // },3000);
      // setInterval(() => {
      //   document.title="TextUtils is Amazing App";
      // },2000);

    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("success","Light Mode has been enabled !");
      // document.title="Light Mode";     

    }
  }

  return (
    <>
      <Router>
      <Navbar home="home_page" about="about_us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> 

      <div className="container my-3">

      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading = "Try TextUtils - Word counter , Character counter , Copy Text" mode={mode}/>    
          </Route>
      </Switch>
 
      </div>
      </Router>

    </>

  );
}

export default App;
