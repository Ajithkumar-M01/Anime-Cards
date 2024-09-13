import SpiritedAway from "./SpiritedAway"

import redGate from "../assets/red gate.jpg"
import bathHouse from "../assets/bath house 1.jpg"
import zenibaCottage from "../assets/zeniba cottage.webp"
import chihiro from "../assets/chihiro.jpg"
import haku from "../assets/haku.jpg"
import noFace from "../assets/no face.webp"
const App9 = () => {

    const places = [
        {id:"1", image: redGate ,title: "The Red Gate", description: "This gate connects the Human World to the Spirit Realm. It appears as a large clock tower built onto a tunnel."},
        {id:"2", image: bathHouse, title: "The Bath House", description: "Owned by Yubaba, the Bathhouse is a bustling hub where spirits come to relax and rejuvenate."},
        {id:"3", image: zenibaCottage, title: "Zeniba's Cottage", description: " Zeniba, Yubaba’s twin sister, lives in a cozy cottage. It’s a quieter spot compared to the bustling Bathhouse."}
    ]

    const characters = [
        {id:"4", image: chihiro, title: "Chihiro Ogino", description: "The film’s protagonist, Chihiro, gets trapped in the spirit world and works at the bathhouse to rescue her parents.", following: 1000},
        {id:"5", image: haku, title: "Haku", description: " A mysterious boy who helps Chihiro Ogino navigate the spirit realm. His true identity holds secrets and surprises.", following: 950},
        {id:"6", image: noFace, title: "No-Face", description: "No-Face is a lonely spirit who becomes fixated on Chihiro due to her sincerity. He appears as a black shadow with a Noh mask for a face.", following: 1100}
    ]

  return (
    <div className="body9">
        <h1 className="head9">Spirited Away</h1>
        <p className="author">By Hayao Miyazaki</p>
        <h2 className="heading9">Famous Places to Visit</h2>
        <SpiritedAway items1={places}/>
        <h2 className="heading9">Famous Characters to Follow</h2>
        <SpiritedAway items2={characters}></SpiritedAway>
    </div>
  )
}

export default App9
