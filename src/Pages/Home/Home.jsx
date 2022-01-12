import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import Instruction from "../../Components/Home/Instruction/Instruction";
import LiveActions from "../../Components/Home/LiveActions/LiveActions";

const Home = () => {
  return (
    <div>
      <Banner />
      <Instruction />
      <LiveActions />
    </div>
  );
};

export default Home;
