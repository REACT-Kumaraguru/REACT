"use client";
import { useSearchParams } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplyForm />
    </Suspense>
  );
}

function ApplyForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
    theme: "",
    scholarship: false,
    headshot: null as File | null,
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type: inputType, checked } = target;

    setForm((prev) => ({
      ...prev,
      [name]: inputType === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setForm((prev) => ({ ...prev, headshot: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8 max-w-2xl mx-auto relative">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        {type === "student"
          ? "Welcome, Future Student Fellow!"
          : type === "professional"
          ? "Welcome, Aspiring Professional!"
          : "Apply to REACT"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10 mt-4 sm:mt-6">
        {/* Personal Info */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Personal Information</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded text-base"
              />
            </div>
          </div>
        </div>

        {/* REACT Story */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Your REACT Story</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Why do you want to join REACT?
              </label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                rows={4}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded text-base"
              />
            </div>
          </div>
        </div>

        {/* Extras */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Extras</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Preferred Theme
              </label>
              <input
                type="text"
                name="theme"
                value={form.theme}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded text-base"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="scholarship"
                checked={form.scholarship}
                onChange={handleChange}
                className="w-5 h-5" // Larger checkbox for better touch targets
              />
              <label className="text-sm">Apply for scholarship</label>
            </div>
          </div>
        </div>

        {/* Headshot Upload */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Headshot</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block mb-2 w-full text-sm"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full shadow"
            />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-base font-medium"
        >
          Submit Application
        </button>
      </form>

      {/* Confirmation Popup */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4"
            onClick={() => setShowConfirmation(false)}
          >
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-md w-full text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-green-700">
                Application Submitted!
              </h2>
              <p className="text-gray-600 text-sm">
                Thank you for applying. We'll get back to you shortly.
              </p>
              <p className="mt-2 text-xs text-gray-400">
                {isMobile ? "Tap" : "Click"} anywhere to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}