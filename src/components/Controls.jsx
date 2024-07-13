import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../redux/counter";
import { privacyActions } from "../redux/counterprivacy";

export default function Controls() {
  const dispatch = useDispatch();
  const Element = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add({ num: Element.current.value }));
    Element.current.value = 0;
  };

  const handleSubstract = () => {
    dispatch(
      counterActions.substract({ num: Element.current.value })
    );
    Element.current.value = 0;
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={handleIncrement}
      >
        Plus
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg px-4"
        onClick={handleDecrement}
      >
        Minus
      </button>
      <input
        style={{ borderRadius: "10px" }}
        type="text"
        className=" gap-3"
        placeholder="Enter your Number"
        ref={Element}
      />

      <button
        type="button"
        className="btn btn-info"
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleSubstract}
      >
        Substract
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={handlePrivacyToggle}
      >
        Privacy
      </button>
    </div>
  );
}
