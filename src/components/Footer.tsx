import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-20 text-gray-300">
        <div className="page-center plr20 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-sm font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/overview">Overview</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/integrations">Integrations</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/academic-edition">Academic Edition</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-sm font-bold mb-4">Customers</h3>
            <ul className="space-y-2">
              <li><Link to="/customers">Customers</Link></li>
              <li><Link to="/professional-services">Professional Services</Link></li>
              <li><Link to="/customer-success">Customer Success</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/support">Submit a Request</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-sm font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
              <li><Link to="/wiki">Wiki</Link></li>
              <li><Link to="/documentation">Documentation</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/media-kit">Media Kit</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/engineering-blog">Engineering Blog</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-gray-800">
        <div className="page-center plr20 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <select className="bg-gray-800 text-white py-2 px-4 rounded">
              <option>English</option>
              <option>Deutsch</option>
              <option>Français</option>
              <option>日本語</option>
            </select>
          </div>

          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p>&copy; 2024 System DoX | All rights reserved</p>
          </div>

          <div className="w-full md:w-auto flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
