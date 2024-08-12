import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header/Header'
import ProductDetailPage from './Page/ProductDetailPage'
import CartComponent from './Components/Cart/CartComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <CartComponent/>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<ProductDetailPage/>}/>
      
    </Routes>

    </BrowserRouter>
  )
}

export default App;
