import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { TrendingUp, AlertTriangle, Zap } from 'lucide-react';

const MarketContext: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-white dark:bg-[#0D1117]">
      <Container>
        <SectionHeading
          title="Market Context"
          subtitle="The evolving landscape of cryptography and digital asset security"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 mb-4">
              <TrendingUp />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Growing Quantum Computing Capabilities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Quantum computing power doubles approximately every 12 months. Industry projections suggest that 
              quantum computers capable of breaking current cryptographic systems could emerge within the next decade.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 mb-4">
              <AlertTriangle />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Cryptographic Vulnerability
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ECDSA signatures used in Bitcoin are vulnerable to quantum attacks using Shor's algorithm. 
              A sufficiently powerful quantum computer could derive private keys from public keys, potentially 
              compromising billions in digital assets.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 mb-4">
              <Zap />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Secure Communication Demand
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              The need for secure, censorship-resistant communication continues to grow. Integrating 
              decentralized messaging with financial tools creates a complete digital sovereignty solution 
              for privacy-conscious users.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Industry Response
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Major cryptographic standards organizations including NIST and the Bitcoin development community 
            are actively developing and standardizing post-quantum cryptographic algorithms. EnSend is at the 
            forefront of implementing these standards for everyday use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1 h-2 bg-orange-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            About 25% of Bitcoins in circulation are vulnerable to quantum attacks, putting billions in digital assets at risk.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketContext;