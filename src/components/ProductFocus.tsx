import React from 'react';

const ProductFocusItem: React.FC<{
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}> = ({ title, description, ctaText, ctaLink, imageSrc, imageAlt, reversed = false }) => (
  <div className={`flex flex-col md:flex-row items-center ${reversed ? 'md:flex-row-reverse' : ''} py-16`}>
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
      <a href={ctaLink} className="sapBtn secondary">{ctaText}</a>
    </div>
    <div className="md:w-1/2">
      <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
    </div>
  </div>
);

const ProductFocus: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Make better decisions, faster.</h2>
        
        <ProductFocusItem
          title="More change. Less friction."
          description="Change isn't an obstacle, it's an opportunity. System DoX gives your business a common language and single source of truth to make your transformations happen better, faster and with greater impact."
          ctaText="Learn more"
          ctaLink="/learn-more"
          imageSrc="/path-to-image-1.png"
          imageAlt="Product visualization 1"
        />

        <ProductFocusItem
          title="Shine a spotlight on your software"
          description="Software is too mission-critical—and too intertwined—to live in the dark. System DoX gives you multi-dimensional visibility into your software so that you can quickly uncover and address any risks that threaten your business."
          ctaText="Get a handle on risk management"
          ctaLink="/risk-management"
          imageSrc="/path-to-image-2.png"
          imageAlt="Product visualization 2"
          reversed
        />

        <ProductFocusItem
          title="Confidently navigate your ERP transformation"
          description="By providing visibility and detailed insight into your current IT landscape and all interdependencies, System DoX helps you plan for and navigate both the technical and business-centric aspects of your ERP transformation."
          ctaText="Manage your ERP Transformation"
          ctaLink="/erp-transformation"
          imageSrc="/path-to-image-3.png"
          imageAlt="Product visualization 3"
        />
      </div>
    </section>
  );
};

export default ProductFocus;
