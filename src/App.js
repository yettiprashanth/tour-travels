import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Hotel from './componets/hotel/Hotel';
import Home from './page/home/Home';
import List from './page/list/List';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
