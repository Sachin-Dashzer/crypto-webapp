import React from "react";
import { useState } from "react";

import "./header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const Header = () => {
  const [Active, setActive] = useState(false);

  return (
    <section id="header">
      <div className="top">
        <h5>
          Welcome to <span style={{ color: "var(--third)" }}>crypto</span> for
          all your crypto needs
        </h5>
      </div>

      <nav>
        <img src={logo} alt="" />

        <main style={{ transform: Active ? "translateX(0)" : "" }}>
          <Link to="/" onClick={() => setActive(!Active)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setActive(!Active)}>
            About
          </Link>
          <Link to="/exchange" onClick={() => setActive(!Active)}>
            Exchange
          </Link>
          <Link to="/currencies" onClick={() => setActive(!Active)}>
            Currencies
          </Link>
          <Link to="/contact" onClick={() => setActive(!Active)}>
            Contact
          </Link>
          <ImCancelCircle
            className="cancel"
            onClick={() => setActive(!Active)}
          />
        </main>

        <BiMenuAltRight className="menu" onClick={() => setActive(!Active)} />
      </nav>
    </section>
  );
};

export default Header;
