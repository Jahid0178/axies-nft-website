import React from "react";
import BannerImg from "../../../Images/Home/img-1.png";

const Banner = () => {
  return (
    <div className="banner-bg w-100 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="flex-1">
            <h1 className="text-6xl text-center lg:text-left text-white">
              Discovery, and collect extraordinary{" "}
              <span className="small-text">Monster</span> NFTs
            </h1>
            <p className="text-center text-white text-lg mt-3 lg:text-left">
              Marketplace For Monster Character Collections Non Fungible Token
              NFTs
            </p>
            <button className="btn-primary mt-5 font-bold">
              <i class="fas fa-rocket"></i> Explore
            </button>
            <button className="btn-primary mt-5 ml-5 font-bold">
              <i class="far fa-file-alt"></i> Create
            </button>
          </div>
          <div className="flex-1">
            <img src={BannerImg} alt="Banner-Images" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
