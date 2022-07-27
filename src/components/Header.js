import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, title_about, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="title">
        {location.pathname === "/about" ? title_about : title}
      </h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "#DC143C" : "#008080"}
          text={showAdd ? "x" : "+"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "My Contacts",
  title_about: "About",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
