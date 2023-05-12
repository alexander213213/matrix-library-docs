import logo from "../assets/matrix.svg"
import { useEffect } from "react"

export default function Header({page, setPage}) {

  function handleClick(e) {
    if (page == Number(e.target.id)) return
    setPage(Number(e.target.id))
  }

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <h4>matrix-library</h4>
      </div>
      <nav>
        <ul>
          <li><a id="0" onClick={handleClick}>Home</a></li>
          <li><a id="1" onClick={handleClick}>Docs</a></li>
          <li><a id="2" onClick={handleClick}>Credits</a></li>
        </ul>
      </nav>
    </header>
)
}