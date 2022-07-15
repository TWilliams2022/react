import React from "react";
import NewPic from "../newpic.png";
import Pic2 from "../Attachment-1.JPEG";
import Pic3 from "../IMG-4012(1).JPG";
import Pic4 from "../IMG-5234(1).jpg";

const Home = () => {
  return (
    <div>
      <div className=" hero container max-w-screen-lg mx-auto pb-1 flex ">
        <div class="w-64 carousel rounded-box hero container max-w-screen-lg mx-auto pb-3 flex ">
          <div class="carousel-item w-full">
            <img
              id="profilepic"
              src={NewPic}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>

          <div class="carousel-item w-full">
            <img
              id="profilepic"
              src={Pic2}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              id="profilepic"
              src={Pic3}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              id="profilepic"
              src={Pic4}
              class="w-full mx-auto rounded-2xl mt-1 "
              alt="PRO"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-xl mx-1 sm:mx-2 text-center ">
          Front-end software developer and former Hospital Corpsman of the U.S.
          Navy. With frontend development I am able to assess a situation,
          address major bugs, and make timely and smart decisions resolving an
          error. Also, I am able to professionally create pages using various
          frameworks. I'm dedicated to elevating the drive, work ethic, and
          functionality of a company.
        </p>
      </div>
      <div>
        <h1 className="text-center text-white  text-4xl mb-2 mt-2">
          CHOSEN SKILLS
        </h1>
      </div>
    </div>
  );
};
    
export default Home;
