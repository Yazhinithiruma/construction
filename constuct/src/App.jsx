import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import ar from './ar.jpg';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ReactDOM from 'react-dom';




function App() {  
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='aa'>
    <div class="header">
  <h1>Client Project</h1>
   <p>Welcome to WeBuild, start your journey to find your destination</p>
    <div className='i'>
       <img src={ar} />
      </div>
     </div>
      <div className='vel'>
        <input type="text" placeholder='veluuuu'/>
      </div>
      
    
            
    
</div>
       
        
   



    </div>
    
  )
}

export default App
