"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Target, Star, Menu, X } from "lucide-react";
import { useState } from "react";

export default function About() {
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
          <Link href="/about" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base text-purple-400">ABOUT</Link>
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
              className="text-2xl font-bold text-purple-400 transition-colors"
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
      <section className="relative py-20 px-6 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/images/fitness-3.png"
            alt="About Off-Szn Mobile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">ABOUT US</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            ABOUT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">OFF-SZN MOBILE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
                 We&apos;re revolutionizing fitness by bringing professional training directly to your doorstep.
            Experience the convenience of personalized fitness without leaving your comfort zone.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">OUR STORY</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with a revolutionary vision to make fitness accessible to everyone, Off-Szn Mobile 
                was born from the understanding that traditional gyms can be intimidating, time-consuming, and inconvenient.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We recognized that many people struggle to maintain consistent fitness routines due to busy schedules, 
                travel constraints, or simply the discomfort of crowded gym environments. Our solution? Bring the gym to you.
              </p>
              <p className="text-lg text-gray-300">
                Our certified trainers travel to your location with professional equipment, creating a personalized 
                fitness experience that fits seamlessly into your lifestyle. Whether at home, office, or any preferred location, 
                we make fitness convenient, comfortable, and effective.
              </p>
            </div>
            <div className="relative">
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300">
                <div className="relative mb-6">
                  <Image
                    src="/images/fitness-4.png"
                    alt="Mobile fitness training"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover w-full h-48"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">OUR MISSION</h3>
                <p className="text-gray-300 text-lg">
                       &quot;To revolutionize fitness by bringing professional training directly to our clients,
                  making health and wellness accessible, convenient, and enjoyable for everyone, everywhere.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-400 text-sm font-semibold tracking-wide">OUR VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                WHAT DRIVES US
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Home className="w-10 h-10 text-white" />
                      </div>
                <h3 className="text-2xl font-bold mb-4">CONVENIENCE</h3>
                <p className="text-gray-400">
                  Making fitness accessible by bringing professional training directly to your location, 
                  eliminating barriers to consistent exercise.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                <h3 className="text-2xl font-bold mb-4">PERSONALIZATION</h3>
                <p className="text-gray-400">
                  Creating tailored fitness experiences that adapt to your goals, schedule, and comfort level 
                  in your own space.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                <h3 className="text-2xl font-bold mb-4">EXCELLENCE</h3>
                <p className="text-gray-400">
                  Delivering professional-grade training with certified experts and quality equipment, 
                  ensuring exceptional results in any environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Hidden for now */}
      {/* <section className="py-20 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-400 text-sm font-semibold tracking-wide">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                MEET OUR MOBILE TRAINERS
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Dumbbell className="w-12 h-12 text-white" />
                      </div>
                <h3 className="text-xl font-bold mb-2">SARAH JOHNSON</h3>
                <p className="text-purple-400 mb-4">Senior Mobile Trainer</p>
                <p className="text-gray-400">
                  Certified personal trainer with 10+ years experience in mobile fitness training, 
                  specializing in home-based workouts and corporate wellness programs.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                <h3 className="text-xl font-bold mb-2">MIKE CHEN</h3>
                <p className="text-purple-400 mb-4">Mobile Fitness Specialist</p>
                <p className="text-gray-400">
                  Former competitive athlete specializing in functional fitness and injury rehabilitation, 
                  bringing professional equipment to your location.
                </p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                <h3 className="text-xl font-bold mb-2">LISA MARTINEZ</h3>
                <p className="text-purple-400 mb-4">Mobile Wellness Coach</p>
                <p className="text-gray-400">
                  Yoga instructor and wellness expert focused on stress management and recovery, 
                  delivering mindful fitness experiences at your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">GET STARTED TODAY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              READY TO JOIN
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              OUR FAMILY?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Become part of the Off-Szn Mobile community and start your transformation journey today.
          </p>
          <Link 
            href="/register" 
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 text-xl font-bold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-600/25 inline-block"
          >
            <span className="relative z-10">JOIN NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </Link>
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
