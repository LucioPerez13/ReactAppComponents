import React from 'react'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Product from './components/product'

function App() {
  const store= generateStore()
  return (
    <Provider store={store}>
      <Product />
    </Provider>
  );
}

export default App;
