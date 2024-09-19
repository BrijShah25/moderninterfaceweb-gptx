import React from 'react';
import possibilityImage from '../../assets/possibility1.png';
import './possibility.css';

const Possibility = () => (
  <div className="gptx__possibility section__padding" id="possibility">
    <div className="gptx__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gptx__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
