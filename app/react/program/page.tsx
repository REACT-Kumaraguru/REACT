'use client';

import React, { useState } from 'react';
import { ArrowRight, Users, Globe, Heart, Briefcase, X, Bell, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ProgramsPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [showExpressInterestForm, setShowExpressInterestForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    subscribe: false
  });

  const programs = [
    {
      id: 1,
      icon: Briefcase,
      title: "REACT Fellowship",
      description: "Step beyond classrooms into real-world learning — where students in India design, build, and implement solutions that create tangible impact.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      link: "/react",
      available: true
    },
    {
      id: 2,
      icon: Globe,
      title: "REACT GLOBE Fellowship",
      description: "An immersive leadership journey for graduates and professionals to work within complex systems, drive change, and shape global solutions for India and beyond.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      link: "/react/globe",
      available: true
    },
    {
      id: 3,
      icon: Heart,
      title: "REACT Volunteer / Intern Program",
      description: "A hands-on pathway for young changemakers in India to lead operations, strategy, and storytelling — powering the REACT movement from within.",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      available: false
    },
    {
      id: 4,
      icon: Users,
      title: "REACT Citizen Fellow",
      description: "A global online experience open to anyone, anywhere — collaborate with teams across India and the world on live, impact-driven projects.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      available: false
    }
  ];

  const programOptions = [
    "REACT Volunteering Fellow",
    "REACT Citizen Fellow",
    "REACT Student Fellow (Future Cohort)",
    "REACT GLOBE Fellowship (Future Cohort)"
  ];

  const handleExploreClick = (program: any) => {
    if (program.available) {
      window.location.href = program.link;
    } else {
      setSelectedProgram(program.title);
      setShowComingSoon(true);
    }
  };

  const handleExpressInterest = () => {
    setShowComingSoon(false);
    setShowExpressInterestForm(true);
    setSubmitSuccess(false);
    setErrors({});
    setFormData({
      program: selectedProgram,
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
      subscribe: false
    });
  };

  const closeExpressInterestForm = () => {
    setShowExpressInterestForm(false);
    setSubmitSuccess(false);
    setErrors({});
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{0,3}[-.\s]?\d{1,14}$/;
    return phoneRegex.test(phone.trim());
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.program.trim()) {
      newErrors.program = "Please select a program";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number with country code (e.g., +91 1234567890)";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        program: formData.program,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
        subscribe: formData.subscribe,
        submittedAt: new Date().toISOString()
      };

      const response = await fetch('/api/express-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitSuccess(true);
      
      setTimeout(() => {
        closeExpressInterestForm();
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit. Please try again or email us directly at react@kct.ac.in" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">REACT Programs</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Choose your path to create real-world impact. Whether you're a student, graduate, professional, or global citizen — there's a place for you in the REACT movement.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className={`group relative bg-gradient-to-br ${program.bgGradient} rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                
                {!program.available && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <button
                    onClick={() => handleExploreClick(program)}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${program.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity group-hover:gap-3 duration-300`}
                  >
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">4</div>
            <p className="text-gray-700 font-semibold">Unique Programs</p>
            <p className="text-sm text-gray-600 mt-2">Tailored pathways for different stages of your journey</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">Global</div>
            <p className="text-gray-700 font-semibold">Reach & Impact</p>
            <p className="text-sm text-gray-600 mt-2">Connect with changemakers from India and around the world</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-pink-600 mb-2">Real</div>
            <p className="text-gray-700 font-semibold">World Impact</p>
            <p className="text-sm text-gray-600 mt-2">Work on actual problems with measurable outcomes</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Coming Soon!</h2>
                    <p className="text-yellow-100 text-sm mt-1">Opening Very Soon</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="text-white hover:text-gray-200 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {selectedProgram}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This program will be opening soon! Express your interest to be notified when applications open.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleExpressInterest}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Bell className="w-5 h-5" />
                  Express Interest
                </button>

                <button
                  onClick={() => setShowComingSoon(false)}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                For immediate inquiries, contact{' '}
                <a href="mailto:react@kct.ac.in" className="text-indigo-600 hover:underline font-semibold">
                  react@kct.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Express Interest Form Modal */}
      {showExpressInterestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!submitSuccess ? (
              <>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Express Interest</h2>
                      <p className="text-indigo-100 text-sm">We'll notify you when applications open</p>
                    </div>
                    <button
                      onClick={closeExpressInterestForm}
                      className="text-white hover:text-gray-200 transition"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Program *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => handleInputChange("program", e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.program ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">-- Choose a program --</option>
                      {programOptions.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                    {errors.program && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.program}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="name@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (with country code) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91 1234567890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your country"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.country}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you interested? (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us briefly why you're interested..."
                    />
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.subscribe}
                      onChange={(e) => handleInputChange("subscribe", e.target.checked)}
                      className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      I'm interested in receiving newsletters and updates.
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Interest
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  Your interest has been recorded. We'll notify you when applications open.
                </p>
                <button
                  onClick={closeExpressInterestForm}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramsPage;