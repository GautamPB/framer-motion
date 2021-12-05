import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Base from './components/Base/Base'
import Toppings from './components/Toppings/Toppings'
import Order from './components/Order/Order'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/base" element={<Base />} />
                <Route exact path="/toppings" element={<Toppings />} />
                <Route exact path="/order" element={<Order />} />
            </Routes>
        </Router>
    )
}

export default App
