import React from "react";
import wallet from "../../../Images/Home/wallet.svg";
import apps from "../../../Images/Home/apps-svgrepo-com.svg";
import picture from "../../../Images/Home/image.svg";
import label from "../../../Images/Home/label.svg";

const Instruction = () => {
  return (
    <div className="banner-bg pb-10">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
        <div className="mx-2 text-center text-white card-body">
          <img
            src={wallet}
            alt="wallet"
            style={{ width: "30px" }}
            className="mx-auto my-3"
          />
          <h3 className="text-2xl font-bold mb-3">Set Up Your Wallet</h3>
          <p className="font-thin">
            Once you’ve set up your wallet of choice, connect it to OpenSeaby
            clicking the NFT Marketplacein the top right corner.
          </p>
        </div>
        <div className="mx-2 text-center text-white">
          <img
            src={apps}
            alt="apps"
            style={{ width: "30px" }}
            className="mx-auto my-3"
          />
          <h3 className="text-2xl font-bold mb-3">Create Your Collection</h3>
          <p className="font-thin">
            Click Create and set up your collection. Add social links, a
            description, profile & banner images, and set a secondary sales fee.
          </p>
        </div>
        <div className="mx-2 text-center text-white">
          <img
            src={picture}
            alt=""
            style={{ width: "30px" }}
            className="mx-auto my-3"
          />
          <h3 className="text-2xl font-bold mb-3">Add Your NFTs</h3>
          <p className="font-thin">
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats
          </p>
        </div>
        <div className="mx-2 text-center text-white">
          <img
            src={label}
            alt="label"
            style={{ width: "30px" }}
            className="mx-auto my-3"
          />
          <h3 className="text-2xl font-bold mb-3">List Them For Sale</h3>
          <p className="font-thin">
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
