import {useEffect, useState} from "react"

export default function Hero({setPage}) {
  const [list, setList] = useState([1,2,3,4,5,6,7,8,9])
  
  useEffect(() => {
    let interval
    document.querySelector(".display").addEventListener("mouseenter", (e) => {
      interval = setInterval(() => {
        setList(prevList => prevList.map(item => {
          let rand = Math.floor(Math.random() * 10)
          return rand == item ? rand : rand == 9 ? rand - 1 : rand + 1
        }))
      }, 200)
      e.stopPropagation()
    }, false)

    document.querySelector(".display").addEventListener("mouseleave", e => {
      clearInterval(interval)
      e.stopPropagation()
    },false)

  }, [])

  return (
    <div className="hero">
      <div className="container">
        <div className="display">
          <ul>
            {list.map((item, index) => {
              return (<li key={index}>{item}</li>);
            })}
          </ul>
        </div>
        <div className="card">
          <h1>Matrix-Library</h1>
          <h4>making matrices intuitive and easy</h4>
          <a onClick={()=>setPage(1)} href="#">
            <div></div>
            <span>
              Docs <i className="fa-solid fa-arrow-right"></i>
            </span>
            </a>
        </div>
      </div>
    </div>
  )
}