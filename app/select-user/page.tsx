"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SelectUserPage() {
  const router = useRouter();

  const handleSelect = (type: "student" | "professional") => {
    router.push(`/apply?type=${type}`);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Apply as a...</h1>
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Student Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-100 p-10 rounded-xl shadow-md text-center cursor-pointer hover:bg-green-200 transition"
          onClick={() => handleSelect("student")}
        >
          <h2 className="text-2xl font-semibold mb-2">Student</h2>
          <p className="text-gray-600 max-w-xs">If you're currently pursuing education or recently graduated.</p>
        </motion.div>

        {/* Professional Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-100 p-10 rounded-xl shadow-md text-center cursor-pointer hover:bg-blue-200 transition"
          onClick={() => handleSelect("professional")}
        >
          <h2 className="text-2xl font-semibold mb-2">Professional</h2>
          <p className="text-gray-600 max-w-xs">If you're already working or have experience in any field.</p>
        </motion.div>
      </div>
      
    </main>
  );
}
