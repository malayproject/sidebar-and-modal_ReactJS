import React, { useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";

const PopUp = ({ clickModalHandler }) => {
  const modalConEl = useRef(null);
  const modalEl = useRef(null);

  useEffect(() => {
    const detectOutsideClick = (e) => {
      console.log(e.target);
      console.dir(modalConEl.current);
      if (modalConEl.current === e.target && modalEl.current !== e.target) {
        clickModalHandler();
      }
    };
    modalConEl.current.addEventListener("click", detectOutsideClick);
  }, []);

  // console.log(showModal);

  return (
    // <div className={`modal-container${!showModal ? " hidden" : ""}`}>
    <div className={`modal-container`} ref={modalConEl}>
      <div className="modal" ref={modalEl}>
        <div className="closeIconContainer">
          <MdClose onClick={clickModalHandler} className="closeIcon" />
        </div>
        <h3>Thanks for Clicking!</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          magni nemo quod in quaerat maiores facilis, iste ipsum! Omnis cumque
          eveniet totam maxime laboriosam praesentium earum! Officiis fuga alias
          neque ldigd irg a gieg.
        </p>
      </div>
    </div>
  );
};

export default PopUp;
