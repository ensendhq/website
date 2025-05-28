import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { Check, X } from 'lucide-react';

const CompetitivePosition: React.FC = () => {
  const features = [
    'Post-Quantum Security',
    'Bitcoin Wallet',
    'Decentralized Messaging',
    'Open Source',
    'Non-Custodial',
  ];

  const competitors = [
    {
      name: 'EnSend',
      isUs: true,
      features: [true, true, true, true, true],
    },
    {
      name: 'Traditional Bitcoin Wallets',
      features: [false, true, false, true, true],
    },
    {
      name: 'Messaging Apps',
      features: [false, false, true, false, false],
    },
    {
      name: 'Crypto Super Apps',
      features: [false, true, true, false, false],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="Competitive Positioning"
          subtitle="How EnSend compares to existing solutions in the ecosystem"
          centered
        />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-semibold text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  Features
                </th>
                {competitors.map((competitor, idx) => (
                  <th 
                    key={idx} 
                    className={`p-4 text-left font-semibold text-gray-900 dark:text-gray-100 ${
                      competitor.isUs 
                        ? 'bg-orange-50 dark:bg-orange-900/20' 
                        : 'bg-white dark:bg-gray-800'
                    } border-b border-gray-200 dark:border-gray-700`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, rowIdx) => (
                <tr key={rowIdx}>
                  <td className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                    {feature}
                  </td>
                  {competitors.map((competitor, colIdx) => (
                    <td 
                      key={colIdx} 
                      className={`p-4 ${
                        competitor.isUs 
                          ? 'bg-orange-50 dark:bg-orange-900/20' 
                          : 'bg-white dark:bg-gray-800'
                      } border-b border-gray-200 dark:border-gray-700 text-center`}
                    >
                      {competitor.features[rowIdx] ? (
                        <Check className="inline-block text-green-500\" size={20} />
                      ) : (
                        <X className="inline-block text-gray-400" size={20} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Our Unique Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            EnSend combines the functionality of Bitcoin wallets and secure messaging apps while adding post-quantum 
            cryptographic protection. This integration creates a seamless experience for users who want both financial 
            sovereignty and secure communication in a future-proof package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Current Solutions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most Bitcoin wallets rely on ECDSA signatures that may become vulnerable to quantum attacks.
                Messaging platforms often use centralized infrastructure or lack integration with financial tools.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">The EnSend Difference</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                EnSend implements quantum-resistant signatures for Bitcoin transactions and messaging, 
                maintaining compatibility with existing systems while preparing for future security challenges.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompetitivePosition;