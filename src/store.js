import { createStore } from "redux";

const initialState = {
  listToDo: []
}

function toDoReducer(state = initialState, action) {
  if (action.type === "ADDTODO"){
    return {listToDo: [...state.listToDo, action.value]};
  }
    return state;
}

const store = createStore(toDoReducer);

export default store;
