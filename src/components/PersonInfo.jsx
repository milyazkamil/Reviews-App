import { people } from "../data";
import Quotes from "./SvgComponents/Quotes";

const PersonInfo = ({ order }) => {
  const {name, job, image, description} = people[order];

  return (
    <div id="person-info">
      <div id="image-container">
        <span id="quotes">
          <Quotes />
        </span>
        <img id="image" src={image} alt="person image" />
      </div>
      <h2 id="name">{name}</h2>
      <h3 id="job">{job}</h3>
      <p id="description">{description}</p>
    </div>
  )
}
export default PersonInfo;