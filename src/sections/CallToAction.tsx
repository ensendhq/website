import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { CheckCircle2, Shield, ArrowRight, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('pqc');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate email
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            email,
            interest,
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) {
        throw supabaseError;
      }
      
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <Shield size={16} className="mr-2" />
              <span>Limited Early Access</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join the Post-Quantum Bitcoin Revolution
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Be among the first to experience EnSend's innovative approach to Bitcoin and secure messaging. 
              Early access participants will help shape the future of post-quantum blockchain applications.
            </p>
            <div className="space-y-4">
              {['Priority access to beta releases', 'Direct communication with our development team', 'Influence feature development'].map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="text-orange-500 mr-3 mt-0.5" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-800 rounded-xl p-8 shadow-xl">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-semibold mb-6">Request Early Access</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                      What interests you most about EnSend?
                    </label>
                    <select
                      id="interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="pqc">Post-Quantum Security</option>
                      <option value="bitcoin">Bitcoin Wallet Features</option>
                      <option value="messaging">Secure Messaging</option>
                      <option value="both">Both Wallet and Messaging</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {error && (
                    <div className="mb-4 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 flex items-center">
                      <AlertCircle size={18} className="mr-2" />
                      {error}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    fullWidth 
                    className="group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    {!isSubmitting && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
                <p className="mt-4 text-sm text-gray-400">
                  By submitting, you agree to receive updates about EnSend. We respect your privacy and will never share your information.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-500 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Request Received!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your interest in EnSend. We'll be in touch soon with more information about our early access program.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                    setInterest('pqc');
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;