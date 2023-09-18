"use client"
import "@/app/style/style.css"
import { useState } from "react";

const Page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const onClickHandler = () => {
    // console.log(task);
    // console.log(desc);
  if(!task == "" || !desc == ""){
    setMainTask([...mainTask, { task, desc }]);
    setTask("");
    setDesc("");
  }
  };
  const deleteTask = (index)=>{
    let copyTask = [...mainTask];
    copyTask.splice(index,1);
    setMainTask(copyTask);
  }
  let renderTask = <p>No Task here..</p>;
  if(mainTask.length>0){
    renderTask = mainTask.map((item, index) => {
        return (
          <div key={index} className="setAllTask">
            <h5>{item.task}</h5>
            <h5>{item.desc}</h5>
            <button onClick={()=>{deleteTask(index)}}>Delete</button>
          </div>
        );
      });
  }

  return (
    <>
      <h1>My ToDo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task here..."
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter description here..."
      />
      <button onClick={onClickHandler}>Add task</button>
      <hr />
      <div className="all-task">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
