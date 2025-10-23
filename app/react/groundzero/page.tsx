// "use client";

// import { useState, Suspense } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { supabase } from "./supabaseClient";
// import { useRouter } from "next/navigation";

// export default function ApplyPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ConfirmForm />
//     </Suspense>
//   );
// }

// function ConfirmForm() {
//   const [form, setForm] = useState({
//     fullName: "",
//     rollNo: "",
//     dept: "",
//     personalEmail: "",
//     collegeEmail: "",
//     contactNumber: "",
//     confirmParticipation: "No",
//     comments: "",
//     agreeToTerms: false,
//   });

//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const router = useRouter();

//   const resetForm = () => {
//     setForm({
//       fullName: "",
//       rollNo: "",
//       dept: "",
//       personalEmail: "",
//       collegeEmail: "",
//       contactNumber: "",
//       confirmParticipation: "No",
//       comments: "",
//       agreeToTerms: false,
//     });
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     if (type === "checkbox") {
//       setForm((prev) => ({
//         ...prev,
//         [name]: (e.target as HTMLInputElement).checked,
//       }));
//     } else {
//       setForm((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.agreeToTerms && form.confirmParticipation === "Yes") {
//       alert("You must agree to the fellowship terms to confirm participation.");
//       return;
//     }

//     const { error } = await supabase.from("groundzero_applications").insert([
//       {
//         full_name: form.fullName,
//         roll_no: form.rollNo,
//         department: form.dept,
//         personal_email: form.personalEmail,
//         college_email: form.collegeEmail,
//         contact_number: form.contactNumber,
//         confirm_participation: form.confirmParticipation === "Yes",
//         comments: form.comments,
//         agree_to_terms: form.agreeToTerms,
//       },
//     ]);

//     if (error) {
//       console.error("Supabase Insert Error:", error.message, error.details);
//       alert(`Submission failed: ${error.message}`);
//     } else {
//       setShowConfirmation(true);
//       resetForm();
//       setTimeout(() => {
//         setShowConfirmation(false);
//         router.back();
//       }, 5000);
//     }
//   };

//   return (
//     <main style={{ color: "black", marginBottom: "1rem" }} className="min-h-screen bg-white p-8 max-w-2xl mx-auto relative">
//       <h1 style={{ fontSize: "24px", color: "black", marginBottom: "1rem" }} className="text-3xl font-bold mb-6 text-center">
//         Fellowship Participation Confirmation
//       </h1>
//       <div className="mb-8 text-center text-gray-800">
//         <p style={{ fontSize: "18px", color: "black", marginBottom: "1rem" }} className="text-lg font-medium">
//           Congratulations on being shortlisted for the fellowship! Please confirm your participation by filling out this form. This program includes a 6-month commitment with field immersion. Ensure all details are accurate before submitting.
//         </p>
    
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-10 mt-6">
//         <section>
//           <h2 style={{ fontSize: "20px", color: "black", marginBottom: "1rem" }} className="text-xl font-semibold mb-4">Student Information</h2>
//           <div style={{ fontSize: "16px", color: "black", marginBottom: "1rem" }} className="space-y-4">
//             <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
//             <Input label="Roll Number" name="rollNo" value={form.rollNo} onChange={handleChange} required />
// <div>
//   <label className="block text-sm font-medium">Department</label>
//   <select
//     name="dept"
//     value={form.dept}
//     onChange={handleChange}
//     required
//     className="w-full mt-1 p-2 border border-gray-300 rounded"
//   >
//     <option value="">Select</option>
//     <option value="Aeronautical Engineering">Aeronautical Engineering</option>
//     <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
//     <option value="Automobile Engineering">Automobile Engineering</option>
//     <option value="Biotechnology">Biotechnology</option>
//     <option value="Civil Engineering">Civil Engineering</option>
//     <option value="Computer Science and Engineering">Computer Science and Engineering</option>
//     <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
//     <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
//     <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
//     <option value="Fashion Technology">Fashion Technology</option>
//     <option value="Information Technology">Information Technology</option>
//     <option value="Mechanical Engineering">Mechanical Engineering</option>
//     <option value="Mechatronics Engineering">Mechatronics Engineering</option>
//     <option value="Textile Technology">Textile Technology</option>
//   </select>
// </div>
//             <Input label="Personal Email ID" name="personalEmail" value={form.personalEmail} onChange={handleChange} required />
//             <Input label="College Email ID" name="collegeEmail" value={form.collegeEmail} onChange={handleChange} required />
//             <Input label="Contact Number (with country code)" name="contactNumber" value={form.contactNumber} onChange={handleChange} required />
//             <Select
//               label="Confirm Participation in the Fellowship"
//               name="confirmParticipation"
//               value={form.confirmParticipation}
//               onChange={handleChange}
//               options={["No", "Yes"]}
//               required
//             />
//             {form.confirmParticipation === "No" && (
//               <Textarea
//                 label="Reason for Declining (Optional)"
//                 name="comments"
//                 value={form.comments}
//                 onChange={handleChange}
//               />
//             )}
//             {form.confirmParticipation === "Yes" && (
//               <Checkbox
//                 label="I agree to the fellowship terms and commit to the 6-month program, including field immersion."
//                 name="agreeToTerms"
//                 checked={form.agreeToTerms}
//                 onChange={handleChange}
//                 required
//               />
//             )}
//           </div>
//         </section>

//         <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
//           Submit Confirmation
//         </button>
//       </form>

//       <AnimatePresence>
//         {showConfirmation && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             onClick={() => {
//               setShowConfirmation(false);
//               router.back();
//             }}
//           >
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-md text-center text-black dark:text-white">
//               <h2 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-400">
//                 {form.confirmParticipation === "Yes" ? "Participation Confirmed!" : "Submission Received!"}
//               </h2>
//               <p className="text-sm">
//                 {form.confirmParticipation === "Yes"
//                   ? "Thank you for confirming your participation in the fellowship. We’ll follow up with next steps soon."
//                   : "Thank you for letting us know. We respect your decision and wish you the best."}
//               </p>
//               <p className="mt-2 text-xs">Click anywhere to close</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

// function Input({ label, ...props }: any) {
//   return (
//     <div>
//       <label className="block text-sm font-medium">{label}</label>
//       <input {...props} className="w-full mt-1 p-2 border border-gray-300 rounded" />
//     </div>
//   );
// }

// function Select({ label, name, value, onChange, options }: any) {
//   return (
//     <div>
//       <label className="block text-sm font-medium">{label}</label>
//       <select name={name} value={value} onChange={onChange} className="w-full mt-1 p-2 border border-gray-300 rounded">
//         <option value="">Select</option>
//         {options.map((opt: string) => (
//           <option key={opt} value={opt}>{opt}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function Textarea({ label, ...props }: any) {
//   return (
//     <div>
//       <label className="block text-sm font-medium">{label}</label>
//       <textarea {...props} rows={4} className="w-full mt-1 p-2 border border-gray-300 rounded" />
//     </div>
//   );
// }

// function Checkbox({ label, name, checked, onChange }: any) {
//   return (
//     <div className="flex items-center gap-2">
//       <input type="checkbox" name={name} checked={checked} onChange={onChange} />
//       <label className="text-sm">{label}</label>
//     </div>
//   );
// }


"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

export default function ClosedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationClosed />
    </Suspense>
  );
}

function ApplicationClosed() {
  const router = useRouter();

  return (
    <main
      style={{ color: "black", marginBottom: "1rem" }}
      className="min-h-screen bg-white p-8 max-w-2xl mx-auto relative flex flex-col items-center justify-center"
    >
      <h1
        style={{ fontSize: "24px", color: "black", marginBottom: "1rem" }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Application Period Closed
      </h1>
      <div className="mb-8 text-center text-gray-800">
        <p
          style={{ fontSize: "18px", color: "black", marginBottom: "1rem" }}
          className="text-lg font-medium"
        >
          Thank you for your interest in the Fellowship Program. The application period for this cycle has now closed. We appreciate your enthusiasm and encourage you to stay tuned for future opportunities.
        </p>
        
      </div>
      <button
        onClick={() => router.back()}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Go Back
      </button>
    </main>
  );
}