import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
