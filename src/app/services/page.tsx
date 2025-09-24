"use client";

import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Scale, Heart, Building2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Services() {
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
          <Link href="/services" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base text-purple-400">SERVICES</Link>
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
              className="text-2xl font-bold text-purple-400 transition-colors"
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
            src="/images/fitness-1.png"
            alt="Our Mobile Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">OUR SERVICES</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            OUR <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MOBILE SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Professional fitness training delivered directly to your location. Experience personalized workouts in the comfort of your home, office, or any preferred space.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-purple-400 text-sm font-semibold tracking-wide">CORE SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                MOBILE FITNESS SOLUTIONS
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* 1-on-1 Personal Training */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-6">
                          <Dumbbell className="w-8 h-8 text-white" />
                        </div>
                  <div>
                    <h2 className="text-3xl font-bold">1-ON-1 MOBILE TRAINING</h2>
                    <p className="text-purple-400 text-lg">Personalized Fitness at Your Location</p>
                  </div>
                </div>
              <p className="text-gray-300 mb-6">
                Get personalized attention with our certified trainers who travel to your location with professional equipment, creating custom workout plans tailored to your specific goals and schedule.
              </p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Training at your home or office</li>
                <li>• Professional equipment provided</li>
                <li>• Custom workout programming</li>
                <li>• Nutrition guidance</li>
                <li>• Progress tracking</li>
                <li>• Flexible scheduling</li>
              </ul>
                <div className="text-2xl font-bold text-purple-400 mb-4">Contact Us</div>
                <Link 
                  href="/register" 
                  className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-purple-600/25 inline-block"
                >
                  <span className="relative z-10">BOOK SESSION</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Weight Loss Programs */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-6">
                          <Scale className="w-8 h-8 text-white" />
                        </div>
                  <div>
                    <h2 className="text-3xl font-bold">MOBILE WEIGHT LOSS PROGRAMS</h2>
                    <p className="text-purple-400 text-lg">Sustainable Results at Home</p>
                  </div>
                </div>
              <p className="text-gray-300 mb-6">
                Comprehensive weight loss programs delivered at your location, combining targeted workouts, nutrition planning, and lifestyle coaching for lasting transformation.
              </p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Home-based training sessions</li>
                <li>• Metabolic assessment</li>
                <li>• Meal planning & nutrition</li>
                <li>• Progress monitoring</li>
                <li>• Lifestyle coaching</li>
                <li>• Weekly check-ins</li>
              </ul>
                <div className="text-2xl font-bold text-purple-400 mb-4">Get Quote</div>
                <Link 
                  href="/register" 
                  className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-purple-600/25 inline-block"
                >
                  <span className="relative z-10">START PROGRAM</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Injury Rehabilitation */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-6">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                  <div>
                    <h2 className="text-3xl font-bold">MOBILE INJURY REHABILITATION</h2>
                    <p className="text-purple-400 text-lg">Recovery & Prevention at Home</p>
                  </div>
                </div>
              <p className="text-gray-300 mb-6">
                Specialized rehabilitation programs delivered at your location, designed to help you recover from injuries and prevent future ones through targeted exercises and therapy.
              </p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Home-based physical therapy</li>
                <li>• Corrective exercises</li>
                <li>• Pain management techniques</li>
                <li>• Injury prevention programs</li>
                <li>• Recovery monitoring</li>
                <li>• Equipment provided</li>
              </ul>
                <div className="text-2xl font-bold text-purple-400 mb-4">Contact Us</div>
                <Link 
                  href="/register" 
                  className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-purple-600/25 inline-block"
                >
                  <span className="relative z-10">CONSULT NOW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Corporate Services */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-6">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                  <div>
                    <h2 className="text-3xl font-bold">CORPORATE MOBILE SERVICES</h2>
                    <p className="text-purple-400 text-lg">Workplace Wellness Solutions</p>
                  </div>
                </div>
              <p className="text-gray-300 mb-6">
                Boost employee health and productivity with our mobile corporate wellness programs, bringing fitness directly to your workplace with professional equipment and certified trainers.
              </p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• On-site fitness classes</li>
                <li>• Employee wellness programs</li>
                <li>• Health assessments</li>
                <li>• Lunch break sessions</li>
                <li>• Team building workouts</li>
                <li>• Stress management programs</li>
              </ul>
                <div className="text-2xl font-bold text-purple-400 mb-4">Get Quote</div>
                <Link 
                  href="/register" 
                  className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-purple-600/25 inline-block"
                >
                  <span className="relative z-10">GET QUOTE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Hidden for now */}
      {/* <section className="py-20 px-6 lg:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            ADDITIONAL SERVICES
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">GROUP CLASSES</h2>
                  <p className="text-yellow-400 text-lg">High-Energy Workouts</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Join our dynamic group classes designed to push you to your limits while building community and motivation with fellow fitness enthusiasts.
              </p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• HIIT Training</li>
                <li>• CrossFit</li>
                <li>• Yoga & Pilates</li>
                <li>• Spin Classes</li>
              </ul>
              <div className="text-2xl font-bold text-purple-400 mb-4">Contact Us</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">VIRTUAL TRAINING</h2>
                  <p className="text-yellow-400 text-lg">Train From Anywhere</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Stay consistent with your fitness goals through our virtual training programs, featuring live sessions and on-demand workouts you can do from home.
              </p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Live virtual sessions</li>
                <li>• On-demand workouts</li>
                <li>• Mobile app access</li>
                <li>• Progress tracking</li>
              </ul>
              <div className="text-2xl font-bold text-purple-400 mb-4">Contact Us</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Membership Section - Hidden for now */}
      {/* <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            MEMBERSHIP PLANS
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">BASIC</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Contact<span className="text-lg text-gray-400"> Us</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Gym access</li>
                <li>• Locker room</li>
                <li>• Basic equipment</li>
                <li>• 2 group classes/month</li>
              </ul>
              <Link 
                href="/register" 
                className="border-2 border-purple-400 text-purple-400 px-6 py-3 font-semibold hover:bg-purple-400 hover:text-white transition-colors inline-block"
              >
                GET QUOTE
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center border-2 border-purple-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-400 text-white px-4 py-1 text-sm font-bold rounded">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">PREMIUM</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Contact<span className="text-lg text-gray-400"> Us</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Unlimited gym access</li>
                <li>• All group classes</li>
                <li>• Guest privileges</li>
                <li>• Premium equipment</li>
                <li>• Nutrition consultation</li>
              </ul>
              <Link 
                href="/register" 
                className="bg-purple-400 text-white px-6 py-3 font-semibold hover:bg-purple-300 transition-colors inline-block"
              >
                GET QUOTE
              </Link>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">ELITE</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Contact<span className="text-lg text-gray-400"> Us</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Everything in Premium</li>
                <li>• 2 personal training sessions</li>
                <li>• Priority booking</li>
                <li>• Exclusive classes</li>
                <li>• Wellness coaching</li>
              </ul>
              <Link 
                href="/register" 
                className="border-2 border-purple-400 text-purple-400 px-6 py-3 font-semibold hover:bg-purple-400 hover:text-white transition-colors inline-block"
              >
                GET QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Schedule Section - Hidden for now */}
      {/* <section className="py-20 px-6 lg:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            CLASS SCHEDULE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">MONDAY</h3>
              <ul className="space-y-3 text-gray-300">
                <li>6:00 AM - HIIT</li>
                <li>7:30 AM - Yoga</li>
                <li>12:00 PM - CrossFit</li>
                <li>6:00 PM - Spin</li>
                <li>7:30 PM - Strength</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">TUESDAY</h3>
              <ul className="space-y-3 text-gray-300">
                <li>6:00 AM - Pilates</li>
                <li>7:30 AM - HIIT</li>
                <li>12:00 PM - Yoga</li>
                <li>6:00 PM - CrossFit</li>
                <li>7:30 PM - Cardio</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">WEDNESDAY</h3>
              <ul className="space-y-3 text-gray-300">
                <li>6:00 AM - Strength</li>
                <li>7:30 AM - Pilates</li>
                <li>12:00 PM - HIIT</li>
                <li>6:00 PM - Yoga</li>
                <li>7:30 PM - CrossFit</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">THURSDAY</h3>
              <ul className="space-y-3 text-gray-300">
                <li>6:00 AM - CrossFit</li>
                <li>7:30 AM - Strength</li>
                <li>12:00 PM - Pilates</li>
                <li>6:00 PM - HIIT</li>
                <li>7:30 PM - Spin</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Equipment Section - Hidden for now */}
      {/* <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            PREMIUM EQUIPMENT
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏋️‍♂️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">STRENGTH TRAINING</h3>
              <p className="text-gray-400">
                Professional-grade free weights, machines, and functional training equipment from top manufacturers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🚴‍♀️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">CARDIO EQUIPMENT</h3>
              <p className="text-gray-400">
                State-of-the-art treadmills, bikes, rowers, and elliptical machines with integrated technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🏃‍♂️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">FUNCTIONAL TRAINING</h3>
              <p className="text-gray-400">
                TRX systems, battle ropes, kettlebells, and functional training zones for dynamic workouts.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fitness-2.png"
            alt="Ready to get started"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">GET STARTED TODAY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              READY TO GET
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              STARTED?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Choose the service that fits your goals and schedule. Our team is here to help you succeed.
          </p>
          <Link 
            href="/register" 
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 text-xl font-bold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-600/25 inline-block"
          >
            <span className="relative z-10">REGISTER NOW</span>
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
