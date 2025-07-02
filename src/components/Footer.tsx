import React from 'react';
import Container from './Container';
import { Twitter, Github, Mail, Bitcoin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
   const { theme } = useTheme();
   
   const logoSrc = theme === 'dark' 
    ? '/ensend-logo-v0.0.1-dark.png'
    : '/ensend-logo-v0.0.1.png';

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoSrc} alt="EnSend" className="h-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">EnSend</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Combining secure Bitcoin transactions with decentralized messaging, designed to meet tomorrow's cryptographic challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com/ensendhq" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:ensend.xyz@gmail.com" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'Whitepaper', 'FAQs', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['About', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} EnSend. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;