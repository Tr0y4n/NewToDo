import { useState } from 'react';
import './Canvas.css'
import '../elems/Elems'
import Elems from '../elems/Elems';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

function Canvas() {

const [listToDo, setListToDo] = useState([]);
const [textToDo, setTextToDo] = useState('');

function handleClick() {
setListToDo([...listToDo, <Elems text = {textToDo} />]);
setTextToDo("")
}

function handleChange(event) {
  let text = event.target.value.slice(0,55);
  setTextToDo(text);
}


return (
    <div className="Todos">
      
      {listToDo.map((ToDo) =>
        <div className = "marg" key={listToDo[ToDo]}>{ToDo}</div>
      )}
      <div> 
      <Input maxLe type="text" className="inp" value = {textToDo} onChange={handleChange}/>
      <Button variant="contained" color="primary" className="butt marg" onClick={handleClick}>Добавить</Button>
      </div>
    </div>
);

}

export default Canvas;