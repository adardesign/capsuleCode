import React from "react";
import NavLink from '../../atoms/navLink'

function Nav({ navItems, className }) {
  return (
    <nav className={className}>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.name}>
              <NavLink to={`/${item.route}`}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
