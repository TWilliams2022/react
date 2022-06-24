import React from "react";
import NewPic from "../newpic.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
   <div>
          <h1 className="text-4l justify-center font-bold text-white">
            Frontend Software Developer
          </h1>
          <h3 className="justify-center mt-4 text-white">
            WELCOME TO MY WORLD!
          </h3>

          <div>
            <img
              id="profilepic"
              src={NewPic}
              alt="profilePic"
              className=" rounded-2xl "
            />
          </div>
          <p className="text-white py-4">
            Front-end software developer and former Hospital Corpsman of the
            U.S. Navy. With frontend development, I am able to assess a
            situation, address major bugs, and make timely and smart decisions
            resolving an error. Also, I’m able to professionally create pages
            using various frameworks. I am dedicated to elevating the drive,
            work ethic, and function of a company.
          </p>

          
    </div>
  );
};

export default Home;

{
  /* <img src={NewPic} alt="" /> */
}
