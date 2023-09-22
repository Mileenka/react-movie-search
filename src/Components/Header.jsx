import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ logoText, quoteText }) => {
  return (
    <header>
      <div className="logo-box">
        <p className="logo">{logoText}</p>
      </div>
      <p className="quote">{quoteText}</p>
    </header>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
};

export default Header;
