import React, {useState} from 'react';
import './App.css';

function App() {
    const [todos, setToDos] = useState([
        {text: 'learn to code', isCompleted: false},
        {text: 'learn to dress', isCompleted: true},
        {text: 'go eat', isCompleted: false}
    ])

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setToDos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setToDos(newTodos);
    }

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setToDos(newTodos);
    }


    return (
        <div className="app">

            <div className="toDoList">

                {todos.map((todo, index) => (
                    <Todo key={index}
                          index={index}
                          todo={todo}
                          completeTodo={completeTodo}
                          deleteTodo={deleteTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>

        </div>
    )
}

function Todo({todo, index, completeTodo, deleteTodo}) {
    return <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>complete</button>
            <button onClick={() => deleteTodo(index)}>remove</button>
        </div>
    </div>
}

function TodoForm({addTodo}) {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo(value);
        setValue('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   className="input"
                   value={value}
                   placeholder="add todos"
                   onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default App;
