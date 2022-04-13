import React from "react";

const Container = () => {
  return (
    <div className="container mx-auto hero grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-y-0 md:gap-x-1 pb-10 px-4">
      <img src="/build/_assets/outbreak-pink-OMPBSBVI.svg" className="banner banner-pink z-20"/>
        <div className="md:flex md:items-center z-30">
          <div>
            <h1 className="hero-heading uppercase">The Possessed
            <sup className="super"> NFT</sup></h1>
            <p className="text-center md:text-left">An innovative new NFT developed by PSSSSD Labs to enhance your creativity. <br/>
            </p>
            <p className="mt-4 text-center md:text-left">Outbreak starts in Q2 2022.</p>
          </div>
        </div>
        <div className="md:flex md:items-center z-10">
            <div className="lf-player-container">
              <div id="lottie" className="hero-lottie">
                <canvas width="1050" height="1048" ></canvas>
              </div>
            </div>
        </div>
        <img src="/build/_assets/outbreak-orange-2PHTHBFH.svg" className="banner banner-orange" />
        <img src="/build/_assets/outbreak-green-MOGZPMZQ.svg" className="banner banner-green z-20" />
    </div>
  )
}

export default Container;
