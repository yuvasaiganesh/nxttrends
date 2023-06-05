// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="header1">
      <div className="section1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout"
        />
      </div>

      <ul className="section2">
  <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="headerImage"
        />
  </li>
  <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="headerImage"
        />
  </li>
  <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="headerImage"
        />
  </li?
      </ul>
    </div>

    <div className="header2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="optionSection">
        <li className="headerContent">Home</li>
        <li className="headerContent">Products</li>
        <li className="headerContent">Cart</li>
        <button type="button" className="logOutButton">
          Logout
        </button>
      </div>
    </div>
  </>
)

export default Header
