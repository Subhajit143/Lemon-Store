import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import SingleProduct from './Pages/SingleProduct';
import AddProduct from './Pages/Add-Product';
import DescriptionForm from './Pages/DescriptionForm';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Products />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Add-Product' element={<AddProduct/>}/>
            <Route path='/DescriptionForm' element={<DescriptionForm/>}/>
            <Route path='/:id' element={<SingleProduct/>}/>
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
