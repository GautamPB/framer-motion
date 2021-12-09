import './Home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className="home">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                className="home__body"
            >
                <h1>Welcome to Pizza Joint</h1>

                <Link to="/base">
                    <motion.button animate={{}} className="home__createButton">
                        Create Your Pizza
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    )
}

export default Home
