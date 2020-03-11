import React, { useEffect } from "react";
import api from "../api.js";

// const NavBar = () => (
//   <nav className="navbar">
//     <div className="navbar-menu">
//       <div className="navbar-start">
//         <div className="navbar-item">Profile</div>
//         <div className="navbar-item">Expenses</div>
//         <div className="navbar-item">Analytics</div>
//       </div>
//     </div>
//   </nav>
// );

// const NavBar = () => (
//   <nav class="level">
//     <p class="level-item has-text-centered">
//       <a class="link is-info">Profile</a>
//     </p>
//     <p class="level-item has-text-centered">
//       <a class="link is-info">Expenses</a>
//     </p>
//     <p class="level-item has-text-centered">
//       <a class="link is-info">Analytics</a>
//     </p>
//   </nav>
// );

const NavBar = () => (
  <nav className="tabs is-centered">
    <ul>
      <li className="is-active">
        <a>Profile</a>
      </li>
      <li>
        <a>Expenses</a>
      </li>
      <li>
        <a>Analytics</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
