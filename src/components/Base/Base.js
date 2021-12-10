import './Base.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Base = ({ setPizzaBase, baseName }) => {
    const bases = ['Classic', 'Thin and Crispy', 'Thick Crust']

    return (
        <motion.div
            className="base"
            initial={{ x: '+100vw' }}
            transition={{
                type: 'spring',
                delay: 0.5,
            }}
            animate={{ x: 0 }}
        >
            <div>
                <p className="base__header">Step 1: Choose Your Base</p>

                <div className="base__container">
                    {bases.map((base) => (
                        <div className="base__baseName">
                            <p>{baseName === base ? '>' : ''}</p>
                            <p
                                className={
                                    baseName === base
                                        ? 'base__baseNameSelected'
                                        : ''
                                }
                                onClick={() => {
                                    setPizzaBase(base)
                                }}
                            >
                                {base}
                            </p>
                        </div>
                    ))}
                </div>

                {baseName ? (
                    <motion.div
                        initial={{
                            x: '-100vw',
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 120,
                        }}
                        animate={{
                            x: 0,
                        }}
                    >
                        <Link to="/toppings">
                            <button className="base__nextButton">Next</button>
                        </Link>
                    </motion.div>
                ) : (
                    ''
                )}
            </div>
        </motion.div>
    )
}

export default Base
