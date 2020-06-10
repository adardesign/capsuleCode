import React from "react";
import NavLink from "../../atoms/navLink";
function Nav({ className, navItem }) {
  return (
    <nav className={className}>
      <ul>
        {navItem.map((nav) => {
          return (
            <li>
              <NavLink to={`/${nav.route}`}>{nav.route}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
