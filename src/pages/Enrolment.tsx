import { useSeoMeta, useHead } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Menu, X, ArrowUp, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Enrolment = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useHead({
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  });

  useSeoMeta({
    title: 'Enrolment - Consensus21',
    description: 'Register your interest for Consensus21. Join our foundation cohort and be part of an innovative open-source educational protocol.',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand - Left Side */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 group">
                <img
                  src="/c21logo.png"
                  alt="Consensus21 Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <Link to="/" className="text-gray-900 dark:text-white font-medium hidden sm:block">
                Consensus21
              </Link>
            </div>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#F7931A] dark:hover:text-[#F7931A] transition-colors font-medium uppercase text-sm"
              >
                Back to Home
              </Link>
            </div>

            {/* Mobile Menu Button - Right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link
                to="/"
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Back to Home</span>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center min-h-[50vh]"
        style={{
          backgroundImage: 'url(/og-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F7931A] mb-4 tracking-wide">
            Consensus 21
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Register Interest
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join our foundation cohort. Be among the first to experience our open-source, decentralised educational protocol designed to reshape learning.
          </p>
        </div>
      </section>

      {/* Enrolment Form Section */}
      <section className="py-20 flex-grow bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Enrolment
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Fill in your details below to register your interest or to get in touch with our team.
            </p>

            <form action="https://formspree.io/f/xgonrjyl" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentFirstName">Parent / Guardian First Name *</Label>
                  <Input id="parentFirstName" name="parentFirstName" placeholder="Jane" required className="bg-gray-50 dark:bg-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" placeholder="Smith" required className="bg-gray-50 dark:bg-gray-900" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" placeholder="jane.smith@email.com" required className="bg-gray-50 dark:bg-gray-900" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="04xx xxx xxx" className="bg-gray-50 dark:bg-gray-900" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="childName">Child's Name *</Label>
                <Input id="childName" name="childName" placeholder="Alex" required className="bg-gray-50 dark:bg-gray-900" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearLevel">Current Year Level *</Label>
                <select 
                  id="yearLevel" 
                  name="yearLevel" 
                  required 
                  className="flex h-10 w-full rounded-md border border-input bg-gray-50 dark:bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select year...</option>
                  <option value="Foundation">Foundation</option>
                  <option value="Year 1">Year 1</option>
                  <option value="Year 2">Year 2</option>
                  <option value="Year 3">Year 3</option>
                  <option value="Year 4">Year 4</option>
                  <option value="Year 5">Year 5</option>
                  <option value="Year 6">Year 6</option>
                  <option value="Year 7">Year 7</option>
                  <option value="Year 8">Year 8</option>
                  <option value="Year 9">Year 9</option>
                  <option value="Year 10">Year 10</option>
                  <option value="Year 11">Year 11</option>
                  <option value="Year 12">Year 12</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="suburb">Suburb</Label>
                <Input id="suburb" name="suburb" placeholder="Mount Martha" className="bg-gray-50 dark:bg-gray-900" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                <select 
                  id="howDidYouHear" 
                  name="howDidYouHear" 
                  className="flex h-10 w-full rounded-md border border-input bg-gray-50 dark:bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select...</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Any questions or comments?</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Feel free to share anything you'd like us to know..." 
                  rows={5} 
                  className="bg-gray-50 dark:bg-gray-900 resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-[#F7931A] hover:bg-[#F7931A]/90 text-white py-6 text-lg rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                <Send className="w-5 h-5" />
                Submit Registration
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>Your details are kept private and will only be used to contact you about Consensus21.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-8 bg-gray-900 text-white border-t border-gray-800 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm">
            <a
              href="https://github.com/consensus21school/consensus21school.github.io/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F7931A] transition-colors font-medium mr-4"
            >
              GNU General Public License v3.0
            </a>
            <a
              href="https://www.acnc.gov.au/charity/charities/51dfc341-a5cd-eb11-8235-002248103324/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F7931A] transition-colors font-medium"
            >
              ABN 14 650 828 381 – ACNC Register
            </a>
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-12 h-12 bg-[#F7931A] hover:bg-[#F7931A]/80 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Enrolment;
