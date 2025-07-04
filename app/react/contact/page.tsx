"use client";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-50"
        style={{
          backgroundImage: "url('/mathbg.png')",
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-12 md:px-24">
        <h1 className="text-6xl font-bold text-center mb-14 text-white tracking-wide">
          Get in Touch with <span className="text-yellow-300">REACT</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl transition transform hover:scale-[1.02]">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "white" }}>
  Key Contacts
</h2>

            <ul className="space-y-4 text-lg">
              <li>
                <strong>Academic Coordinator</strong> –{" "}
                <a href="tel:+919591022163" className="text-blue-300 underline hover:text-blue-400">
                  +91 95910 22163
                </a>
              </li>
              <li>
                <strong>Learning & Development</strong> –{" "}
                <a href="tel:+919629939048" className="text-blue-300 underline hover:text-blue-400">
                  +91 96299 39048
                </a>
              </li>
              <li>
                <strong>Admin Lead</strong> –{" "}
                <a href="tel:+919080197843" className="text-blue-300 underline hover:text-blue-400">
                  +91 90801 97843
                </a>
              </li>
              <li>
                <strong>Relationship Coordinator</strong> –{" "}
                <a href="tel:+919080499916" className="text-blue-300 underline hover:text-blue-400">
                  +91 90804 99916
                </a>
              </li>
              <li>
                <strong>Alumni Coordinator</strong> –{" "}
                <a href="tel:+919444283430" className="text-blue-300 underline hover:text-blue-400">
                +91 94442 83430
                </a>
              </li>
            </ul>
          </div>

          {/* Email & Socials */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl transition transform hover:scale-[1.02]">
            <h2  className="text-3xl font-semibold mb-4" style={{ color: "white" }}> Reach Us Online</h2>
            <div className="mb-6">
              <p 
             className="text-2xl font-semibold mb-4" style={{ color: "white" }}>Email</p>
              <a
                href="mailto:react@kct.ac.in"
                className="text-blue-300 underline hover:text-blue-400"
              >
                react@kct.ac.in
              </a>
            </div>

            <p className="text-2xl font-semibold mb-4" style={{ color: "white" }}>Follow Us</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                {/* LinkedIn Icon */}
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.5h5V24H0V8.5zM7.5 8.5H12v2.35h.07c.63-1.2 2.17-2.35 4.47-2.35 4.78 0 5.66 3.15 5.66 7.25V24h-5v-6.75c0-1.61-.03-3.7-2.26-3.7-2.27 0-2.62 1.77-2.62 3.58V24h-5V8.5z" />
                </svg>
                <a
                  href="https://www.linkedin.com/company/react-ki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-blue-400"
                >
                  LinkedIn – REACT
                </a>
              </li>
              <li className="flex items-center gap-3">
                {/* Instagram Icon */}
                <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25zm0 7.75A3 3 0 1 0 9 12a3 3 0 0 0 3 3zm4.88-8.13a1.12 1.12 0 1 1-1.12-1.12 1.12 1.12 0 0 1 1.12 1.12z" />
                </svg>
                <a
                  href="https://www.instagram.com/react.tribe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 underline hover:text-pink-500"
                >
                  Instagram – @react.tribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
