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
                transition={{
                    delay: 0.5,
                    duration: 1,
                }}
                animate={{
                    opacity: 1,
                }}
                className="home__body"
            >
                <h1>Welcome to Pizza Joint</h1>

                <Link to="/base">
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            textShadow: '0px 0px 3px rgb(255, 255, 255)',
                            boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                        }}
                        className="home__createButton"
                    >
                        Create Your Pizza
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    )
}

export default Home
