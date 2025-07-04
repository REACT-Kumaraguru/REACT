'use client';

import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  photo: string;
  linkedin?: string | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, photo, linkedin }) => (
  <div className="flex flex-col items-center bg-white text-black rounded-xl shadow p-4 hover:shadow-lg transition">
    <Image
      src={photo}
      alt={name}
      width={96}
      height={96}
      className="rounded-full object-cover mb-2"
    />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-700 text-center">{role}</p>
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm mt-1 hover:underline"
      >
        LinkedIn
      </a>
    )}
  </div>
);

const team: ProfileCardProps[] = [
  {
    name: 'Brathikan',
    role: 'Head - React',
    linkedin: '#',
    photo: '/images/brathikan.jpg',
  },
  {
    name: 'Padhmanand',
    role: 'Lead – Academic Integration',
    linkedin: '#',
    photo: '/images/padhmanand.jpg',
  },
  {
    name: 'Nandeeswaran K',
    role: 'Associate Intern - Learning and Development',
    linkedin: '#',
    photo: '/images/nandeeswaran.jpg',
  },
  {
    name: 'Sowmiya',
    role: 'Associate Intern - Field Ops & Documentation',
    linkedin: '#',
    photo: '/images/sowmiya.jpg',
  },
  {
    name: 'Shivakumar',
    role: 'Alumni Coordinator',
    linkedin: '#',
    photo: '/images/shivakumar.jpg',
  },
  {
    name: 'Preethi',
    role: 'NGO Coordinator',
    linkedin: '#',
    photo: '/images/preethi.jpg',
  },
];

const advisors: Omit<ProfileCardProps, 'linkedin'>[] = [
  { name: 'Suganthi', role: 'EEE - Electrical', photo: '/images/suganthi.jpg' },
  { name: 'Aswin', role: 'Civil - Structural', photo: '/images/aswin.jpg' },
  { name: 'Chitra', role: 'Civil - Environmental', photo: '/images/chitra.jpg' },
  { name: 'Aravind', role: 'Mechanical', photo: '/images/aravind.jpg' },
  { name: 'Kiranlal', role: 'Startup Advisor', photo: '/images/kiranlal.jpg' },
  {
    name: 'Saravanan C',
    role: 'Microcosm Senior Advisor - Agriculture & Smart City',
    photo: '/images/saravanan.jpg',
  },
];

const partners: string[] = [
  'Elumni',
  'WWOOF India',
  'Keystone',
  'Arivial Thamil Sangam',
];

export default function Team() {
  return (
    <main className="min-h-screen p-10 text-white bg-black">
      <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <ProfileCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advisors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
            <ProfileCard key={advisor.name} {...advisor} linkedin={null} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">NGO Partners</h2>
        <ul className="list-disc list-inside text-lg text-white space-y-1">
          {partners.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
