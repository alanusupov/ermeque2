import React from "react";
import vidsrc from "../media/introvid.mp4";
function Info() {
  return (
    <div className="info">
      <div className="info-example">
        <div className="info-example-info">
          <h3 className="info-example-title">Пример декатировки</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus condimentum et duis
            leo habitasse. Vel quis sit sed diam vel amet scelerisque. Habitasse
            sit dictum nam lectus id lacinia nam sed. Cursus lectus id duis
            ullamcorper nibh id facilisi ac arcu.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus condimentum et duis
            leo habitasse. Vel quis sit sed diam vel amet scelerisque. Habitasse
            sit dictum nam lectus id lacinia nam sed. Cursus lectus id duis
            ullamcorper nibh id facilisi ac arcu.
          </p>
        </div>
        <div className="info-example-video">
          <video controls>
            <source src={vidsrc} />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Info;
