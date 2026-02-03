import { useCallback, useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoForm() {
    
    const[task,setTodo]=useState("")
    const{addTodo}=useContext(TodoContext)

    const add=(e)=>{
        e.preventDefault();
        addTodo({msg: task, completed: false, id: Date.now()})
        setTodo("")
    }

    return (
        <form  className="flex" onSubmit={add} >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodo(e.target.value)}
                value={task}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

