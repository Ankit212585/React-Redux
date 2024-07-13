// import { createStore } from "redux";

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "Increment") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "Decrement") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "Add") {
//     return {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "substract") {
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "Privacy_toggle") {
//     return { ...store, privacy: !store.privacy };
//   }
//   console.log("Action Recieved", action);
//   return store;
// };

// const counterStore = createStore(counterReducer);

// export default counterStore;
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal += 1;
      // state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal -= 1;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    substract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => (state = !state),
  },
});

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "Increment") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "Decrement") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "Add") {
//     return {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "substract") {
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "Privacy_toggle") {
//     return { ...store, privacy: !store.privacy };
//   }
//   console.log("Action Recieved", action);
//   return store;
// };

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;
