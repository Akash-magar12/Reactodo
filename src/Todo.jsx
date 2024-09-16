import React, { useState } from "react";
import Icon from "./assets/icon.png";
import Cross from "./assets/cross.png";
import Edit from "./assets/edit.png";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  const [inp, setInp] = useState("");

  const [Task, setTask] = useState([]);

  function Add() {
    if (inp) {
      setTask([...Task, inp]);
      setInp("");
    }
  }
  //   console.log(Task);

  function Delete(idx) {
    let deleted = [...Task];
    deleted.splice(idx, 1);
    setTask(deleted);
  }

  function Edit(idx) {
    if (inp) {
      let updated = [...Task];
      updated.splice(idx, 1, inp);
      setTask(updated);
    }
  }
  return (
    <div className="sm:w-96 w-[18rem]  rounded-md shadow-2xl absolute left-1/2 top-[40%] px-6 py-6 pb-10 -translate-x-1/2 -translate-y-1/2  bg-[#ffffff27]">
      <div className="flex justify-center gap-4  items-center">
        <h1 className=" text-2xl sm:text-3xl text-white font-semibold font-[gilroy]">
          To Do List
        </h1>
        <img
          className="h-24 w-24 sm:w-28 sm:h-24 object-cover "
          src={Icon}
          alt=""
        />
      </div>

      <div className=" bg-transparent w-full flex  py-2 gap-2">
        <input
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
          type="text"
          placeholder="Enter Task"
          className="bg-transparent w-[71%] border-[1px] pl-2 border-[#ffffff27] placeholder-white text-white outline-none"
        />
        <button
          onClick={Add}
          className="bg-green-400  text-white text-[10px] sm:text-sm px-2 sm:px-4 py-2  cursor-pointer"
        >
          Add Task
        </button>
      </div>

      {Task.map((val, idx) => (
        <div key={idx} className="flex mt-2 items-center  pl-2 justify-between">
          <h3 className="text-white">{val}</h3>
          <div className="flex gap-4 items-center">
            {/* <button
              onClick={() => Edit(idx)}
              className="text-white bg-red-500 rounded-md px-3 s"
            >
              Edit
            </button> */}
            <span onClick={() => Edit(idx)}>
              <FaEdit size={20} color="white" />
            </span>
            <img
              onClick={() => Delete(idx)}
              className="w-10 cursor-pointer"
              src={Cross}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
