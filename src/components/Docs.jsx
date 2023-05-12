import { useState } from "react"
import Footer from "./Footer"
import Initializing from "./Docs-components/Initializing"
import Properties from "./Docs-components/Properties"
import Methods from "./Docs-components/Methods"
import StaticMethods from "./Docs-components/StaticMethods"

export default function Docs() {

  const [ page, setPage ] = useState(0)
  function handlePagination(e) {
    if (Number(e.target.id) == page) return
    setPage(Number(e.target.id))
  }

  const content = [<Initializing />, <Properties />, <Methods />, <StaticMethods />]

  return (
    <div className="docs">
      <nav>
        <ul>
          <li id="0" onClick={handlePagination}>Initializing</li>
          <li id="1" onClick={handlePagination}>Properties</li>
          <li id="2" onClick={handlePagination}>Methods</li>
          <li id="3" onClick={handlePagination}>Static Methods</li>
        </ul>
      </nav>
      <main>
        {content[page]}
        <Footer />
      </main>
    </div>
  )
}