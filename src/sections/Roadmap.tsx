import React, { useState } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { CheckCircle2, Circle } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const phases = [
    {
      title: 'Phase 1: Foundation',
      date: 'Q3 2025',
      status: 'in-progress',
      description: 'Development of core wallet functionality with preliminary post-quantum protection layer.',
      milestones: [
        'Basic Bitcoin wallet implementation',
        'Integration of initial post-quantum algorithms',
        'Security architecture design and review',
        'Core team expansion'
      ]
    },
    {
      title: 'Phase 2: Integration',
      date: 'Q4 2025',
      status: 'upcoming',
      description: 'Addition of Nostr messaging functionality and enhanced quantum-resistant features.',
      milestones: [
        'Nostr protocol integration',
        'End-to-end encrypted messaging',
        'Improved user interface',
        'Expanded PQC support'
      ]
    },
    {
      title: 'Phase 3: Ecosystem',
      date: 'Q1 2026',
      status: 'upcoming',
      description: 'Building developer tools and expanding the ecosystem around EnSend.',
      milestones: [
        'Developer SDK release',
        'Third-party integration support',
        'Community contribution program',
        'Advanced PQC transaction types'
      ]
    },
    {
      title: 'Phase 4: Adoption',
      date: 'Q2 2026',
      status: 'upcoming',
      description: 'Focus on user adoption, education, and enhanced functionality.',
      milestones: [
        'Educational resources',
        'Enterprise partnerships',
        'Advanced privacy features',
        'Hardware wallet integration'
      ]
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-[#0D1117]">
      <Container>
        <SectionHeading
          title="Development Roadmap"
          subtitle="Our step-by-step journey toward building a quantum-resistant Bitcoin superapp"
          centered
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

          {/* Timeline events */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 ml-12 md:ml-[50%]'}`}
                onMouseEnter={() => setActivePhase(index)}
                onMouseLeave={() => setActivePhase(null)}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 ${
                    activePhase === index ? 'scale-125' : ''
                  } transition-transform duration-300`}
                >
                  {phase.status === 'in-progress' ? (
                    <CheckCircle2 className="text-orange-500\" size={24} />
                  ) : (
                    <Circle className="text-gray-400 dark:text-gray-600" size={24} />
                  )}
                </div>

                {/* Content */}
                <div 
                  className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md ml-8 md:ml-0 
                    ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} 
                    ${activePhase === index ? 'shadow-lg' : ''}
                    transition-shadow duration-300`}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                      {phase.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-orange-500">•</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {milestone}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Current Development Status
          </h3>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">25%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            We are currently focused on Phase 1, developing the core wallet functionality with preliminary 
            post-quantum protection layers. Our team is working on implementing BIP-360 proposals and 
            establishing the foundation for future phases.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;