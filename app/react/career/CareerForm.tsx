// app/react/careers/CareerForm.tsx
"use client";

import { useState } from "react";

export default function CareerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    motivation: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, resume: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Submitted! We'll contact you soon.");
  };

  return (
    <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold text-gray-700">Full Name</label>
        <input name="name" type="text" value={form.name} onChange={handleChange} required className="w-full border rounded p-2 mt-1" />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded p-2 mt-1" />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Which role are you applying for?</label>
        <select name="role" value={form.role} onChange={handleChange} required className="w-full border rounded p-2 mt-1">
          <option value="">Select a role</option>
          <option value="Theme Program Manager">Theme Program Management Intern</option>
          <option value="Documentation & Project Lead">Documentation & Project Intern</option>
          <option value="Visual Identity & Content Creator">Content Creator Intern</option>
          <option value="Outreach & Campaign Planner">Outreach & Campaign Planning Intern</option>
          <option value="Budget Planning & Vendor Accounts">Budget Planning Intern</option>
          <option value="Scholarship & Cost Report Analyst">Scholarship & Cost Report Analyst</option>
          <option value="Documentation Officer">Documentation Officer</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Why are you applying?</label>
        <textarea name="motivation" value={form.motivation} onChange={handleChange} rows={4} required className="w-full border rounded p-2 mt-1" />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Upload Resume (PDF)</label>
        <input type="file" accept=".pdf" onChange={handleFileChange} required className="w-full mt-1" />
      </div>
      <button type="submit" className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800">Submit Application</button>
    </form>
  );
}