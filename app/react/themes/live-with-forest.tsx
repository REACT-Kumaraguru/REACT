"use client";

import Image from "next/image";
import forestImage from "public/images/themes/original/2.png"; // Adjust the image path as needed

export default function TechForForest() {
  return (
    <div className="relative flex text-gray-700">
      {/* Right-margin image for large screens */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={forestImage}
          alt="Forest"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content with padding to avoid image overlap */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Tech for Forest</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Forests don’t speak human. But they leave signs. It’s our responsibility to listen—and to build the tools that listen better.”
        </blockquote>

        <p className="mb-4">
          In a world where forests fall silently and disappear without notice, the need to protect them is no longer just for conservationists. It now calls for technologists, designers, engineers, and system thinkers. <strong>Tech for Forest</strong> is built on a bold belief: nature and technology are not opposites—they are allies.
        </p>

        <p className="mb-4">
          Across the globe, forests are being defended using satellites, AI, drones, and data. In India—with over <strong>70 million hectares of forest land</strong>—the need for such interventions is critical. Yet, on the ground, most forest officers work with outdated tools and overwhelming terrain.
        </p>

        <h3 className="text-xl font-semibold mb-2">Not a Tourist, but a Collaborator</h3>
        <p className="mb-4">
          This theme invites you into the heart of India’s forest ecosystems—not as tourists, but as collaborators. You’ll work with forest officials, tribal cooperatives, and on-ground teams to understand what the forest truly needs from technology.
        </p>

        <ul className="list-disc pl-5 mb-6">
          <li>Co-create with frontline forest workers to identify real needs</li>
          <li>Build tools to improve patrolling, reporting, and resource tracking</li>
          <li>Prototype drone mapping systems, forest fire alert tech, and wildlife monitoring solutions</li>
          <li>Respect and learn from tribal knowledge systems and integrate them into design</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Why This Matters</h3>
        <p className="mb-2">
          This isn’t just about protecting trees—it’s about shaping the future of our planet. Forests are:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Climate regulators</strong>: India’s largest carbon sinks</li>
          <li><strong>Biodiversity havens</strong>: Home to rare and endangered species</li>
          <li><strong>Living classrooms</strong>: Teaching uncertainty, interdependence, and systems thinking</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Designing for Complexity</h3>
        <p className="mb-4">
          You’ll gain firsthand experience of how ecosystems function—and how technology can be designed for complexity, not just efficiency. You won’t just build. You’ll listen, adapt, and iterate with the ecosystem itself.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “If the next generation of engineers aren’t fluent in ecology—we’re building for a world that might not exist.”
        </blockquote>

        <p>
          <strong>Tech for Forest</strong> is not about digitizing nature. It’s about understanding it—so that those who protect it can do so with strength, support, and speed.
        </p>
      </div>
    </div>
  );
}
