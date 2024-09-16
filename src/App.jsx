import React from "react";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="w-full con h-screen  bg-cover bg-center relative ">
      <div className="overlay w-full h-full top-0 left-0  bg-[#22222292] absolute"></div>
      <Todo />
    </div>
  );
};

export default App;
