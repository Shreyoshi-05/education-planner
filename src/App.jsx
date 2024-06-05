import { useState } from 'react';
import './App.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function App() {
  const [input, setInput] = useState("");
  const [inputH, setInputH] = useState(0);
  const [list, setList] = useState([]);

  function getList(e) {
    e.preventDefault();
    if (input && inputH > 0) {
      setList([...list, { subject: input, hours: parseInt(inputH) }]);
      setInput("");
      setInputH(0);
    }
  }

  function add(index) {
    const newList = list.map((item, i) => {
      if (i === index) {
        return { ...item, hours: item.hours + 1 };
      }
      return item;
    });
    setList(newList);
  }

  function subtract(index) {
    const newList = list.map((item, i) => {
      if (i === index && item.hours > 0) {
        return { ...item, hours: item.hours - 1 };
      }
      return item;
    });
    setList(newList);
  }

  return (
    <>
      <h2>Geekster Education Planner</h2>
      <form onSubmit={getList}>
        <input
          type="text"
          placeholder='subject'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder='hour'
          value={inputH}
          onChange={(e) => setInputH(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {
          list.map((val, index) => (
            <li key={index}>
              {val.subject} --- {val.hours} hours
              <AddCircleOutlineIcon onClick={() => add(index)} />
              <RemoveCircleOutlineIcon onClick={() => subtract(index)} />
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
