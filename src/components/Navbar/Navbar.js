import './Navbar.css'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <div className="navbar">
            {/* <img
                src="https://p1.hiclipart.com/preview/539/999/701/pizza-hut-logo-pizza-pizza-company-italian-cuisine-food-pepperoni-fast-food-helmet-png-clipart.jpg"
                alt=""
            /> */}
            <motion.h1 initial={{ y: -250 }} animate={{ y: -10 }}>
                Pizza Joint
            </motion.h1>
        </div>
    )
}

export default Navbar
