"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "./supabaseClient"; 


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

  const isStudent = type !== "professional";

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    age: "",
    bloodGroup: "",
    personalEmail: "",
    collegeEmail: "",
    contactNumber: "",
    linkedIn: "",
    parentName: "",
    parentRelation: "",
    parentContact: "",
    permanentAddress: "",
    communicationAddress: "",
    institution: "",
    reason: "",
    contribution: "",
    theme: "",
    scholarship: "",
    scholarshipJustification: "",
    fallbackConsent: "",
    fallbackPlan: "",
    fallbackFoodStay: "",
    headshot: null as File | null,
    agreedToImmersion: false,
    discussedWithGuardian: false,
    guardianCanVisit: false,
    gender: "",

  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setForm((prev) => ({ ...prev, headshot: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    let headshotUrl = "";
  
    if (form.headshot) {
      const fileName = `headshots/${Date.now()}_${form.headshot.name}`;
      const { data: imageData, error: imageError } = await supabase.storage
        .from("headshots")
        .upload(fileName, form.headshot);
  
      if (imageError) {
        alert("Image upload failed. Please try again.");
        return;
      }
  
      headshotUrl = supabase.storage
        .from("headshots")
        .getPublicUrl(imageData.path).data.publicUrl;
    }
  
    const { error } = await supabase.from("applications").insert([
      {
        full_name: form.fullName,
        dob: form.dob,
        age: form.age,
        gender: form.gender,
        blood_group: form.bloodGroup,
        personal_email: form.personalEmail,
        college_email: form.collegeEmail,
        contact_number: form.contactNumber,
        linkedin: form.linkedIn,
        parent_name: form.parentName,
        parent_relation: form.parentRelation,
        parent_contact: form.parentContact,
        permanent_address: form.permanentAddress,
        communication_address: form.communicationAddress,
        institution: form.institution,
        theme: form.theme,
        reason: form.reason,
        contribution: form.contribution,
        scholarship: form.scholarship,
        scholarship_why: form.scholarshipJustification,
        scholarship_fallback: form.fallbackPlan,
        headshot_url: headshotUrl,
        agreed_to_immersion: form.agreedToImmersion,
        discussed_with_guardian: form.discussedWithGuardian,
        guardian_can_visit: form.guardianCanVisit,
      },
    ]);
  
    if (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    } else {
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 5000);
    }
  };
  

  return (
    <main className="min-h-screen bg-white p-8 max-w-2xl mx-auto relative">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {type === "student"
          ? "Welcome, Future Student Fellow!"
          : type === "professional"
          ? "Welcome, Aspiring Professional!"
          : "Apply to REACT"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10 mt-6">
        {/* Personal Info */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
            <Input type="date" label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} required />
            <Input label="Age" name="age" value={form.age} onChange={handleChange} required />
            <Select
              label="Blood Group"
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
            />
            <Input label="Personal Email ID" name="personalEmail" value={form.personalEmail} onChange={handleChange} />
            <Input label="College/Work Email ID" name="collegeEmail" value={form.collegeEmail} onChange={handleChange} />
            <Input label="Contact Number (with country code)" name="contactNumber" value={form.contactNumber} onChange={handleChange} />
            <Input label="LinkedIn Profile Link" name="linkedIn" value={form.linkedIn} onChange={handleChange} />
            <Select
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={["Male", "Female", "Prefer not to say"]}
          />
          </div>
        </section>

        {/* Parent Info (Students Only) */}
        {isStudent && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Parent/Guardian Details</h2>
            <Input label="Parent/Guardian Name" name="parentName" value={form.parentName} onChange={handleChange} />
            <Input label="Relation" name="parentRelation" value={form.parentRelation} onChange={handleChange} />
            <Input label="Parent Contact (with country code)" name="parentContact" value={form.parentContact} onChange={handleChange} />
          </section>
        )}

        {/* Address */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <Input label="Permanent Address" name="permanentAddress" value={form.permanentAddress} onChange={handleChange} />
          <Input label="Communication Address" name="communicationAddress" value={form.communicationAddress} onChange={handleChange} />
        </section>

        {/* Program Details */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Program Details</h2>
          <p className="text-sm text-gray-700 mb-4">
            This is a 6-month program with a compulsory 30-day field immersion.
            Selected participants must also attend a pre-selection immersion visit. Please confirm the following:
          </p>
          <Checkbox label="I am okay with the 6-month commitment including field immersion." name="agreedToImmersion" checked={form.agreedToImmersion} onChange={handleChange} />
          <Checkbox label="I have discussed this with my parents/guardians." name="discussedWithGuardian" checked={form.discussedWithGuardian} onChange={handleChange} />
          <Checkbox label="My guardian can accompany me for the pre-selection immersion if required." name="guardianCanVisit" checked={form.guardianCanVisit} onChange={handleChange} />
        </section>

        {/* Motivation */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Your REACT Story</h2>
          <Textarea label="Why do you want to join REACT?" name="reason" value={form.reason} onChange={handleChange} />
          <Textarea label="What do you hope to learn or contribute through REACT?" name="contribution" value={form.contribution} onChange={handleChange} />
        </section>

        {/* Theme & Institution */}
        <section>
          <Select
            label="Preferred Theme"
            name="theme"
            value={form.theme}
            onChange={handleChange}
            options={[
              "Tech for Forest",
              "Inclusive Infrastructure Lab",
              "Tech for Society",
              "Rural Innovation",
              "Tech for Farmers",
              "HealthTech for All",
              "Tech for Urban Sanitation"
            ]}
          />
          <Select
            label="Institution / Organization"
            name="institution"
            value={form.institution}
            onChange={handleChange}
            options={["KCT", "KCLAS", "KIA", "KSI", "KCT BS", "KBS", "Other"]}
          />
        </section>

        {/* Scholarship */}
                <Select
          label="Would you like to apply for a scholarship?"
          name="scholarship"
          value={form.scholarship}
          onChange={handleChange}
          options={["No", "Yes"]}
        />

        {form.scholarship === "Yes" && (
          <>
            <Textarea
              label="What makes you a strong candidate for a scholarship? Share your context or motivation."
              name="scholarshipJustification"
              value={form.scholarshipJustification}
              onChange={handleChange}
            />
            <Select
              label="If you are not awarded a scholarship, would you still be willing to enroll in REACT?"
              name="fallbackConsent"
              value={form.fallbackConsent}
              onChange={handleChange}
              options={["No", "Yes"]}
            />
            {form.fallbackConsent === "Yes" && (
              <Textarea
                label="If selected without scholarship, how do you plan to manage the cost of tuition, food, and accommodation?"
                name="fallbackPlan"
                value={form.fallbackPlan}
                onChange={handleChange}
              />
            )}
          </>
        )}

        {form.scholarship === "No" && (
          <Textarea
            label="Since you're not applying for a scholarship, please share how you plan to manage the cost of tuition, food, and accommodation."
            name="fallbackPlan"
            value={form.fallbackPlan}
            onChange={handleChange}
          />
        )}



        {/* Headshot Upload */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Upload Your Photo</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="block mb-2" />
          {preview && (
            <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-full shadow" />
          )}
        </section>

        {/* Submit */}
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
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
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            onClick={() => setShowConfirmation(false)}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-green-700">Application Submitted!</h2>
              <p className="text-gray-600 text-sm">Thank you for applying. We’ll get back to you shortly.</p>
              <p className="mt-2 text-xs text-gray-400">Click anywhere to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Reusable components
function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input {...props} className="w-full mt-1 p-2 border border-gray-300 rounded" />
    </div>
  );
}

function Select({ label, name, value, onChange, options }: any) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full mt-1 p-2 border border-gray-300 rounded">
        <option value="">Select</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <textarea {...props} rows={4} className="w-full mt-1 p-2 border border-gray-300 rounded" />
    </div>
  );
}

function Checkbox({ label, name, checked, onChange }: any) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      <label className="text-sm">{label}</label>
    </div>
  );
}
