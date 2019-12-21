import React, {useState} from 'react';
import TodoItemClass  from "../stores/todo-item";
import {useStore} from "../stores/helpers/use-store";

interface Props {
    todo: TodoItemClass;
}

export const TodoItem = ({todo}: Props) => {
    const [newText, setText] = useState('');
    const [isEditing, setEdit] = useState(false);
    const todoList = useStore();

    const saveText = () => {
      todo.updateText(newText);
      setEdit(false);
      setText('');
    };

    return isEditing ?
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={saveText}>save</button>
        </div>
        :
        <div>
            <span>{todo.text}</span>
            <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
            <button onClick={() => setEdit(true)}>edit</button>
            <button onClick={() => todoList.removeTodo(todo)}>X</button>
        </div>
    ;

};
