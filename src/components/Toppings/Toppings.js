import './Toppings.css'
import { Link } from 'react-router-dom'

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
                        <p
                            className={
                                pizzaToppings.includes(topping)
                                    ? 'toppings__toppingNameSelected'
                                    : ''
                            }
                            onClick={() => addPizzaToppings(topping)}
                        >
                            {topping}
                        </p>
                    </div>
                ))}
            </div>

            {pizzaToppings.length ? (
                <Link to="/order">
                    <button className="toppings__nextButton">Next</button>
                </Link>
            ) : (
                ''
            )}
        </div>
    )
}

export default Topping
