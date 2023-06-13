import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import './my.css';
import Textform from './components/Textform';
import Alert from './components/alert';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const [color, setcolor] = useState('white');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({msg: message,
      type: type});
    setTimeout(() => {
      setalert(null);
    },1500);
    
  }
  const setbackGroundcolor=(event)=>{
    setcolor(event.target.value);
    document.body.style.backgroundColor=event.target.value;
    if(event.target.value==='black'){
      showAlert('Dark Mode Enabled','success');
      document.title="Chandra - Dark Mode";
    }
    if(event.target.value==='white'){
      showAlert('Light Mode Enabled','success');
      document.title="Chandra - Light Mode";
    }
    if(event.target.value==='pink'){
      showAlert('Pink Mode Enabled','success');
      document.title="Chandra - Pink Mode";
    }
    if(event.target.value==='grey'){
      showAlert('Grey Mode Enabled','success');
      document.title="Chandra - Grey Mode";
    }
  }
  return (
    <div className="App">
     
        <Navbar alert={showAlert} color={color} backGroundSelector={setbackGroundcolor} title="Chandra" about='About' />
        <Alert alert={alert}/>

            {/* <About color={color}/> */}
            <Textform alert={showAlert} color={color} heading={"Textutils - Textarea"} />
      
    </div>
  );
}

export default App;
