import React from 'react';
import NavBar from '../Components/NavBar';

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_left">
        <div className="main_logo">{/* The logo goes here  */}</div>
        <div className="home_left_bg"></div>
      </div>
      <div className="home_right">
        <NavBar />
        <div className="landing_para">
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
