import Header from "./components/Header";
import Hero from "./components/Hero"
import Footer from "./components/Footer";
import Docs from "./components/Docs";
import { useState } from "react";
import Credits from "./components/Credits";

export default function App() {
  const [ page, setPage ] = useState(0)
  console.log(page)

  const content = [<Hero setPage={setPage} />, <Docs />, <Credits />]

  return (
    <div className="body">
      <Header
        page={page}
        setPage={setPage}
      />
      {content[page]}
      {page != 1 ? <Footer /> : null}
    </div>
  )
}