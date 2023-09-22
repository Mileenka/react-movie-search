import PropTypes from "prop-types";
import "./Footer.css";

const Footer = (props) => {
  const { attributionText, authorLink } = props;

  return (
    <div className="footer">
      <div className="attribution">
        {attributionText} by <a href={authorLink}>Mileenka</a>.
      </div>
    </div>
  );
};

Footer.propTypes = {
  attributionText: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
};

export default Footer;
