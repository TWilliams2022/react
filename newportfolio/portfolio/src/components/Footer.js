import React from 'react'
import Char from '../charizard.gif'
import Vena from "../vena.gif";
import Blast from "../blast.gif";
import Pika from "../pika.gif";

// pokemon cards from https://www.kennymays.com/ 

const footer = () => {
  return (
    <footer class="footer mx-auto items-center ">
      <div class="mx-auto md:grid-flow-col gap-4 sm:grid-flow-row  md:place-self-center sm:place-self-center md:justify-self-center">
        <a>
          <h1 className=" text-2xl text-center cursor-pointer text-red-500 hover:text-white focus:outline-none ">
            HTML
          </h1>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Char}
              class=" shadow-xl w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>

        <a>
          <h1 className=" text-2xl text-center cursor-pointer text-blue-600  hover:text-white  focus:outline-none ">
            REACTJS
          </h1>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Blast}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>
        <a>
          <h1 className=" text-2xl text-center cursor-pointer text-emerald-500 hover:text-white ocus:outline-none ">
            JAVA
          </h1>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Vena}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>
        <a>
          <h1 className="   text-2xl text-center cursor-pointer text-yellow-400 hover:text-white focus:outline-none ">
            JAVASCRIPT
          </h1>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Pika}
              class="  w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default footer