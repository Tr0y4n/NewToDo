import { useState } from 'react';
import './Elems.css'
import Checkbox from '@material-ui/core/Checkbox';

function Elems(props) {

    const [checked, setChecked] = useState(false)
    //const [textLine, setText]

    function handleChange() {
        setChecked(!checked);
        
    }

    return(
        <div className="element" style = {{backgroundColor: checked ? 'lime' : 'rgb(229, 255, 0)'}}>
        <Checkbox checked={checked} onChange={handleChange} value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/>
            <span id="center" style = {{textDecoration: checked ? 'line-through' : 'none', color: checked ? 'grey' : 'black'}}>
            {props.text}
            </span>
        <Checkbox className="op" value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/>
        </div>
    )
}

export default Elems;