'use client';

import CareerForm from "../CareerForm";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 py-16 px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Fellowship Application Form
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Fill in your details below to apply for the fellowship program.
        </p>

        <CareerForm />
      </div>
    </div>
  );
}
