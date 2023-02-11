import React from "react";
import vid1 from "../Assests/vid1.mp4";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_left">
        <video src={vid1} autoPlay muted loop />
      </div>
      <div className="home_right">
        <div className="landing_para">
          <h1>
            Made for Growth
            <hr />
          </h1>
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque
            in earum beatae nihil iste eum, fuga explicabo dignissimos delectus
            vero, mollitia labore? Blanditiis ullam aliquam laborum, dolor
            delectus reiciendis vitae minus, porro optio facilis expedita
            eveniet, consectetur cum repudiandae. Ab, est ducimus. Magni dolor
            laboriosam quod ex, molestiae error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
