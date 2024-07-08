# Redux installation

1. npm i redux
2. npm i react-redux
3. Create store folder with Index.js file //for wrapping all the
   components not mandartry to use index.js file
4. Create the store using. (import {createStore} from redux).
5. Providing the store with react 1.Provider form react-redux 2.
   <Provider store=(store)>App</Provider>
6. Using the store
7. useSelector hook gets a slice of the store. const counter =
   useSelectore(state => state.counter)
