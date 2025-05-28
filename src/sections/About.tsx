import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { Github } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Cryptography Lead',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD in Cryptography with focus on post-quantum algorithms.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Bitcoin Protocol Expert',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Bitcoin Core contributor with expertise in transaction models.',
    },
    {
      name: 'Alex Thompson',
      role: 'Security Architect',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialized in secure systems design and zero-knowledge proofs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="About EnSend"
          // subtitle="Our vision and the team behind the technology"
        />

        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              EnSend was founded with a clear purpose: to create tools that safeguard Bitcoin's future in a 
              post-quantum world. We believe that combining Bitcoin's sound money principles with robust 
              communication tools creates a powerful foundation for digital sovereignty.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our approach is grounded in open-source development, academic research, and practical 
              usability. We're committed to making post-quantum cryptography accessible to everyone 
              while maintaining compatibility with existing Bitcoin infrastructure.
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <a 
                href="https://github.com/ensendhq" 
                className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium transition-colors"
              >
                <Github size={18} className="mr-2" />
                View on GitHub
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium transition-colors"
              >
                Read Our Whitepaper (Coming Soon)
              </a>
            </div>
          </div>
        </div>

        {/* Meet Our Team section - commented out for now
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
          Meet Our Team
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:translate-y-[-4px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {member.name}
                </h4>
                <p className="text-orange-500 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* Our Principles section - commented out for now
        <div className="mt-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Our Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Security First',
                description: 'Every design decision prioritizes long-term security and resilience against emerging threats.'
              },
              {
                title: 'User Sovereignty',
                description: 'We believe users should have complete control over their assets and communications.'
              },
              {
                title: 'Open Development',
                description: 'Our codebase is open-source, allowing transparent security review and community contributions.'
              }
            ].map((principle, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-4 rounded">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        */}
      </Container>
    </section>
  );
};

export default About;