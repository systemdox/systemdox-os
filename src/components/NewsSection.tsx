import React from 'react';

interface NewsItem {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  tag: string;
}

const NewsCard: React.FC<NewsItem> = ({ title, description, ctaText, ctaLink, imageSrc, tag }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-sm text-blue-600 font-semibold">{tag}</span>
      <h3 className="text-xl font-semibold my-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={ctaLink} className="sapBtn secondary">{ctaText}</a>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: "System DoX named a Leader in the 2023 Gartner® Magic Quadrant™ for Enterprise Architecture Tools for third consecutive year",
      description: "",
      ctaText: "Get your complimentary report",
      ctaLink: "/report/gartner-magic-quadrant-2023",
      imageSrc: "/path-to-news-image-1.jpg",
      tag: "Gartner®",
    },
    {
      title: "System DoX Once Again Wins First Place in Six G2 Leader Awards",
      description: "Real-world users award System DoX the number-one position across six categories for Fall 2024.",
      ctaText: "Read more",
      ctaLink: "/news/g2-leader-awards-2024",
      imageSrc: "/path-to-news-image-2.jpg",
      tag: "Awards",
    },
    {
      title: "System DoX Releases AI Survey",
      description: "The results from the System DoX AI Survey 2024 reveal that companies around the world have a long way to go when it comes to effective AI governance.",
      ctaText: "Access the report",
      ctaLink: "/report/ai-survey-2024",
      imageSrc: "/path-to-news-image-3.jpg",
      tag: "Report",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What's new</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
