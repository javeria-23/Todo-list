import{useState}from "react";
interface Todo{
id:number;
task:string;
}
const TodoApp = ()=>{
    const [task,setTask] =useState<string>("");
    const [todos,setTodos] =useState<Todo[]>([]);
    const addTask =()=>{
        if(task.trim()==="") return;
        const newTask={id:Date.now(),task};
        setTodos([...todos,newTask]);
        setTask("");
    };
    const deletetask=(id:number)=>{
        setTodos(todos.filter(todo=>todo.id !==id))
    };
    return(
        <div className="todo-container">
            <div className="input-selection">
                <input 
                type="text" 
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter a task"/>
                <button onClick={addTask}
                disabled={!task}
                className={task ? "active" : ""}>Add task</button>
            </div>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={()=>deletetask(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TodoApp;