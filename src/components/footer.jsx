import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer id='footer'>
      <div>
        © Copyright {currentYear}, designed & developed by{" "}
        <span className='developer-name'> @Yerni Kumar</span>
      </div>
    </footer>
  );
}

export default Footer;
