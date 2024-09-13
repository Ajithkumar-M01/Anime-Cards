import "./SpiritedAway.css"
import propTypes from "prop-types"
import FollowButton from "./FollowButton"
const SpiritedAway = (props) => {

    const placeItems = props.items1
    const characItems = props.items2

    const placesList = placeItems.map((place)=>(
        <div>
            <div key={place.id} className="card1">
                <img src={place.image} alt={place.title} className="imgp"/>
                <h2>{place.title}</h2>
                <p>{place.description}</p>
            </div>
        </div>
    ))
    
    const charactersList = characItems.map((charac) => (
      <FollowButton key={charac.id} charac={charac} />
    ));
            
  return (
    <div className="places">
      {placesList}
      {charactersList}
    </div>
  )
}

SpiritedAway.propTypes = {
    items1: propTypes.array,
    items2: propTypes.array
}

SpiritedAway.defaultProps = {
    items1: [],
    items2: []
}

export default SpiritedAway
