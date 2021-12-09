import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="home__body">
                <h1>Welcome to Pizza Joint</h1>
                <Link to="/base">
                    <button className="home__createButton">
                        Create Your Pizza
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
