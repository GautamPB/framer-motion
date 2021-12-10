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
                            <motion.p
                                whileHover={{
                                    color: '#f8e112',
                                    scale: 1.3,
                                    originX: 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                }}
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
                            </motion.p>
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
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    textShadow:
                                        '0px 0px 3px rgb(255, 255, 255)',
                                    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                                }}
                                className="base__nextButton"
                            >
                                Next
                            </motion.button>
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
