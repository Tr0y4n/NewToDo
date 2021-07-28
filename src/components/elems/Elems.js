import { useState } from 'react';
import './Elems.css'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function Elems(props) {

    const [checked, setChecked] = useState(false)
    const [text, setText] = useState(props.text);
    const [deleted, setDeleted] = useState(false);

    function handleChange() {
        setChecked(!checked);       
    }

    function handleEdit() {
        let edited = prompt("Редактирование текста: ", text)
        setText(edited);
    }

    function handleDelete() {
        setDeleted(true)
    }

    if(!deleted){
    return (
        <div className="whole">
        <div className="element" style = {{backgroundColor: checked ? 'lime' : 'rgb(229, 255, 0)'}}>
        <Checkbox checked={checked} onChange={handleChange} value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/>
            <span id="center" style = {{textDecoration: checked ? 'line-through' : 'none', color: checked ? 'grey' : 'black'}}>
            {text}
            </span>
        <Checkbox className="op" value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/>
        </div>
            <Button variant="outlined" className="mrg" onClick={handleEdit}>Изменить</Button>
            <Button variant="outlined" className="mrg" color="secondary" onClick={handleDelete}>удалить</Button>
        </div>
            )}
        else { return(null) }
}

export default Elems;