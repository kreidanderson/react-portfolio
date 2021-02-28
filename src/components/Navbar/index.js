import React from "react";

function Navbar(props) {
  const styles = {
    color: "black",
    fontFamily: `"Abril Fatface", "cursive"`
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
        className="navbar-brand"
        style={styles}
        href="#"
      >
        Katie Reid-Anderson
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div style={styles} className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a
            className="nav-item nav-link"
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className={
              props.currentPage === "About" ? "nav-link active" : "nav-link"
            }
          >
            About
          </a>
          <a
            className="nav-item nav-link"
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className={
              props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
          <a
            className="nav-item nav-link"
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={
              props.currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
