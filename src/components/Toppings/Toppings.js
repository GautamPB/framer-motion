import './Toppings.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Topping = ({ addPizzaToppings, pizzaToppings }) => {
    const toppings = [
        'Mushrooms',
        'Peppers',
        'Onions',
        'Olives',
        'Extra Cheese',
        'Tomatoes',
    ]

    return (
        <div className="toppings">
            <p className="toppings__header">Step 2: Choose Your Toppings</p>

            <div className="toppings__container">
                {toppings.map((topping) => (
                    <div className="toppings__toppingsName">
                        <p>{pizzaToppings.includes(topping) ? '>' : ''}</p>
                        <motion.p
                            whileHover={{
                                scale: 1.3,
                                color: '#f8e112',
                                originX: 0,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                            }}
                            className={
                                pizzaToppings.includes(topping)
                                    ? 'toppings__toppingNameSelected'
                                    : ''
                            }
                            onClick={() => addPizzaToppings(topping)}
                        >
                            {topping}
                        </motion.p>
                    </div>
                ))}
            </div>

            {pizzaToppings.length ? (
                <Link to="/order">
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            textShadow: '0px 0px 3px rgb(255, 255, 255)',
                            boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                        }}
                        className="toppings__nextButton"
                    >
                        Order
                    </motion.button>
                </Link>
            ) : (
                ''
            )}
        </div>
    )
}

export default Topping
