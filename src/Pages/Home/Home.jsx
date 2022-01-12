import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import Instruction from "../../Components/Home/Instruction/Instruction";
import LiveActions from "../../Components/Home/LiveActions/LiveActions";
import PopularCollection from "../../Components/Home/PopularCollection/PopularCollection";
import TopSeller from "../../Components/Home/TopSeller/TopSeller";

const Home = () => {
  return (
    <div>
      <Banner />
      <Instruction />
      <LiveActions />
      <PopularCollection />
      <TopSeller />
    </div>
  );
};

export default Home;
