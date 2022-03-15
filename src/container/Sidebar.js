import React, { useState } from "react";
import PageItems from "./PageItems";
import { BiChevronLeft } from "react-icons/bi";

const Sidebar = ({ showSidebar, handleSidebar }) => {
  return (
    <div className={`sidebar-container${showSidebar ? " show" : ""}`}>
      <div className="sidebar">
        <div className={`hideSidebarIcon`} onClick={handleSidebar}>
          <BiChevronLeft />
        </div>
        <div className="pages">
          {PageItems.map((item) => (
            <a key={item.id} className="page" href={item.url}>
              {item.icon}
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
