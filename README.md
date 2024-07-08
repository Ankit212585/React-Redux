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

