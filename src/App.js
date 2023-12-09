import { useState } from 'react';
import { dummyData } from './data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './routes/Header';
import View from './routes/View';
import Add from './routes/Add';
import Item from './routes/Item';
import ItemDefault from './routes/ItemDefault';
import Edit from './routes/Edit';
import NoMatch from './routes/NoMatch';

import './App.css';

function App() {

  const [list, setList] = useState(dummyData);

  const handlerAddProduct = (product) => {
    const newList = [...list, product];
    setList(newList);
  }

  const handlerEditProduct = (updatedProduct) => {
    setList(list.map(item => item.id === updatedProduct.id ? updatedProduct : item));
  };

  const handlerDeleteProduct = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Header />}>

            <Route path='/view' element={<View list={list} />} >
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handlerDeleteProduct} />} />
            </Route>
            <Route path='/add' index element={<Add handlerAddProduct={handlerAddProduct} />} />
            <Route path='/edit/:id' element={<Edit list={list} handlerEditProduct={handlerEditProduct} />} />

          </Route>

          <Route path='*' element={<NoMatch />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

