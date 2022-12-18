import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <a
        className="Header__logo"
        href="https://www.ui.com/"
        target="_blank"
        aria-label="link to main Ubiquiti page"
      />
      <h2 className="Header__title">Devices</h2>
      <a
        className="Header__author"
        href="https://github.com/thorbde"
        target="_blank"
      >
        Thor Bröndum Eklund
      </a>
    </header>
  );
};

export default Header;
