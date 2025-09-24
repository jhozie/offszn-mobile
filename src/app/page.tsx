"use client";

import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Building2, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 lg:px-12 backdrop-blur-sm bg-black/20">
        <div className="text-xl md:text-2xl font-bold text-white tracking-wide">
          OFF-SZN MOBILE
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">HOME</Link>
          <Link href="/about" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">ABOUT</Link>
          <Link href="/services" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">SERVICES</Link>
          <Link href="/register" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">REGISTER</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg bg-black/20 border border-white/10 hover:bg-black/40 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/" 
              className="text-2xl font-bold hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-2xl font-bold hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/services" 
              className="text-2xl font-bold hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              href="/register" 
              className="text-2xl font-bold hover:text-purple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
        <Image
            src="/images/fitness-1.png"
            alt="Professional trainer working with client"
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-6">
              <span className="text-purple-400 text-sm font-semibold tracking-wide">MOBILE FITNESS REVOLUTION</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center lg:text-left">
              YOUR FITNESS
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                YOUR LOCATION
              </span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                YOUR SCHEDULE
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Professional mobile fitness training delivered directly to you, wherever you are. 
              Experience the future of fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                href="/register" 
                className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 text-lg font-bold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-purple-600/25 text-center"
              >
                <span className="relative z-10">BOOK SESSION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-center"
              >
                VIEW SERVICES
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <Image
                  src="/images/fitness-7.jpg"
                  alt="Mobile fitness equipment"
                  width={500}
                  height={400}
                  className="rounded-xl object-cover w-full"
                />
                <div className="mt-6 text-center">
                  <p className="text-gray-300 mb-4">
                    Professional equipment delivered to your location
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">24/7</div>
                      <div className="text-sm text-gray-400">Availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">100%</div>
                      <div className="text-sm text-gray-400">Convenience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">5★</div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-400 text-sm font-semibold tracking-wide">OUR SERVICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                MOBILE FITNESS
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-300">
                <div className="relative mb-6">
                        <Image
                          src="/images/fitness-3.png"
                          alt="Personal training session"
                          width={400}
                          height={250}
                          className="rounded-xl object-cover w-full h-48"
                        />
                  <div className="absolute top-4 right-4 bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Contact Us
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">PERSONAL TRAINING</h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  One-on-one sessions at your location with professional equipment and certified trainers.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-300">
                <div className="relative mb-6">
          <Image
                          src="/images/fitness-6.jpg"
                          alt="Corporate wellness program"
                          width={400}
                          height={250}
                          className="rounded-xl object-cover w-full h-48"
                        />
                  <div className="absolute top-4 right-4 bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Get Quote
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">CORPORATE WELLNESS</h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Boost employee health with on-site fitness programs and workplace wellness solutions.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-400/30 transition-all duration-300">
                <div className="relative mb-6">
          <Image
                          src="/images/fitness-1.png"
                          alt="Rehabilitation therapy"
                          width={400}
                          height={250}
                          className="rounded-xl object-cover w-full h-48"
                        />
                  <div className="absolute top-4 right-4 bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Contact Us
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">REHABILITATION</h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  Specialized injury recovery and prevention programs delivered at your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fitness-2.png"
            alt="Fitness equipment background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">GET STARTED TODAY</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              READY TO
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TRANSFORM?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
            Join thousands of satisfied clients who have transformed their fitness journey with our mobile training services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/register" 
              className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 text-xl font-bold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-600/25 text-center"
            >
              <span className="relative z-10">BOOK SESSION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white/30 backdrop-blur-sm px-12 py-5 text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-xl text-center"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                 OFF-SZN MOBILE
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolutionizing fitness with convenient mobile training solutions delivered directly to your location.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">SERVICES</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services" className="hover:text-purple-400 transition-colors">Personal Training</Link></li>
                <li><Link href="/services" className="hover:text-purple-400 transition-colors">Corporate Wellness</Link></li>
                <li><Link href="/services" className="hover:text-purple-400 transition-colors">Rehabilitation</Link></li>
                <li><Link href="/services" className="hover:text-purple-400 transition-colors">Weight Loss</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">COMPANY</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
                <li><Link href="/register" className="hover:text-purple-400 transition-colors">Join Us</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">CONTACT</h4>
              <div className="space-y-3 text-gray-400">
                <p>Nationwide Mobile Service</p>
                <p>24/7 Availability</p>
                <p className="text-purple-400 font-semibold">(555) 123-MOBILE</p>
                <p>info@offsznmobile.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2025 Off-Szn Mobile. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
