import { useState } from "react"
import { useEffect } from "react"


export default function Credits() {

  let [contributors, setContributors] = useState(["alexander213213"])

  useEffect(() => {
    (async function () {
      let response = await fetch("contributors.json")
      let data = await response.json()
      setContributors(data)
    })()
  },[])

  function handleClick(e) {
    let id = e.target.id.replace(/\D/g,'')
    window.location = `https://github.com/${contributors[id]}`
  }

  function getProfiles() {
    let images = []
    for (let i in contributors) {
      images.push(
        <div id={`profile=${i}`} className="profiles" key={i} onClick={handleClick}>
          <img src={`https://github.com/${contributors[i]}.png`} />
          <h2 key={i}>{contributors}</h2>
        </div>)
    }
    return images
  }

  return (
    <div className="credits">
      <h1>Contributors</h1>
      {getProfiles()}
    </div>
  )
}