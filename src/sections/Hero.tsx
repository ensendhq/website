import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
            <Shield size={16} className="mr-2" />
            <span>Post-Quantum Cryptography</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 max-w-4xl leading-tight">
            EnSend: A Bitcoin Superapp Prepared for the Post-Quantum Future
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Combining secure Bitcoin transactions with decentralized messaging, designed to meet tomorrow's cryptographic challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="group"
              onClick={() => window.location.href = 'https://messenger.ensend.xyz/'}
            >
              Launch App
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
            <div className="p-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <Shield className="text-orange-500 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Why Post-Quantum Security Matters
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                About 25% of Bitcoins in circulation are vulnerable to quantum attacks, putting billions in digital assets at risk. 
                EnSend implements post-quantum cryptography to protect your assets and communications against 
                future quantum attacks, without sacrificing usability or compatibility.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;