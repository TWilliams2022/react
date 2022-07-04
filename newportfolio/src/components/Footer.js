import React from 'react'
import NewPic from "../newpic.png";
import Reactjs from "../reactjs.png"
import Git from "../git.png";



const footer = () => {
  return (
    <footer class="footer items-center p-4">
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-center">
        <a>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={NewPic}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>
        <a>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Git}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>
        <a>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Reactjs}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default footer