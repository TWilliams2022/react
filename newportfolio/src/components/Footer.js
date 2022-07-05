import React from 'react'
import Char from '../charizard.gif'
import Vena from "../vena.gif";
import Blast from "../blast.gif";
import Pika from "../pika.gif";

// pokemon cards from https://www.kennymays.com/ 

const footer = () => {
  return (

    
    <footer class="footer items-center ">
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-center">
        <a>
          <h1 className=" text-2xl text-center cursor-pointer text-white hover:text-red-500 focus:outline-none ">
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
          <h1 className=" text-2xl text-center cursor-pointer text-white hover:text-blue-600  focus:outline-none ">
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
          <h1 className=" text-2xl text-center cursor-pointer text-white hover:text-emerald-500 ocus:outline-none ">
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
          <h1 className="  text-2xl text-center cursor-pointer text-white hover:text-yellow-400 focus:outline-none ">
            JAVASCRIPT
          </h1>
          <div class="carousel-item w-full">
            <img
              id="footerskill"
              src={Pika}
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