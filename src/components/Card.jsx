import { useState } from "react";
import PersonInfo from "./PersonInfo";
import LeftArrow from "./SvgComponents/LeftArrow";
import RightArrow from "./SvgComponents/RightArrow";

const Card = () => {
  const [order, setOrder] = useState(0);

  //if the random number is equal to the order number then generate a new random number
  const randomOrder = () => {
    let random;
    do {
      random = Math.floor(Math.random() * 5);
    } while (order === random)
    {
      setOrder(random);
    }
  };

  return (
    <article id="card">
      <PersonInfo order={order} />
      <div id="change-person">
        <div id="arrows">
          <span
            id="left-arrow"
            onClick={() => setOrder(order > 0 ? order - 1 : 4)}
          >
            <LeftArrow />
          </span>
          <span
            id="right-arrow"
            onClick={() => setOrder(order < 4 ? order + 1 : 0)}
          >
            <RightArrow />
          </span>
        </div>
        <button id="surprise-me" type="button" onClick={randomOrder}>
          Surprise Me
        </button>
      </div>
    </article>
  )
}
export default Card;