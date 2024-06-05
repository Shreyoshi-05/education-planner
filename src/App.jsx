import { useState } from 'react'
import './App.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function App() {
  const[input, setInput] = useState("");
  const[inputH, setInputH] = useState("");
  const [list, setList] = useState([])

  function getList(e){
    e.preventDefault();
    setList([...list,input+"---"+inputH]);
    
  }
  

  const[number, setNumber] = useState(0);

  function add(){
    setInputH(inputH +=1);
  }

  function subtract(v){
    setInputH(inputH -=1);
  }



  return (
    <>
     <h2>Geekster Education Planner</h2>
     <form action="" onSubmit={getList}>
      <input type="text" placeholder='subject' value={input} onChange={(e)=>{setInput(e.target.value)}} />
      <input type="number" placeholder='hour' value={inputH} onChange={(e)=>{setInputH(e.target.value)}} />
      <button type='submit'>Add</button>
     </form>
     <ul>
     {
        list.map((val,index)=>{
          return(
            <li>
              {val} 
              <AddCircleOutlineIcon onClick={add} />
              <RemoveCircleOutlineIcon onClick={subtract} />
            </li>
          )
        })
      }
     </ul>
    </>
  )
}

export default App
