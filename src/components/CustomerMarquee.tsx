import React from 'react';

const CustomerMarquee: React.FC = () => {
  return (
    <section id="customer-marquee" className="marquee pt-[70px] pb-[50px]">
      <div className="page-center plr20">
        <p className="eyebrow small pb-10 text-center text-gray-600">
          Companies that trust in System DoX
        </p>
      </div>
      <div className="marquee-wrap h-[100px] overflow-hidden relative w-full">
        <div className="flex">
          {/* Add your customer logos here */}
          <div className="marquee-item flex plr60 justify-center items-center">
            <img src="path-to-logo-1" alt="Customer Logo 1" />
          </div>
          <div className="marquee-item flex plr60 justify-center items-center">
            <img src="path-to-logo-2" alt="Customer Logo 2" />
          </div>
          {/* Add more logo items as needed */}
        </div>
      </div>
    </section>
  );
}

export default CustomerMarquee;
