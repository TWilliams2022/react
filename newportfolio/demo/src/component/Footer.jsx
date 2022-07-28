import React from 'react'

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
  return (
    <div>
      <footer>
        <p id="copy"> Copyright - {year}</p>
      </footer>
    </div>
  );
}

export default Footer