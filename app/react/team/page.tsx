import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  photo: string;
  linkedin?: string | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, photo, linkedin }) => (
  <div className="flex flex-col items-center bg-white rounded-2xl shadow p-4 hover:shadow-md transition">
    <img
      src={photo}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mb-2"
    />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600 text-center">{role}</p>
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm mt-1 hover:underline"
      >
        LinkedIn
      </a>
    )}
  </div>
);

interface NGOCardProps {
  name: string;
}

const NGOCard: React.FC<NGOCardProps> = ({ name }) => (
  <div className="flex flex-col items-center bg-white text-black rounded-xl shadow p-4 min-w-[10rem] mx-2 hover:shadow-lg transition">
   
    <h2 className="text-sm font-semibold text-center">{name}</h2>
  </div>
);


const team: ProfileCardProps[] = [
  {
    name: 'Brathikan',
    role: 'Head - React',
    linkedin: 'https://www.linkedin.com/in/brathikan/',
    photo: '/team/brathikan.jpg',
  },
  {
    name: 'Padhmanand',
    role: 'Lead – Academic Integration',
    linkedin: 'https://www.linkedin.com/in/padhmanand-sudhakar-1789a12a5/',
    photo: '/team/padhmanand.jpg',
  },
  {
    name: 'Nandeeswaran K',
    role: 'Associate Intern - Learning and Development',
    linkedin: 'https://linkedin.com/in/nandeeswaran-k',
    photo: '/team/nandees.jpg',
  },
  {
    name: 'Sivakumar',
    role: 'Alumni Coordinator',
    linkedin: 'https://www.linkedin.com/in/dr-sivakumar-sadasivam-10834578/',
    photo: '/team/sivakumar.jpg',
  },
  {
    name: 'Preethi Meena',
    role: 'NGO Coordinator',
    linkedin: '#',
    photo: '/team/preethi.png',
  },
  {
    name: 'Abishake',
    role: 'Associate Intern - Event Coordinator',
    linkedin: '#',
    photo: '/team/Abishake.jpg',
  },
];

const advisors: Omit<ProfileCardProps, 'linkedin'>[] = [
  { name: 'Suganthi S T', role: 'EEE - Electrical', photo: '/team/suganthi.jpg' },
  { name: 'Aswin Bharath A', role: 'Civil - Structural', photo: '/team/aswin bharath.jpg' },
  { name: 'Chitra S', role: 'Civil - Environmental', photo: '/team/chitra.jpg' },
  { name: 'Aravind S L', role: 'Mechanical', photo: '/team/Aravind.jpg' },
  { name: 'Kiranlal S', role: 'Startup Advisor', photo: '/team/kiranlal.jpg' },
  {
    name: 'Saravanan C',
    role: 'Microcosm Senior Advisor - Agriculture & Smart City',
    photo: '/team/saravanan.jpg',
  },
];

const partners: string[] = [
  'Elumni',
  'WWOOF India',
  'Keystone',
  'Arivial Thamil Sangam',
];

const TeamPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Core Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <ProfileCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Advisors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
            <ProfileCard key={advisor.name} {...advisor} linkedin={null} />
          ))}
        </div>
      </section>

<section>
  <h2 className="text-2xl font-semibold mb-4">NGO Partners</h2>
  <div className="overflow-hidden relative w-full">
    <div className="flex animate-marquee w-max space-x-8">
      {[...partners, ...partners].map((name, index) => (
        <NGOCard
          key={index}
          name={name}
          
        />
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default TeamPage;
