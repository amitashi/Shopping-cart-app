import { Box } from '@mui/material'
import ProductsList from '../Components/ProductsList/ProductsList'
import CartComponent from '../Components/Cart/CartComponent'


const Home = () => {

  return (
    <Box>
      <ProductsList/>
      <CartComponent/>
    </Box>
  )
}

export default Home
