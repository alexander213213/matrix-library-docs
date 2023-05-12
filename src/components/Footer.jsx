import { useEffect } from "react";
import logo from "../assets/matrix-light.svg"


export default function Footer() {
  useEffect(() => {
    document.querySelector(".email").addEventListener("click", () => {
      navigator.clipboard.writeText("alexandergracilla@gmail.com");
      alert("copied to clipboard ")
    })
  },[])

  return (
    <footer>
      <div className="container">

        {/* <div className="section">
          <h3>About Us</h3>
          <ul>
            <li>About</li>
            <li>About Me</li>
            <li>Credits</li>
          </ul>
        </div> */}

        <div className="section">
          <h3>My Accounts</h3>
          <ul className="accounts">
            <li><a href="https://github.com/alexander213213/"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/alexander-gracilla-5a785a259/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><button className="email"><i className="fa-regular fa-at"></i></button></li>
          </ul>
        </div>
      </div>
      <img src={logo} alt="" />
    </footer>
  )
}