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

      <div className="section2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="headerImage"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="headerImage"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="headerImage"
        />
      </div>
    </div>

    <div className="header2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="optionSection">
        <p className="headerContent">Home</p>
        <p className="headerContent">Products</p>
        <p className="headerContent">Cart</p>
        <button type="button" className="logOutButton">
          Logout
        </button>
      </div>
    </div>
  </>
)

export default Header
