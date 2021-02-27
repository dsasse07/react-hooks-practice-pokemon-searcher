import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon:{ id, name, hp, sprites }} ) {

  const [isFlipped, setIsFlipped] = useState(false)

  function flipCard(){
    setIsFlipped(!isFlipped)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={isFlipped ? sprites.back : sprites.front} alt={name} onClick={flipCard}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
