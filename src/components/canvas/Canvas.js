//import { useState } from 'react';
import './Canvas.css'
import '../elems/Elems'
import Elems from '../elems/Elems';


function Canvas() {

//const [listToDo, setListToDo] = useState([]);
let listToDo = ['AAAAAAAAAAAAAAAAAAAAAAAA'];

function handleClick() {
let todo = prompt("Введите текст цели: ");
//setListToDo(listToDo.push(todo));
listToDo.push(todo);
alert(listToDo);
}


return (
    <div className="Todos">
      <ul>
      {listToDo.map((ToDo) =>
        <li key={listToDo[ToDo]}>{listToDo[ToDo]}</li>
      )}
      </ul>
        <h1>Привет, ниггеры!</h1>
        <button className="butt" onClick={handleClick}>Добавить задание</button>
    </div>
);

}

export default Canvas;