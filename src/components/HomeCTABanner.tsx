import React from 'react';

const HomeCTABanner: React.FC = () => {
  return (
    <section id="homeCta" className="py-8 bg-blue-100">
      <div className="page-center plr20">
        <div className="homeCta-wrap flex items-center justify-between gap-8">
          <div className="homeCta-icon flex items-center justify-center w-[120px] h-[120px]">
            <img src="path-to-your-image" alt="CTA Icon" className="w-full h-full object-cover" />
          </div>
          <div className="homeCta-text flex-1">
            <span className="eyebrow small text-blue-800 mb-2">Where Business Transformation Gets Real</span>
            <h3 className="heading xxs text-black mt-0 mb-2">
              Join us for the SAP Transformation Excellence Summits
            </h3>
            <p className="body xs text-black mb-0">
              The hybrid SAP Signavio and System DoX event series driving business transformation with confidence.
            </p>
          </div>
          <div className="homeCta-cta">
            <a href="#" className="sapBtn primary">Register now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCTABanner;
