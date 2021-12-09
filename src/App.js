import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Base from './components/Base/Base'
import Toppings from './components/Toppings/Toppings'
import Order from './components/Order/Order'

const App = () => {
    const [pizza, setPizza] = useState({ base: '', toppings: [] })

    const setPizzaBase = (base) => {
        setPizza({ ...pizza, base })
    }

    const addPizzaToppings = (topping) => {
        const containsTopping = pizza.toppings.includes(topping)
        let newToppings = pizza.toppings

        if (containsTopping) {
            newToppings = pizza.toppings.filter((item) => item !== topping)
        } else {
            newToppings = [...pizza.toppings, topping]
        }

        setPizza({ ...pizza, toppings: newToppings })
    }

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route
                    path="/base"
                    element={
                        <Base
                            setPizzaBase={setPizzaBase}
                            baseName={pizza.base}
                        />
                    }
                />

                <Route
                    exact
                    path="/toppings"
                    element={
                        <Toppings
                            addPizzaToppings={addPizzaToppings}
                            pizzaToppings={pizza.toppings}
                        />
                    }
                />

                <Route exact path="/order" element={<Order />} />
            </Routes>
        </Router>
    )
}

export default App
