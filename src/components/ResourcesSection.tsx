import React from 'react';

interface ResourceItem {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  links: { text: string; url: string }[];
}

const ResourceCard: React.FC<ResourceItem> = ({ title, description, ctaText, ctaLink, imageSrc, links }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={ctaLink} className="sapBtn secondary mb-4">{ctaText}</a>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-blue-600 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ResourcesSection: React.FC = () => {
  const resources: ResourceItem[] = [
    {
      title: "Enterprise Architecture Success Kit",
      description: "Take your capabilities to the next level and arm yourself with the knowledge you need",
      ctaText: "Download now",
      ctaLink: "/download/enterprise-architecture-success-kit",
      imageSrc: "/path-to-resource-image-1.jpg",
      links: [
        { text: "What is Enterprise Architecture?", url: "/wiki/ea/enterprise-architecture" },
        { text: "An Enterprise Architect's Role", url: "/wiki/ea/enterprise-architect" },
        { text: "Enterprise Architecture Frameworks", url: "/wiki/ea/enterprise-architecture-frameworks" },
      ],
    },
    {
      title: "Applying the Gartner TIME Framework for Application Rationalization",
      description: "Learn how to effectively rationalize your application portfolio",
      ctaText: "Download now",
      ctaLink: "/download/gartner-time-framework",
      imageSrc: "/path-to-resource-image-2.jpg",
      links: [
        { text: "Application Rationalization Guide", url: "/wiki/apm/application-rationalization" },
        { text: "Application Portfolio Management Guide", url: "/wiki/apm/application-portfolio-management" },
        { text: "Gartner TIME Model Guide", url: "/wiki/apm/gartner-time-model" },
      ],
    },
    {
      title: "Unlock EA Value Faster with the System DoX Meta Model",
      description: "Discover how to maximize the value of your Enterprise Architecture efforts",
      ctaText: "Download now",
      ctaLink: "/download/System DoX-meta-model",
      imageSrc: "/path-to-resource-image-3.jpg",
      links: [
        { text: "Enterprise Architecture Governance Guide", url: "/wiki/ea/enterprise-architecture-governance" },
        { text: "Enterprise Architecture Tool Selection Guide", url: "/wiki/ea/enterprise-architecture-tool-selection-guide" },
        { text: "Business Capabilities Guide", url: "/wiki/ea/business-capability" },
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Resources</h2>
        <p className="text-xl text-center mb-16">Take your capabilities to the next level and arm yourself with the knowledge you need</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
