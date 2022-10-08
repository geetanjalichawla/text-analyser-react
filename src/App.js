
import React ,{useState} from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';

function App() {
    const [mode,setmode] = useState('light');
    const togglemode = ()=>
    {
      if(mode === 'light')
      {
        setmode('dark');
        document.body.style.backgroundColor = '#0c2552';
        document.body.style.color = '#fff';
      }else{
        setmode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      }
    }
  return (
    <>
    <Navbar title = "textutil" mode ={mode} togglemode ={togglemode} />
    <TextForm heading = "Enter you text to format it"  mode ={mode} />
    </>
  );
}

export default App;
