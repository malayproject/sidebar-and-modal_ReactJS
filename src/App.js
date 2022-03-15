import "./App.css";
import React, { useState } from "react";
import Sidebar from "./container/Sidebar";
import Button from "./container/Button";
import PopUp from "./container/PopUp";
import { BiChevronRight } from "react-icons/bi";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setshowSidebar] = useState(false);

  const clickModalHandler = (e) => {
    console.log("clicked");
    setShowModal((prev) => !prev);
  };
  const handleSidebar = () => {
    setshowSidebar((prev) => !prev);
  };
  return (
    <main className="main">
      <div className={`showSidebarIcon`} onClick={handleSidebar}>
        <BiChevronRight />
      </div>
      <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar} />
      <Button clickModalHandler={clickModalHandler}>Show Modal</Button>
      {showModal && <PopUp clickModalHandler={clickModalHandler} />}
    </main>
  );
}

export default App;
