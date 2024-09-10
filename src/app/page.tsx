"use client"
import { useState } from "react"

const Page = () => {
  // variable for title
  const [title, settitle] = useState("");
  // variable for description
  const [desc, setdesc] = useState("")
  // variable for storing task 
  const [mainTask, setmainTask] = useState([])

  // function for submit
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let randerTask = <h1>No Task Availble</h1>

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between items-center w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={
              () => {
                deleteHandler(i)
              }
            } 
            className="bg-red-500 px-4 py-2 text-white font-bold rounded">Delete</button>
        </li>
      );
    })
  }
  return (
    <>
      <h1 className="bg-gray-800 text-white font-bold text-5xl h-20 flex items-center justify-center">Umair's Todo List</h1>
      <form onSubmit={submitHandler} className="flex flex-col space-y-10 items-center justify-center my-7">
        {/* input for title */}
        <input 
          type="text" 
          className="text-2xl border-4 border-gray-600 p-3 rounded-lg w-7/12" 
          placeholder="Enter Title Here" 
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
          />

        {/* input for description */}
        <input
          type="text" 
          className="text-2xl border-4 border-gray-600 p-3 rounded-lg w-7/12" 
          placeholder="Enter Description Here" 
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
          />

        {/* button */}
        <button 
          className="bg-gray-700 px-4 py-3 text-white rounded-lg font-bold">
            Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>
          {randerTask}
        </ul>
      </div>
    </>
  )
}

export default Page