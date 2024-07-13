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

# How to use Redux Toolkit

1. sbse phele mene redux ko uninstall kia or redux toolkit ko install
   kia jisko install kese krte hai store kese bante hai reducer kese
   bante hai ek slice kese bna shakte hai jb likha hua hai bs hum
   commands ko step by step follow krna hai

# How we start the react project using redux toolkit

1. sbse phele mene apna ui tayar kia or usme muje hmane add+
   ,substract- , addnumber+100, substractnumber-100 or mai apna number
   ko kese private reekhuga iss tra ek ui tayar kia

2. ui tayar hone k baad mene uss ui k kuch components banye or
   components wale folder mai daal diye , taaki jo hmara ui hai wo ek
   alag jhnga rhe or jo hmari functionality hai wo alag rhe

3. Ab redux toolkit ko use krne k lie mene redux ka ek alag folder
   create kia or usme counter.js, counterprivacy.js or index.js ki
   files banai jiska sbka alag alag kaam hia

4. sbse phele hume store create krna tha to hum sbse phele index.js
   mai gye or wha jaakr hamne import { configureStore } from
   "@reduxjs/toolkit"; iss configureStore ko import kia

5. uske baad mene ek name variable se configurstore ko start kia or
   usme reducer ko dala or uss configureStore ko variable ka ek naam
   dekr usko export kr diya

6. ab redux toolkit mai reducers ko hum slices k throw lete hai islye
   hum ek reducer mai multiple slice ko add kr shkte hai jo alag alag
   actions ko perform krega, jo bhi action perform hoga wo reducer k
   pass jayga or slice uss action or perform kregi

7. ab hme pta hai reducer slices leta hai islye ab start krenge ki hum
   slice ko create kese kr shakte hai

8. ab hum gye apni counter.js file mai or wha ek counter naam se ek
   slice banai sbse pehele humne ye waali command import ki, import {
   createSlice } from "@reduxjs/toolkit"; jisse hum apni slice ko
   create kr shakte hai ab jb bhi hum kisi variable k throw ek slice
   ko create krte hai krte hai to slice humse 3-4 chize mangta hai
   jese ki name, initialState, and reducer,

9. name jese ki counter , initialState mai koi value like 0 or reducer
   hamari uss initial State ko manage krta hai or ki hmari state +1,
   -1 one hogi or ager hume kuch alag se dependency lagani hai to hum
   uss action provide krte hia

10. see the counter.js file in redux folder you understand in batter
    way

11. isi tra hum counterprivacy.js file mai jayenge or slice ko create
    krenge or fir un slices ko use krne k lie unhe hume export bhi
    krna hoga taaki hum use index.js file mai jo store bna hua hai
    usme use kr ske

12. Ab ager hme slices k actions ko perfore krna hai to hume naming
    variable k throw counterSlice.action ko import krna hoga taaki
    humne jha bhi unka use krna hai kr shke

13. ab like mere pass kcuh +1 -1 one ka button hai or muje un pr
    action perform krna hai to muje ek function k throw action perform
    krunga or uss function mai uss action ko perform krunga jo mene
    import kia hai

14. Aage ki functionality hum compoents m jaakr dekenge ki wo kese
    work krti hai or by chance ager apko functions smz nhi aate to app
    comment kr shkte hoo functionality apko controls mai jaakr milegi

15. This is only the dummy project to understand the Redux or
    redux/toolkit this is very small project hope soo you will enjoy
    it.
