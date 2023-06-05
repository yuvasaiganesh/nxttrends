// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

import Header from '../Header'

const Home = () => (
  <Link to="/">
    <div className="homeSection">
      <Header />
      <div className="contentSection">
        <div className="section">
          <h1 className="heading">Clothes That Get You Noticed</h1>
          <p className="paragraph">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution.
          </p>
          <button type="button" className="button1">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="addImage"
        />
      </div>
    </div>
  </Link>
)
export default Home
