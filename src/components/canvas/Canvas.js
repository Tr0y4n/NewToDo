import { useState } from 'react';
import './Canvas.css'
import '../elems/Elems'
import Elems from '../elems/Elems';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import addToDoAction from '../../actionCreators';
import { connect } from 'react-redux';

function Canvas(props) {
  // Или я пропсы неправильно принял как-то?
const {liist, addToDo} = props;
console.log(liist, addToDo);


const [listToDo, setListToDo] = useState([]);
const [textToDo, setTextToDo] = useState('');

function handleClick() {
setListToDo([...listToDo, <Elems text = {textToDo} />]);
//addToDo(<Elems text = {textToDo} />)
setTextToDo("");
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

const mapStateToProps = (state) => {return state}
const mapDispatchToProps = (dispatch) => {
  return{
  addToDo() {dispatch(addToDoAction())}
  }
}

const СanvasContainer = connect(mapStateToProps, mapDispatchToProps)(Canvas);

// ОШИБКА с Экспортом Canvas а не canvasContainer??? в видосах он ебашил в index.js canvasContainer, но
// звучит как мега залупа, у него то все в index.js и находилось
export default Canvas;