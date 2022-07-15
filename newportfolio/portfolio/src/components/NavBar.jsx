import React from 'react';

const NavBar = () => {

  return (
    <div class="navbar bg-transparent  ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <a href="https://www.linkedin.com/in/tyreik-williams-b0563a1a4/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/TWilliams2022">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <h1 class="btn btn-ghost normal-case text-yellow-400 text-xl">
          Williams
        </h1>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <img
            className="App-logo"
            id="ball"
            src="https://w0.peakpx.com/wallpaper/769/429/HD-wallpaper-pokeball-amoled-black-iphone-pikachu-pokemon-samsung-symbol.jpg"
            alt="pokeball"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default NavBar;