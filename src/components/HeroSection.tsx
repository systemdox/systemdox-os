import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="sapHome" className="h-[626px] overflow-x-hidden relative bg-[#1B90FF]">
      <div className="page-center plr20">
        <div className="heroContent-wrap flex gap-12 mt-[76px]">
          <div className="content-container flex flex-col justify-center h-[550px] w-1/2">
            <h1 className="heading xxl text-white mt-0 mb-5">
              Transform your code into comprehensive documentation: Harness the power of existing artifacts in your repository.
            </h1>
            <p className="text-white body large">
              Hello to the future of system design.
            </p>
            <div className="flex mt-10 flex-wrap gap-8">
              <a href="#" className="sapBtn primary invert requestDemo">
                Request a demo
              </a>
            </div>
          </div>
          <div className="lottie-container relative w-1/2">
            {/*<dotlottie-player id="dottiebg" className="absolute bottom-0 left-0 w-[650px] h-[550px]">*/}
            {/*</dotlottie-player>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
