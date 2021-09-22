const ADDTODO = "ADDTODO"

function addToDoAction(value) {
return {
    type: ADDTODO,
    value: value,
}
}

export default addToDoAction;