import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowProducts from './components/ShowProducts'
import CreateProducts from './components/CreateProduct'
import EditProducts from './components/EditProduct'

function App() {
  return (
    <main className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowProducts/>}/>
            <Route path='/create' element={<CreateProducts/>}/>
            <Route path='/edit/:id' element={<EditProducts/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
