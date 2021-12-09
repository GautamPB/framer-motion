import './Order.css'

const Order = ({ pizzaBase, pizzaToppings }) => {
    return (
        <div className="order">
            <h1>Thank you for your order!</h1>

            <div className="order__summary">
                <p>You ordered a {pizzaBase} pizza with:</p>
                <div className="order__summaryToppings">
                    {pizzaToppings.map((topping) => (
                        <p>{topping}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Order
