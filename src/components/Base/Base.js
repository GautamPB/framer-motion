import './Base.css'
import { Link } from 'react-router-dom'

const Base = ({ setPizzaBase, baseName }) => {
    const bases = ['Classic', 'Thin and Crispy', 'Thick Crust']

    return (
        <div className="base">
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
                <Link to="/toppings">
                    <button className="base__nextButton">Next</button>
                </Link>
            ) : (
                ''
            )}
        </div>
    )
}

export default Base
