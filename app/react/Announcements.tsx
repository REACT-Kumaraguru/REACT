"use client";

import { useState } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";

const Announcements = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });

  const announcements = [
    {
      id: 1,
      title: "REACT Student Fellow 2025 Cohort Application closed",
      date: "",
      content: "A six-month, credit-aligned fellowship that turns classrooms into real-world labs. Fellows live the problem, apply REACT tools like PULSE and Infinity WHY, and develop validated, impact-ready solutions showcased on Demo Day.",
      status: "closed"
    },
    {
      id: 2,
      title: "REACT GLOBE Fellowship — Ongoing (Closes in 10 Days)",
      date: "",
      content: "An immersive 6–12 month leadership fellowship working in India on real-world challenges. Fellows drive systems change, build ecosystems, and create global solutions through masterclasses, field immersion, and mentorship.",
      status: "open",
      link: "/react/globe"
    },
    {
      id: 3,
      title: "REACT Volunteering Fellow — Opening Soon",
      date: "",
      content: "A six-month operational leadership experience where volunteers co-design programmes, manage communications, and lead innovation processes — powering the REACT ecosystem from within.",
      status: "soon"
    },
    {
      id: 4,
      title: "REACT Citizen Fellow — Opening Soon",
      date: "",
      content: "Join a global community of changemakers, collaborate on hands-on projects across borders, and build leadership experience — entirely online through REACT GLOBE.",
      status: "soon"
    }
  ];

  const programOptions = [
    "REACT Volunteering Fellow",
    "REACT Citizen Fellow",
    "REACT Student Fellow (Future Cohort)",
    "REACT GLOBE Fellowship (Future Cohort)"
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (programTitle?: string) => {
    setShowModal(true);
    setSubmitSuccess(false);
    setErrors({});
    setFormData({
      program: programTitle || "",
      name: "",
      email: "",
      phone: "",
      country: "",
      message: ""
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitSuccess(false);
    setErrors({});
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Accepts formats: +911234567890, +91 1234567890, +1-234-567-8900, etc.
    const phoneRegex = /^\+?[1-9]\d{0,3}[-.\s]?\d{1,14}$/;
    return phoneRegex.test(phone.trim());
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
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
      
      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit. Please try again or email us directly at react@kct.ac.in" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
        <p className="text-gray-600 mb-8">
          Stay updated with the latest information about the REACT Fellowship Program
        </p>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div 
                className="px-6 py-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(announcement.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                    {announcement.status === "open" && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Open Now
                      </span>
                    )}
                    {announcement.status === "soon" && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">
                        Opening Soon
                      </span>
                    )}
                    {announcement.status === "closed" && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full">
                        Closed
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                </div>
                <div className="text-gray-400 ml-4">
                  {expandedId === announcement.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              
              {expandedId === announcement.id && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 mb-4">{announcement.content}</p>
                  
                  {announcement.status === "open" && announcement.link && (
                    <a
                      href={announcement.link}
                      className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                      Apply Now
                    </a>
                  )}
                  
                  {announcement.status === "soon" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(announcement.title);
                      }}
                      className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                    >
                      Express Interest
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* General Express Interest Button */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
          <h2 className="text-xl font-semibold text-indigo-900 mb-2">Interested in Future Programs?</h2>
          <p className="text-gray-700 mb-4">
            Can't find the right program opening now? Express your interest and we'll notify you when new opportunities arise.
          </p>
          <button
            onClick={() => openModal()}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Express General Interest
          </button>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Important Reminders</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Follow our social media channels for real-time updates</li>
            <li>For any queries regarding the program, contact <span className="font-medium">react@kct.ac.in</span></li>
            <li>All deadlines are based on Indian Standard Time (IST)</li>
          </ul>
        </div>
      </div>

      {/* Express Interest Modal */}
      {showModal && (
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
                      onClick={closeModal}
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
                  onClick={closeModal}
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

export default Announcements;