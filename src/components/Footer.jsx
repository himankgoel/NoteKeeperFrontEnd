import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Himank Goel ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
