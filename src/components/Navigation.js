import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>Accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              exact
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 1</li>
            </NavLink>
            <NavLink
              to="/project-2"
              exact
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 2</li>
            </NavLink>
            <NavLink
              to="/project-3"
              exact
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 3</li>
            </NavLink>
            <NavLink
              to="/project-4"
              exact
              activeClassName="nav-active"
              className="hover"
            >
              <li>Projet 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
