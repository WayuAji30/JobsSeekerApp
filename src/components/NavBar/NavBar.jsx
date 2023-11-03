import React from "react";

function NavBar() {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
            <strong>Job</strong>Seacrh</h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Register</li>
      </div>
    </div>
  )
}

export default NavBar;