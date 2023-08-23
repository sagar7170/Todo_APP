import React, { useContext, useState } from 'react'
function App() {
  const [inputTask, setInputTask] = useState(""); // task title
  const [Description, setDescription] = useState(""); // description of task
  const [Alltask, setAlltask] = useState([]); //  array of title , description 

  const AddTask = () => {
    if(inputTask){
      setAlltask([...Alltask, { title: inputTask, description: Description }]);
      setInputTask(''); 
      setDescription('');
    }else{
      alert("Please add a task");
    }
   
  }
  
  const deleteTask = (id) => {
    const taskList = Alltask.filter((item,index) => index!==id);
    setAlltask(taskList);
  }

 return (
    <div className='d-flex justify-content-center'>
      <div className='w-75'>
        <h1 className='text-center'>To-Do App</h1> 
        
        {/* input task title */}
        <div className="mb-3">
          <label htmlFor="taskTitleInput" className="form-label">Task title</label>
          <input onChange={(e) => setInputTask(e.target.value)} value={inputTask} type="text" className="form-control" id="taskTitleInput" placeholder="Add task title" />
        </div>

         {/* input task description */}
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Task Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} value={Description} className="form-control" id="taskDescription" rows="3" placeholder='Add Task Description'></textarea>
        </div>

        {/* iterating over every task using map */}
        <div>
          {
            Alltask.map((item, index) => (
              <div key={index} className='bg-light'>
                <div  className='d-flex justify-content-between align-content-center p-2'>
                  <h3 className=' rounded-2 '>{item.title}</h3>
                  <button onClick={()=>deleteTask(index)} type="button" className="btn btn-danger">Delete</button> 
                </div>
                <h4 className='fw-light p-2'>{item.description}</h4>
              </div>
            ))
          }
        </div>
        
        {/* Add task button */}
        <button onClick={AddTask} type="button" className="btn btn-success">Add Task</button>
      </div>
    </div>
  )
}

export default App