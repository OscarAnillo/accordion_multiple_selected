import { useState } from "react";
import data from "./data.json";
import "./image-slider.css";

export const ImageSliderJSON = () => {
  const [crewData, setCrewData] = useState(data.crew[0]);

  return (
    <div className="image-slider-div">
      <div className="image-slider-div-inner">
        <h1>Crew Members</h1>
        <img src={crewData.images.webp} alt="crew-member" />
        <div className="row">
          <h3>{crewData.name}</h3>
          <p>{crewData.role}</p>
        </div>
        <p className="bio">{crewData.bio}</p>
      </div>
      <div>
        {data.crew.map((item, i) => (
          <button
            key={i}
            onClick={() => setCrewData(item)}
            className="crew-btn"
          ></button>
        ))}
      </div>
    </div>
  );
};
