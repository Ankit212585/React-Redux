import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "Increment") {
    return { counter: store.counter + 1 };
  } else if (action.type === "Decrement") {
    return { counter: store.counter - 1 };
  } else if (action.type === "Add") {
    return { counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "substract") {
    return { counter: store.counter - Number(action.payload.num) };
  }
  console.log("Action Recieved", action);
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
