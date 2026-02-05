import { useSeoMeta, useHead } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Bitcoin, Github, ExternalLink, FileText, Newspaper, GraduationCap, Briefcase, Heart, ArrowDown, ArrowUp, Rss, Zap } from 'lucide-react';

const Index = () => {
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
        href: '/c21logo.png',
      },
    ],
  });

  useSeoMeta({
    title: 'Consensus21',
    description: 'An open-source educational protocol that empowers learning, removing hierarchies, and tuition debt.',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const XIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand - Left Side */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 group"
              >
                <img
                  src="/c21logo.png"
                  alt="Consensus21 Logo"
                  className="h-12 w-auto"
                />
              </button>
              <span className="text-gray-900 dark:text-white font-medium hidden sm:block">
                Consensus21
              </span>
            </div>

            {/* Desktop Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('news')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#F7931A] dark:hover:text-[#F7931A] transition-colors font-medium uppercase text-sm"
              >
                C21 News
              </button>
              <button
                onClick={() => scrollToSection('whitepaper')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#F7931A] dark:hover:text-[#F7931A] transition-colors font-medium uppercase text-sm"
              >
                White Paper
              </button>
              <button
                onClick={() => scrollToSection('donate')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#F7931A] dark:hover:text-[#F7931A] transition-colors font-medium uppercase text-sm"
              >
                Donate
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#F7931A] dark:hover:text-[#F7931A] transition-colors font-medium uppercase text-sm"
              >
                ~Education
              </button>
              <button
                onClick={() => scrollToSection('jobs')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-[#F7931A] dark:hover:text-[#F7931A] transition-colors font-medium uppercase text-sm"
              >
                Jobs
              </button>
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
              <button
                onClick={() => scrollToSection('news')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium uppercase"
              >
                <span>C21 News</span>
              </button>
              <button
                onClick={() => scrollToSection('whitepaper')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium uppercase"
              >
                <span>White Paper</span>
              </button>
              <button
                onClick={() => scrollToSection('donate')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium uppercase"
              >
                <span>Donate</span>
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium uppercase"
              >
                <span>~Education</span>
              </button>
              <button
                onClick={() => scrollToSection('jobs')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium uppercase"
              >
                <span>Jobs</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/og-image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative container mx-auto px-4 py-20 mt-20">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F7931A] mb-4 tracking-wide">
              Consensus 21
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              School Protocol.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Consensus21 is an{' '}
              <a
                href="https://github.com/consensus21school/consensus21school.github.io/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7931A] hover:text-[#F7931A]/80 underline font-medium transition-colors"
              >
                open-source
              </a>{' '}
              educational protocol that empowers learning, removing hierarchies, and tuition debt. It fosters
              self-directed, problem-based learning with guided support, empowering learners with critical thinking,
              entrepreneurship, and problem-solving skills.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/digitalportfolio.html"
                target="_self"
                rel="noopener noreferrer"
                className="text-[#F7931A] hover:text-[#F7931A]/80 underline font-medium transition-colors"
              >
                Digital Portfolio
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="/hackathon.html"
                target="_self"
                rel="noopener noreferrer"
                className="text-[#F7931A] hover:text-[#F7931A]/80 underline font-medium transition-colors"
              >
                Hackathon
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="/donations.html"
                target="_self"
                rel="noopener noreferrer"
                className="text-[#F7931A] hover:text-[#F7931A]/80 underline font-medium transition-colors"
              >
                Donations
              </a>
            </div>
          </div>

          {/* Social Links - Bottom Right */}
          <div className="flex flex-wrap gap-6 justify-end items-center mt-12">
            <a
              href="https://coinos.io/CONSENSUS21/receive"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Donate Bitcoin"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F7931A]/10 hover:bg-[#F7931A]/20 transition-all duration-300 group-hover:scale-110">
                <Bitcoin className="w-6 h-6 text-[#F7931A]" />
              </div>
            </a>
            <a
              href="https://github.com/consensus21school/consensus21school.github.io/blob/main/whitepaper.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="GitHub"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                <Github className="w-6 h-6 text-white" />
              </div>
            </a>
            <a
              href="https://primal.net/p/nprofile1qqstk8yx8gkptsf3k3y5u7sgrjwv24h2h4hzfj6gdrdwx79u99fu87ccjdc2x"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Nostr"
            >
              <img
                src="/nostr.png"
                alt="Nostr"
                className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
              />
            </a>
            <a
              href="https://x.com/Consensus21"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="X"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                <XIcon className="w-5 h-5 text-white" />
              </div>
            </a>
            <a
              href="https://stacker.news/consensus21/all"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Stacker News"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/20 hover:bg-yellow-500/40 transition-all duration-300 group-hover:scale-110">
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
            <ArrowDown className="w-6 h-6 text-white/50" />
          </div>
        </div>
      </section>

      {/* C21 News Section */}
      <section id="news" className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <a
                href="https://stacker.news/consensus21/all"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/news.png"
                    alt="C21 News"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Stacker News
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="https://stacker.news/consensus21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  C21 News
                </a>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                All updates and announcements for C21 are regularly shared through Stacker News and Nostr,
                providing the community with real-time insights and information. For those who prefer an
                aggregated format, all posts are also available through the ~Education Territory RSS feed,
                ensuring that you can stay up to date with everything happening in one convenient place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  <a
                    href="https://stacker.news/consensus21/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Zap className="w-4 h-4" />
                    Stacker News
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="gap-2 bg-purple-800 hover:bg-purple-900 text-white"
                >
                  <a
                    href="https://primal.net/p/nprofile1qqstk8yx8gkptsf3k3y5u7sgrjwv24h2h4hzfj6gdrdwx79u99fu87ccjdc2x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <div className="relative bg-purple-900 p-2 rounded-lg">
                      <img
                        src="/nostr.png"
                        alt="Nostr"
                        className="w-6 h-6"
                      />
                    </div>
                    Nostr
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
              >
                <a
                  href="https://stacker.news/~Education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Zap className="w-4 h-4" />
                  ~Education
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-[#F7931A] text-[#F7931A] hover:bg-[#F7931A] hover:text-white"
              >
                <a
                  href="https://stacker.news/~education/rss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rss className="w-4 h-4" />
                  RSS
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                size="lg"
                className="gap-2 bg-[#F7931A] hover:bg-[#F7931A]/90 text-white"
              >
                <a
                  href="https://stacker.news/items/339533#territories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ~Territories
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* White Paper Section */}
      <section id="whitepaper" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <a
                href="/whitepaper.html"
                target="_self"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/whitepaper.png"
                    alt="White Paper"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Read White Paper
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="/whitepaper.html"
                  target="_self"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  White Paper
                </a>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                The Consensus21 whitepaper introduces an open-source, decentralised education protocol designed
                to reshape learning by eliminating traditional hierarchies, standardised testing, and tuition
                debt. This model empowers learners and mentors to engage in self-directed, project-based
                education, fostering critical thinking, entrepreneurship, and problem-solving skills. At its core,
                Consensus21 operates through a community-governed, modular infrastructure that supports lifelong
                learning from ages 5 to 21.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-gray-900 hover:bg-gray-800"
                >
                  <a
                    href="/whitepaper.html"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    Read
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <a
                    href="https://github.com/consensus21school/consensus21school.github.io/blob/main/whitepaper.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <a
                href="https://coinos.io/CONSENSUS21/receive"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/donations.png"
                    alt="Donate"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Donate Bitcoin
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="https://coinos.io/CONSENSUS21/receive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  C21 Donate
                </a>
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed space-y-4">
                <p>
                  <strong className="text-gray-900 dark:text-white">Tax Deductibility</strong>
                </p>
                <p>
                  Consensus21 is a registered business name and auspiced project of Digital Playhouse
                  Foundation Ltd, a Public Benevolent Institution (PBI) with Deductible Gift Recipient (DGR)
                  endorsement. Donations of $2 or more to Consensus21 may be tax-deductible under Australian
                  law.
                </p>
                <p>
                  We accept donations in both Australian dollars and Bitcoin. For Bitcoin donations, we record
                  the AUD equivalent at the time of receipt and can issue a receipt noting the date, amount
                  received, and wallet address.
                </p>
                <p>
                  To request a donation receipt or for further information, please contact us{' '}
                  <a
                    href="https://digitalplayhouse.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F7931A] hover:text-[#F7931A]/80 underline font-medium"
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  <strong>View our charity registration:</strong>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <a
                    href="https://coinos.io/CONSENSUS21/receive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bitcoin className="w-4 h-4" />
                    Donate
                  </a>
                </Button>
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  <a
                    href="https://www.acnc.gov.au/charity/charities/51dfc341-a5cd-eb11-8235-002248103324/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="w-4 h-4" />
                    Charity
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                <a
                  href="https://www.acnc.gov.au/charity/charities/51dfc341-a5cd-eb11-8235-002248103324/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  ABN 14 650 828 381 – ACNC Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ~Education Section */}
      <section id="education" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <a
                href="https://stacker.news/~Education"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/education.png"
                    alt="~Education"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit ~Education
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="https://stacker.news/~Education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  ~Education
                </a>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Consensus21 & DPF Charity have contributed 3M sats using the DPF Learner Fund to permanently
                support the launch and moderation of the ~Education territory on Stacker News. The Learner Fund
                exists to back projects that make Bitcoin education accessible, high quality, and community
                driven. Supporting ~Education helps keep the space moderated and focused on learning, reward
                contributors who share valuable knowledge, and experiment with new ways to fund education
                through sats. This is just the beginning, as the Learner Fund is committed to strengthening
                open, stacker led Bitcoin learning spaces.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  <a
                    href="https://stacker.news/consensus21/all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Zap className="w-4 h-4" />
                    Stacker News
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="gap-2 bg-purple-800 hover:bg-purple-900 text-white"
                >
                  <a
                    href="https://primal.net/p/nprofile1qqstk8yx8gkptsf3k3y5u7sgrjwv24h2h4hzfj6gdrdwx79u99fu87ccjdc2x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <div className="relative bg-purple-900 p-2 rounded-lg">
                      <img
                        src="/nostr.png"
                        alt="Nostr"
                        className="w-6 h-6"
                      />
                    </div>
                    Nostr
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 border-[#F7931A] text-[#F7931A] hover:bg-[#F7931A] hover:text-white"
                >
                  <a
                    href="https://stacker.news/~education/rss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Rss className="w-4 h-4" />
                    RSS
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Paper Section */}
      <section id="whitepaper" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <a
                href="/whitepaper.html"
                target="_self"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/whitepaper.png"
                    alt="White Paper"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Read White Paper
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="/whitepaper.html"
                  target="_self"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  White Paper
                </a>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                The Consensus21 whitepaper introduces an open-source, decentralised education protocol designed
                to reshape learning by eliminating traditional hierarchies, standardised testing, and tuition
                debt. This model empowers learners and mentors to engage in self-directed, project-based
                education, fostering critical thinking, entrepreneurship, and problem-solving skills. At its core,
                Consensus21 operates through a community-governed, modular infrastructure that supports lifelong
                learning from ages 5 to 21.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-gray-900 hover:bg-gray-800"
                >
                  <a
                    href="/whitepaper.html"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    Read
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <a
                    href="https://github.com/consensus21school/consensus21school.github.io/blob/main/whitepaper.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <a
                href="https://coinos.io/CONSENSUS21/receive"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/donations.png"
                    alt="Donate"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Donate Bitcoin
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="https://coinos.io/CONSENSUS21/receive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  C21 Donate
                </a>
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed space-y-4">
                <p>
                  <strong className="text-gray-900 dark:text-white">Tax Deductibility</strong>
                </p>
                <p>
                  Consensus21 is a registered business name and auspiced project of Digital Playhouse
                  Foundation Ltd, a Public Benevolent Institution (PBI) with Deductible Gift Recipient (DGR)
                  endorsement. Donations of $2 or more to Consensus21 may be tax-deductible under Australian
                  law.
                </p>
                <p>
                  We accept donations in both Australian dollars and Bitcoin. For Bitcoin donations, we record
                  the AUD equivalent at the time of receipt and can issue a receipt noting the date, amount
                  received, and wallet address.
                </p>
                <p>
                  To request a donation receipt or for further information, please contact us{' '}
                  <a
                    href="https://digitalplayhouse.org.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F7931A] hover:text-[#F7931A]/80 underline font-medium"
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  <strong>View our charity registration:</strong>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <a
                    href="https://coinos.io/CONSENSUS21/receive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bitcoin className="w-4 h-4" />
                    Donate
                  </a>
                </Button>
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  <a
                    href="https://www.acnc.gov.au/charity/charities/51dfc341-a5cd-eb11-8235-002248103324/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Heart className="w-4 h-4" />
                    Charity
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                <a
                  href="https://www.acnc.gov.au/charity/charities/51dfc341-a5cd-eb11-8235-002248103324/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  ABN 14 650 828 381 – ACNC Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ~Education Section */}
      <section id="education" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <a
                href="https://stacker.news/~Education"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/education.png"
                    alt="~Education"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit ~Education
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="https://stacker.news/~Education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  ~Education
                </a>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Consensus21 & DPF Charity have contributed 3M sats using the DPF Learner Fund to permanently
                support the launch and moderation of the ~Education territory on Stacker News. The Learner Fund
                exists to back projects that make Bitcoin education accessible, high quality, and community
                driven. Supporting ~Education helps keep the space moderated and focused on learning, reward
                contributors who share valuable knowledge, and experiment with new ways to fund education
                through sats. This is just the beginning, as the Learner Fund is committed to strengthening
                open, stacker led Bitcoin learning spaces.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  <a
                    href="https://stacker.news/~Education"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Zap className="w-4 h-4" />
                    ~Education
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <a
                href="https://bitcoinerjobs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[#F7931A]/20 transition-all duration-300">
                  <img
                    src="/jobs.png"
                    alt="Jobs"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Jobs
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <a
                  href="https://bitcoinerjobs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7931A] transition-colors"
                >
                  Jobs
                </a>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                At Consensus21.school, education and employment are directly connected to the opportunities of
                tomorrow. All of our roles are openly listed on Stacker News Jobs and Bitcoiner Jobs, making it
                easy for people to join our mission, while at the same time our students are being upskilled
                through hands-on, problem-based learning that mirrors these future-focused positions. By engaging
                with real tools, communities, and industry networks, learners gain the technical skills and
                entrepreneurial mindset needed to thrive in the fast-growing Bitcoin and digital economy,
                ensuring that Consensus21 is both creating meaningful jobs today and preparing the next generation
                to step confidently into them tomorrow.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <a
                    href="https://bitcoinerjobs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Briefcase className="w-4 h-4" />
                    Jobs
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  <a
                    href="https://stacker.news/~jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Zap className="w-4 h-4" />
                    ~Jobs
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            <a
              href="https://github.com/consensus21school/consensus21school.github.io/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F7931A] transition-colors font-medium"
            >
              GNU General Public License v3.0
            </a>
          </p>
          <p className="text-gray-400 mb-2">
            <a
              href="https://www.acnc.gov.au/charity/charities/51dfc341-a5cd-eb11-8235-002248103324/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F7931A] transition-colors font-medium"
            >
              ABN 14 650 828 381 – ACNC Register
            </a>
          </p>
          <p className="text-gray-400">
            <a
              href="https://primal.net/p/nprofile1qqstk8yx8gkptsf3k3y5u7sgrjwv24h2h4hzfj6gdrdwx79u99fu87ccjdc2x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F7931A] transition-colors font-medium"
            >
              npub1hvwgvw3vzhqnrdzffeaqs8yuc4tw40twyn95s6x6udutc22nc0asprqh2a
            </a>
          </p>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              Vibed with <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer" className="text-[#F7931A] hover:text-[#F7931A]/80 transition-colors">Shakespeare</a>
            </p>
          </div>
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

export default Index;
