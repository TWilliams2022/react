import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
  //ADDING STATE FOR THE HAMBURGER MENU
const [nav, setNav] = useState(false);

//CAN WRITE JS HERE
const tags = [

  // created so that i can .map them into the navbar
  {
    id: 1,
  link: 'HOME',
  },
  {
    id: 2,
  link: 'ABOUT',
  },
  {
    id: 3,
  link: 'PORTFOLIO',
  },
  {
    id: 4,
  link: 'EXPERIENCE',
  },
  {
    id: 5,
  link: 'CONTACT',
  }
] 

  return (

    <div className="flex justify-between items-center w-full h-20 px-4 text-emerald-400 bg-black fixed">
    <div>
      <h1 className='text-5xl font-myFont ml-2'>Williams</h1>
    </div>

      <ul className="hidden md:flex">
      {tags.map(({id, link}) => (
        <li
         key={id} className='px-4 text-pink-400 cursor-pointer hover:scale-125 duration-500'>

        {link}

        </li>
      ))}
      </ul>
          
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-pink-400 md:hidden ">
       {/* ternary.. if nav is true we want this... if false.. ect */}
       {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
       </div>

       {/* ternary.. nav is true & has this.. we want this... */}

{nav && (
  <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-green-700 text-white'>
      {tags.map(({id, link}) => (
        <li
         key={id}  className='px-4 cursor-pointer py-6 text-4xl'>

        {link}
        </li>
      ))}
      </ul>

)}

      </div>

  );
};

export default NavBar;