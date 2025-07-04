"use client";

import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function CareerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    motivation: "",
    resume: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, resume: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.resume) {
      alert("Please upload your resume.");
      return;
    }

    setSubmitting(true);

    try {
      // Upload resume to Supabase Storage
      const fileName = `${Date.now()}_${form.resume.name}`;
      const { error: storageError } = await supabase
        .storage
        .from('resumes') // Ensure 'resumes' bucket exists
        .upload(fileName, form.resume);

      if (storageError) {
        console.error('Resume Upload Error:', storageError.message);
        alert(`Failed to upload resume: ${storageError.message}`);
        setSubmitting(false);
        return;
      }

      // Get public URL of uploaded resume
      const { data: publicUrlData } = supabase
        .storage
        .from('resumes')
        .getPublicUrl(fileName);

      const resumeUrl = publicUrlData.publicUrl;

      // Insert form data into Supabase Table
      const { error: insertError } = await supabase
        .from('career_applications')
        .insert([
          {
            name: form.name,
            email: form.email,
            role: form.role,
            motivation: form.motivation,
            resume_url: resumeUrl,
          },
        ]);

      if (insertError) {
        console.error('Supabase Insert Error:', insertError.message);
        alert(`Submission failed: ${insertError.message}`);
      } else {
        alert("Application submitted successfully!");
        setForm({ name: "", email: "", role: "", motivation: "", resume: null });
      }
    } catch (err) {
      console.error('Unexpected Error:', err);
      alert("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold text-gray-700">Full Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          placeholder="Enter your full name"
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mt-1"
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mt-1"
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Which role are you applying for?</label>
        <select
          name="role"
          value={form.role}
          title="Select the role you are applying for"
          onChange={handleChange}
          required
          className="w-full border rounded p-2 mt-1"
        >
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
        <textarea
          name="motivation"
          value={form.motivation}
          placeholder="Describe your motivation for applying"
          onChange={handleChange}
          rows={4}
          required
          className="w-full border rounded p-2 mt-1"
        />
      </div>
      <div>
        <label className="block font-semibold text-gray-700">Upload Resume (PDF)</label>
        <input
          type="file"
          accept=".pdf"
          title="Upload your resume in PDF format"
          onChange={handleFileChange}
          required
          className="w-full mt-1"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
