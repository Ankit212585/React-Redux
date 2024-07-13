# Redux installation

1. npm i redux
2. npm i react-redux

3. Create store folder with Index.js file //for wrapping all the
   components not mandartry to use index.js file.

4. Create the store using. (import {createStore} from redux).

5. Providing the store with react 1.Provider form react-redux 2.
   <Provider store=(store)>App</Provider>.

6. Using the store :- useSelector hook gets a slice of the store.
   const counter = useSelectore(state => state.counter). Subscription
   is already setup and only will re-execute when onl oyur slice is
   changed Subscription is automatically cleared also.

7. Dispatch Actions using the useDispatch hook.

# install Bootstrap

1. npm i bootstrap@latest

# import "bootstrap/dist/css/bootstrap.min.css";

<!-- --------------------------------------Learning New concepts------------------------------------- -->

1. firstly we need to start our local host, now we write the command
   to start our project

# npm run dev

2. when we use the Redux in our project then we need the Redux Store ,
   Reducer and Action
3. Firstly we create a redux folder inside the Src folder. then create
   a index.js file inside the redux folder.

4. now we need to import the createStore from the redux.

5. now we need to create a store using the createStore.

6. now we need to import the Provider from the react-redux.

7. now we need to wrap the Provider tag inside the App.js file.

8. now we need to import the store inside the App.js file.

9. now we need to pass the store inside the Provider tag.

10. now we need to create a folder inside the redux folder and name it
    as Reducer.

11. now we need to create a index.js file inside the Reducer folder.

Simply we make a counter app page , who show to counter value is
increment or decrement

# useSelector Hook

1. we need to import the useSelector from the react-redux. useSelector
   hook hamre store mai se hamari Initial value ko nikaal kr deta hai.
   or uske baar hum uss value ko stored value ko khi bhi use kr shakte
   hai like:

<!-- function DisplayCounter() {
  const counter = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4">Counter current values:{counter}</p>
  );
} -->

# usedispatch

1. we need to import the useDispatch from the react-redux. useDispatch
   useDispatch method hme dispatch naam ka ek method dega. or iss
   mathod k ander hum jo bhi pass krenge like type:"increment" and
   payload:{ value:1 } , to usko action ka object maankr use Reducer
   method k ander baze diya jayega

ye tha abhi tk ka pure redux isme humne react redux toolkit use nhi
ki.so our question is why we use Redux toolkit

# Why we use Redux toolkit

1. Actions type are difficult to maintain.
2. Reducer is difficult to maintain.
3. Store becoming too big.
4. We need to write too much code.
5. Mistakenly editing store.
6. Reducer become to big.
7. We need to write too much code.

# Now we working with Redux toolkit

1.  npm i @reduxjs/toolkit
2.  Remove redux from package.json
3.  import {createSlice} from "@reduxjs/toolkit"
4.  Slices of the store can be created using the following syntax:
    const slice = createSlice({ name: 'counter', initialState: {},
    reducers: { smallReducerMethods:(state,action)=>{

          }

    } })

5.  ConfigureStore combines multiple reducers and can be used as:
    configureStore({ reducer:{name:slice.reducer} })
6.  export actions = slice.actions;
7.  actions can be dispatched like: actions.reducerMethod(payload)
