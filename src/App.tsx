import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header/Header'
import ProductDetailPage from './Page/ProductDetailPage'
import CartComponent from './Components/Cart/CartComponent'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <CartComponent/>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<ProductDetailPage/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
