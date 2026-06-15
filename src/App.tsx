import { Route, Routes } from 'react-router-dom'
import { BasketPage } from './pages/BasketPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { ShopPage } from './pages/ShopPage'
import { ProductsPage } from './pages/ProductsPage'
import { WholesalePage } from './pages/WholesalePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExperiencePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/wholesale" element={<WholesalePage />} />
    </Routes>
  )
}

export default App
