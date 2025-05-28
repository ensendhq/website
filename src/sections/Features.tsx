import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { Shield, MessageCircle, Layout, ArrowUpRight, Bitcoin, Lock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield />,
      title: 'Post-Quantum Secure Bitcoin Wallet',
      description: 'Supporting emerging standards like BIP-360 and P2QRH for quantum-resistant transaction signatures.',
    },
    {
      icon: <MessageCircle />,
      title: 'Decentralized Nostr Messaging',
      description: 'End-to-end encrypted messaging with post-quantum key generation for future-proof communications.',
    },
    {
      icon: <Layout />,
      title: 'Unified, User-Friendly Interface',
      description: 'Seamlessly manage Bitcoin assets and secure communications in a single, intuitive application.',
    },
    {
      icon: <Bitcoin />,
      title: 'Bitcoin Infrastructure Compatibility',
      description: 'Works with existing Bitcoin infrastructure while preparing for future cryptographic standards.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="Key Features"
          subtitle="EnSend combines Bitcoin functionality with post-quantum security to create a future-proof super application."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-500">
                  {feature.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Foundations</h3>
              <p className="text-gray-300 max-w-2xl">
                EnSend uses a layered approach to security, implementing quantum-resistant algorithms 
                alongside traditional cryptography, ensuring compatibility today and security tomorrow.
              </p>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors group"
            >
              Technical Whitepaper (Coming Soon)
              <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;