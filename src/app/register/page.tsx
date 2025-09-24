"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    fitnessGoals: "",
    experienceLevel: "",
    preferredServices: [] as string[],
    emergencyContact: "",
    emergencyPhone: "",
    agreeToTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      preferredServices: prev.preferredServices.includes(service)
        ? prev.preferredServices.filter(s => s !== service)
        : [...prev.preferredServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Registration data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center relative">
        <div className="absolute inset-0">
          <Image
            src="/images/fitness-4.png"
            alt="Registration Successful"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
                 <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-8 flex items-center justify-center">
                   <Check className="w-12 h-12 text-white" />
                 </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            REGISTRATION <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SUCCESSFUL!</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for joining Off-Szn Mobile! We&apos;ll contact you within 24 hours to complete your membership setup and schedule your first session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-purple-600/25"
            >
              <span className="relative z-10">RETURN HOME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white/30 backdrop-blur-sm px-8 py-3 font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 lg:px-12 backdrop-blur-sm bg-black/20">
        <div className="text-xl md:text-2xl font-bold text-white tracking-wide">
          OFF-SZN MOBILE
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">HOME</Link>
          <Link href="/about" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">ABOUT</Link>
          <Link href="/services" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base">SERVICES</Link>
          <Link href="/register" className="hover:text-purple-400 transition-all duration-300 font-medium text-sm md:text-base text-purple-400">REGISTER</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 px-6 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src="/images/fitness-3.png"
            alt="Join Off-Szn Mobile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-400/10 backdrop-blur-sm border border-purple-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">JOIN US TODAY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            JOIN <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">OFF-SZN MOBILE</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Start your mobile fitness journey today. Fill out the form below and we&apos;ll get you started with the perfect mobile training plan.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            {/* Personal Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PERSONAL INFORMATION</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-semibold mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-semibold mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Fitness Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FITNESS INFORMATION</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="fitnessGoals" className="block text-sm font-semibold mb-2">
                    What are your primary fitness goals? *
                  </label>
                  <select
                    id="fitnessGoals"
                    name="fitnessGoals"
                    value={formData.fitnessGoals}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength-building">Strength Building</option>
                    <option value="endurance">Endurance</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="athletic-performance">Athletic Performance</option>
                    <option value="rehabilitation">Rehabilitation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-semibold mb-2">
                    What&apos;s your fitness experience level? *
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner (0-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Which services are you most interested in? (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Personal Training",
                      "Group Classes",
                      "Virtual Training",
                      "Premium Membership",
                      "Nutrition Consulting",
                      "Yoga Classes"
                    ].map((service) => (
                      <label key={service} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.preferredServices.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-5 h-5 text-purple-400 bg-gray-800 border-gray-700 rounded focus:ring-purple-400"
                        />
                        <span className="text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">EMERGENCY CONTACT</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-semibold mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-semibold mb-2">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-8">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-purple-400 bg-gray-800 border-gray-700 rounded focus:ring-purple-400 mt-1"
                />
                <span className="text-gray-300 text-sm">
                  I agree to the <Link href="#" className="text-purple-400 hover:underline">Terms and Conditions</Link> and 
                  <Link href="#" className="text-purple-400 hover:underline ml-1">Privacy Policy</Link>. 
                  I understand that this information will be used to create my membership profile and contact me regarding services. *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 text-xl font-bold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 rounded-xl shadow-lg hover:shadow-purple-600/25"
              >
                <span className="relative z-10">COMPLETE REGISTRATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>
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
