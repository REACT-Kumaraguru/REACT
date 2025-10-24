import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Upload, X,FileText } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from "./supabaseClient"; 

interface FormData {
  fullName: string;
  preferredName: string;
  nationality: string;
  age: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  occupation: string;
  qualification: string;
  emergencyContact: string;
  searching: string;
  immersion: string;
  workExperiment: string;
  innerShift: string;
  indiaExcitement: string;
  futurePath: string;
  skillAreas: string[];
  cvFile: File | null;
  portfolioLink: string;
  residencyCommitment: string;
  passport: string;
  englishComfort: string;
  participationType: string;
  logisticalSupport: string;
  ambassadorInterest: string;
  submissionTiming: string;
  hearAbout: string[];
  declarations: string[];
}

// Policies Modal Component
const PoliciesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex justify-between items-center rounded-t-lg flex-shrink-0">
          <div className="flex items-center gap-3">
            <FileText size={28} />
            <h2 className="text-2xl font-bold">Policies & Information</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-blue-700 rounded-full p-2 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 flex-1">
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Residency Requirement</h3>
              <p className="text-gray-700">
                Fellows must reside full-time in Coimbatore, India, for the entire duration of the fellowship (January – June 2026). During this term, fellows are required to maintain their primary residence locally and be available for full-time engagement in the fellowship activities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Travel, Visa & Arrival</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Travel to and from India is arranged by the fellow, at their own cost unless otherwise specified.</li>
                <li>REACT will provide formal invitation letters, orientation guidance, and limited visa-assistance for eligible fellows.</li>
                <li>Fellows are responsible for ensuring they hold the correct visa/permit for residency, field visits and programme participation. REACT does not guarantee visa approval.</li>
                <li>Arrival in India must occur before the stipulated orientation start date; late arrivals may jeopardise participation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Health, Safety & Insurance</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Valid international health insurance (valid in India for the full programme period) is mandatory before arrival. Proof must be submitted by the deadline specified in the offer letter.</li>
                <li>Fellows must comply with any local health regulations, medical requirements and safety protocols promulgated by REACT partner institutions or host organisations.</li>
                <li>REACT is not liable for personal medical expenses, emergencies or travel delays unless explicitly specified in the fellowship offer.</li>
                <li>Fellows must keep REACT informed of any medical or personal conditions that could affect programme participation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Language & Working Medium</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>English is the official working language of the fellowship; all major communications, deliverables and coordination will occur in English.</li>
                <li>Translators or local language assistance may be provided during field-work or community engagements, but fellows are responsible for navigating local interactions when required.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Conduct, Ethics & Community Respect</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fellows must act in accordance with the values of REACT: collaboration, humility, integrity, and systems-thinking.</li>
                <li>Respect for community cultures, local customs, institutional norms and partner ecosystems is mandatory. Any behaviour that undermines host-community trust or REACT's reputation may result in disciplinary action or termination.</li>
                <li>Fellows must adhere to the host institution's code of conduct, including guidelines on harassment, discrimination, harassment-free environment, and ethical engagement.</li>
                <li>Fellows must maintain confidentiality with respect to sensitive information, data and partner-agreements, unless otherwise authorised.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Diversity, Inclusion & Equal Opportunity</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>REACT is committed to providing equal opportunity and inclusive access to people of all backgrounds, identities, nationalities, genders, and abilities.</li>
                <li>Applications are encouraged from a diverse set of candidates; fellowship decisions will be made on merit, mission-fit and readiness for immersive work.</li>
                <li>Any request for disability accommodations or special support must be made during the application process so REACT can reasonably plan support.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Fellowship Engagement & Full-time Participation</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The fellowship expects full-time commitment (Monday–Friday, plus designated field-visits or weekend engagement as required by the programme). Fellows must not undertake another full-time job, fellowship, study programme or major external obligation during the term.</li>
                <li>Fellows must attend all compulsory orientation sessions, leadership retreats, cohort meetings, field immersions, evaluation events and final showcase. Absences must be approved in advance and may impact certification or completion status.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Deliverables & Intellectual Output</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fellows must complete assigned deliverables within the timeframes specified by the REACT leadership team (e.g., system-design toolkits, documentation, field reports, presentation).</li>
                <li>Intellectual property rights relating to materials created in the course of the fellowship will be governed by REACT's institutional policy (which will be provided to fellows upon enrolment). Unless otherwise specified, REACT retains rights to use, reproduce and publish the work.</li>
                <li>Fellows may be required to provide a final report or presentation at the conclusion of the fellowship term.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">9. Termination, Withdrawal & Cancellation</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>REACT reserves the right to reject, delay or withdraw any applicant or fellow at its sole discretion — including in cases of misrepresentation, failure to meet eligibility criteria, inadequate performance, breach of policy, visa refusal, medical incapacity or other operational reasons.</li>
                <li>REACT also reserves the right to modify or cancel the fellowship programme, change the start/end dates, revise stipend/housing provisions, alter residency requirements or relocate the programme site — with as much notice as possible to enrolled fellows.</li>
                <li>In the event of early termination of a fellow's participation (voluntary withdrawal, dismissal, visa denial etc.), fellows may not receive full benefits/salary/stipend and may be required to return any funds or allowances already disbursed.</li>
                <li>Fellows who fail to comply with residency, deliverables or conduct norms may face termination of the fellowship or forfeiture of certificate and alumni eligibility.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10. Accommodation, Meals & Stipend</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>REACT will provide accommodation (shared housing) and meals according to programme guidelines for fellows enrolled with full support.</li>
                <li>Fellows must pay for incidental personal costs outside the standard arrangement unless otherwise specified.</li>
                <li>Applicants may also indicate a volunteer option (food + accommodation only) in which case stipend may not apply; details will be provided in the formal offer.</li>
                <li>Housing, meal plans and stipend amounts are subject to change — fellows will be notified of any changes prior to arrival.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">11. Privacy, Data & Use of Image</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fellows consent to REACT using their name, photo, video, project output and story for promotional, reporting and alumni-network purposes. If any fellow wishes to limit such use, they must notify REACT in writing prior to joining.</li>
                <li>Fellows must comply with institutional data-protection and confidentiality requirements; personally identifiable data of collaborators must not be shared externally without consent.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">12. Travel, Field-Visits & Risk Management</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Field visits to partner communities, rural sites or industries are integral to the programme. Fellows must abide by all safety guidelines, sign necessary waivers, carry required personal protective equipment and travel insurance if required.</li>
                <li>REACT will provide orientation and risk briefings; fellows are responsible for personal risk minimisation.</li>
                <li>In case of natural disaster, civil unrest or other unforeseeable events, REACT may temporarily suspend or relocate field activity.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">13. Intellectual Honesty & Representation</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fellows must ensure all work submitted is original, appropriately referenced and free of plagiarism or misconduct. Any violation may lead to termination.</li>
                <li>Fellows must present themselves and their work accurately in all public representations.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">14. Acknowledgement & Alumni Status</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Upon satisfactory completion, fellows receive a certificate of completion and access to the REACT Global Alumni Network.</li>
                <li>Alumni obligations may include participation in periodic network events, updates on personal progress, and contributing to the REACT community, though alumni participation is voluntary.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">15. Applicable Law & Dispute Resolution</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The fellowship is hosted in India and will be governed by Indian institutional policy and applicable local law.</li>
                <li>Any disputes will be addressed first internally through REACT's designated grievance mechanism; applicable Indian jurisdiction will apply for unresolved issues.</li>
                <li>REACT may amend these policies at any time with reasonable notice to current fellows.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50 flex justify-end rounded-b-lg flex-shrink-0">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


// ✅ Create client
const CareerForm = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>> & { submit?: string }>({});
  
  const [formData, setFormData] = useState<FormData>({
  fullName: '',
  preferredName: '',
  nationality: '',
  age: '',
  email: '',
  whatsapp: '',
  linkedin: '',
  occupation: '',
  qualification: '',
  emergencyContact: '',
  searching: '',
  immersion: '',
  workExperiment: '',
  innerShift: '',
  indiaExcitement: '',
  futurePath: '',
  skillAreas: [],
  cvFile: null,
  portfolioLink: '',
  residencyCommitment: '',
  passport: '',
  englishComfort: '',
  participationType: '',
  logisticalSupport: '',
  ambassadorInterest: '',
  submissionTiming: '',
  hearAbout: [],
  declarations: []
});


  const [cvFileName, setCvFileName] = useState('');

  const sections = [
    { id: 1, title: 'Personal Information', icon: '📍' },
    { id: 2, title: 'Motivation & Alignment', icon: '🌍' },
    { id: 3, title: 'Skills & Interest Areas', icon: '🧩' },
    { id: 4, title: 'Eligibility & Residency', icon: '💡' },
    { id: 5, title: 'Engagement Track & Support', icon: '🤝' },
    { id: 6, title: 'Application Timing & Declaration', icon: '📅' }
  ];

  const [showPolicies, setShowPolicies] = useState(false);

  const handlePoliciesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setShowPolicies(true);
};

  const skillOptions = [
    'Program Management / Operations',
    'Systems Design & Process Innovation',
    'Research & Documentation',
    'Communication & Storytelling',
    'Design / UI-UX / Visual Media',
    'Technology / Engineering / Coding',
    'Partnerships & Institutional Relations',
    'Community Engagement / Field Logistics',
    'Policy / Governance / Development Studies',
    'Other'
  ];

  const hearAboutOptions = [
    'REACT Website',
    'LinkedIn / Social Media',
    'University / Faculty Referral',
    'Friend / Alumni Reference',
    'Conference or Event',
    'Other'
  ];

  const declarationOptions = [
    'I certify that the information provided is true and complete.',
    'I understand that selection is at the discretion of REACT and may be withdrawn if misrepresentation is found.',
    'I agree to the policies and residency requirements outlined on the REACT website.',
    'I am prepared to travel and reside in India for the fellowship period if selected.',
    'I read the policies and information.'
  ];

const handleInputChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
  setFormData(prev => ({ ...prev, [field]: value }));
  if (errors[field]) {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }
};

const handleCheckboxChange = (field: 'skillAreas' | 'hearAbout' | 'declarations', value: string) => {
  setFormData(prev => ({
    ...prev,
    [field]: prev[field].includes(value)
      ? prev[field].filter(item => item !== value)
      : [...prev[field], value]
  }));
};


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]; // optional chaining in case no file
  if (file) {
    if (file.type !== 'application/pdf') {
      setErrors(prev => ({ ...prev, cvFile: 'Only PDF files are allowed' }));
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, cvFile: 'File size must be less than 10 MB' }));
      return;
    }
    setFormData(prev => ({ ...prev, cvFile: file }));
    setCvFileName(file.name);
  }
};

const validateSection = (sectionId: number) => {
  const newErrors: Partial<Record<keyof FormData, string>> = {};

  if (sectionId === 1) {
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
    if (!formData.occupation.trim()) newErrors.occupation = 'Current occupation is required';
    if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
  }
    
    if (sectionId === 2) {
      if (!formData.searching.trim()) newErrors.searching = 'This field is required';
      if (!formData.immersion.trim()) newErrors.immersion = 'This field is required';
      if (!formData.workExperiment.trim()) newErrors.workExperiment = 'This field is required';
      if (!formData.innerShift.trim()) newErrors.innerShift = 'This field is required';
      if (!formData.indiaExcitement.trim()) newErrors.indiaExcitement = 'This field is required';
      if (!formData.futurePath.trim()) newErrors.futurePath = 'This field is required';
    }
    
    if (sectionId === 3) {
      if (formData.skillAreas.length === 0) newErrors.skillAreas = 'Select at least one skill area';
      if (!formData.cvFile) newErrors.cvFile = 'CV/Resume is required';
    }
    
    if (sectionId === 4) {
      if (!formData.residencyCommitment) newErrors.residencyCommitment = 'Please select an option';
      if (!formData.passport) newErrors.passport = 'Please select an option';
      if (!formData.englishComfort) newErrors.englishComfort = 'Please select an option';
    }
    
    if (sectionId === 5) {
      if (!formData.participationType) newErrors.participationType = 'Please select a participation type';
      if (!formData.ambassadorInterest) newErrors.ambassadorInterest = 'Please select an option';
    }
    
    if (sectionId === 6) {
      if (!formData.submissionTiming) newErrors.submissionTiming = 'Please acknowledge the submission timing';
      if (formData.hearAbout.length === 0) newErrors.hearAbout = 'Please select at least one option';
      if (formData.declarations.length !== 5) newErrors.declarations = 'All declarations must be checked';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setCurrentSection(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const uploadCVToSupabase = async (file: File) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from('fellowship-cvs')
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from('fellowship-cvs')
      .getPublicUrl(filePath);

    return { url: publicUrl, fileName: file.name };
  } catch (error) {
    console.error('Error uploading CV:', error);
    throw new Error('Failed to upload CV file');
  }
};


  const handleSubmit = async () => {
    if (!validateSection(6)) return;
    
    setIsSubmitting(true);
    
    try {
      let cvFileUrl = null;
      let cvFileNameStored = null;

      if (formData.cvFile) {
        const uploadResult = await uploadCVToSupabase(formData.cvFile);
        cvFileUrl = uploadResult.url;
        cvFileNameStored = uploadResult.fileName;
      }

      const submissionData = {
        full_name: formData.fullName,
        preferred_name: formData.preferredName || null,
        nationality: formData.nationality,
        age: parseInt(formData.age),
        email: formData.email,
        whatsapp: formData.whatsapp,
        linkedin: formData.linkedin || null,
        occupation: formData.occupation,
        qualification: formData.qualification,
        emergency_contact: formData.emergencyContact,
        searching: formData.searching,
        immersion: formData.immersion,
        work_experiment: formData.workExperiment,
        inner_shift: formData.innerShift,
        india_excitement: formData.indiaExcitement,
        future_path: formData.futurePath,
        skill_areas: formData.skillAreas,
        cv_file_url: cvFileUrl,
        cv_file_name: cvFileNameStored,
        portfolio_link: formData.portfolioLink || null,
        residency_commitment: formData.residencyCommitment,
        passport: formData.passport,
        english_comfort: formData.englishComfort,
        participation_type: formData.participationType,
        logistical_support: formData.logisticalSupport || null,
        ambassador_interest: formData.ambassadorInterest,
        submission_timing: formData.submissionTiming,
        hear_about: formData.hearAbout,
        declarations: formData.declarations,
        submitted_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('fellowship_applications')
        .insert([submissionData])
        .select();

      if (error) throw error;

      console.log('Application submitted successfully:', data);
      setSubmitSuccess(true);
      window.scrollTo(0, 0);
      
    } catch (error) {
  console.error('Submission error:', error);
  if (error instanceof Error) {
    setErrors({ submit: `Failed to submit application: ${error.message}. Please try again.` });
  } else {
    setErrors({ submit: 'Failed to submit application due to an unknown error. Please try again.' });
  }
} finally {
  setIsSubmitting(false);
}
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎉 Thank you for applying to the REACT GLOBE Fellowship 2026!
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Your responses have been received successfully.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
            <p className="text-gray-700 mb-2">
              Applications are reviewed on a rolling basis, so early submissions are prioritised.
            </p>
            <p className="text-gray-700 mb-2">
              You will receive an acknowledgment email within 48 hours.
            </p>
            <p className="text-gray-700">
              For updates or clarifications, contact <span className="font-semibold">react@kct.ac.in</span>
            </p>
          </div>
          <div className="text-xl font-semibold text-indigo-600">
            🌏 Live in India. Lead a real system. Build transformation from the inside out.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            REACT GLOBE Fellowship 2026
          </h1>
          <p className="text-xl text-gray-700 mb-6">Application Form</p>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
            <p className="text-gray-800 mb-4">
              Welcome to the application for the REACT GLOBE Fellowship 2026 (Global Learning and Observation-Based Engagement) — a six-month immersive leadership residency in Coimbatore, India (January – June 2026).
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Phase 1 Deadline:</strong> 31 October 2025
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Phase 2 (Final) Deadline:</strong> 10 November 2025
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between mb-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`flex-1 text-center ${
                  section.id === currentSection ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className="text-2xl mb-1">{section.icon}</div>
                <div className="text-xs font-medium hidden md:block">{section.title}</div>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentSection / 6) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {sections[currentSection - 1].icon} {sections[currentSection - 1].title}
          </h2>

          {currentSection === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (as per passport) *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Name / Pronouns (optional)
                </label>
                <input
                  type="text"
                  value={formData.preferredName}
                  onChange={(e) => handleInputChange('preferredName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality / Country of Residence *
                </label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.nationality ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age (as of Jan 2026) *
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.age ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number (with country code) *
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  placeholder="+91 1234567890"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Occupation / Institution / Program of Study *
                </label>
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.occupation ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Qualification Completed or Currently Pursuing *
                </label>
                <input
                  type="text"
                  value={formData.qualification}
                  onChange={(e) => handleInputChange('qualification', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.qualification ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact (Name + Relation + Phone) *
                </label>
                <input
                  type="text"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  placeholder="John Doe, Father, +1 234567890"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">{errors.emergencyContact}</p>}
              </div>
            </div>
          )}

          {currentSection === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you currently searching for — in learning or in life? *
                </label>
                <textarea
                  value={formData.searching}
                  onChange={(e) => handleInputChange('searching', e.target.value)}
                rows={4}                  
  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.searching ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.searching && <p className="text-red-500 text-sm mt-1">{errors.searching}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you drawn to immersion in real-world contexts rather than a conventional internship or classroom? *
                </label>
                <textarea
                  value={formData.immersion}
                  onChange={(e) => handleInputChange('immersion', e.target.value)}
                rows={4}                  
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.immersion ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.immersion && <p className="text-red-500 text-sm mt-1">{errors.immersion}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of work would you most like to initiate or experiment with under REACT? *
                </label>
                <textarea
                  value={formData.workExperiment}
                  onChange={(e) => handleInputChange('workExperiment', e.target.value)}
                rows={4}                  
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.workExperiment ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.workExperiment && <p className="text-red-500 text-sm mt-1">{errors.workExperiment}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What inner or outer shift do you wish this experience to trigger for you? *
                </label>
                <textarea
                  value={formData.innerShift}
                  onChange={(e) => handleInputChange('innerShift', e.target.value)}
                rows={4}                  
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.innerShift ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.innerShift && <p className="text-red-500 text-sm mt-1">{errors.innerShift}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What excites you about working in India and with a global interdisciplinary team? *
                </label>
                <textarea
                  value={formData.indiaExcitement}
                  onChange={(e) => handleInputChange('indiaExcitement', e.target.value)}
                rows={4}                  
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.indiaExcitement ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
{errors.indiaExcitement && <p className="text-red-500 text-sm mt-1">{errors.indiaExcitement}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How does this fellowship fit into your future path — academic, career, or personal? *
                </label>
                <textarea
                  value={formData.futurePath}
                  onChange={(e) => handleInputChange('futurePath', e.target.value)}
                rows={4}                  
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.futurePath ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.futurePath && <p className="text-red-500 text-sm mt-1">{errors.futurePath}</p>}
              </div>
            </div>
          )}

          {currentSection === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Which areas describe you best? (Select all that apply) *
                </label>
                <div className="space-y-2">
                  {skillOptions.map((skill) => (
                    <label key={skill} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.skillAreas.includes(skill)}
                        onChange={() => handleCheckboxChange('skillAreas', skill)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
                {errors.skillAreas && <p className="text-red-500 text-sm mt-1">{errors.skillAreas}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload your CV or Resume (PDF only, max 10 MB) *
                </label>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        {cvFileName || 'Click to upload PDF (max 10 MB)'}
                      </p>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {cvFileName && (
                    <div className="mt-2 flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm text-gray-700">{cvFileName}</span>
                      <button
                        onClick={() => {
                          setFormData(prev => ({ ...prev, cvFile: null }));
                          setCvFileName('');
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {errors.cvFile && <p className="text-red-500 text-sm mt-1">{errors.cvFile}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link to any portfolio, publication, or project (optional)
                </label>
                <input
                  type="url"
                  value={formData.portfolioLink}
                  onChange={(e) => handleInputChange('portfolioLink', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {currentSection === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Can you commit to living full-time in Coimbatore, India from January to June 2026? *
                </label>
                <div className="space-y-2">
                  {[
                    'Yes, I can reside full-time for the entire period.',
                    'I need to discuss specific dates.',
                    'Not sure yet — need to confirm visa/academic calendar.'
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="residencyCommitment"
                        checked={formData.residencyCommitment === option}
                        onChange={() => handleInputChange('residencyCommitment', option)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.residencyCommitment && <p className="text-red-500 text-sm mt-1">{errors.residencyCommitment}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you hold or can you obtain a valid passport for travel to India? *
                </label>
                <div className="space-y-2">
                  {['Yes.', 'In process.', 'No.'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="passport"
                        checked={formData.passport === option}
                        onChange={() => handleInputChange('passport', option)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.passport && <p className="text-red-500 text-sm mt-1">{errors.passport}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you comfortable working in English as the main language of communication? *
                </label>
                <div className="space-y-2">
                  {['Yes.', 'Somewhat, I may need support.', 'No.'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="englishComfort"
                        checked={formData.englishComfort === option}
                        onChange={() => handleInputChange('englishComfort', option)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.englishComfort && <p className="text-red-500 text-sm mt-1">{errors.englishComfort}</p>}
              </div>
            </div>
          )}

          {currentSection === 5 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  If selected, which type of participation are you open to? *
                </label>
                <div className="space-y-2">
                  {[
                    'Full Fellowship Track: Includes stipend + housing + meals.',
                    'Resident Volunteer Track: Includes food and accommodation only (ideal for self-funded participants or those seeking learning experience without stipend).',
                    "I'm open to either based on availability and fit."
                  ].map((option) => (
                    <label key={option} className="flex items-start">
                      <input
                        type="radio"
                        name="participationType"
                        checked={formData.participationType === option}
                        onChange={() => handleInputChange('participationType', option)}
                        className="w-4 h-4 mt-1 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.participationType && <p className="text-red-500 text-sm mt-1">{errors.participationType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you require any specific logistical support or considerations (e.g., accessibility, dietary needs, medical conditions)?
                </label>
                <textarea
                  value={formData.logisticalSupport}
                  onChange={(e) => handleInputChange('logisticalSupport', e.target.value)}
                  rows={4}
                  placeholder="Please share any information that will help us support you during the fellowship..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Would you be interested in continuing as a REACT Global Ambassador after the fellowship (mentoring future cohorts or hosting events in your country)? *
                </label>
                <div className="space-y-2">
                  {[
                    'Yes, definitely.',
                    'Possibly, depending on my schedule.',
                    'Not sure yet.'
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="ambassadorInterest"
                        checked={formData.ambassadorInterest === option}
                        onChange={() => handleInputChange('ambassadorInterest', option)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.ambassadorInterest && <p className="text-red-500 text-sm mt-1">{errors.ambassadorInterest}</p>}
              </div>
            </div>
          )}

          {currentSection === 6 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Applications are reviewed on a rolling, first-come-first-serve basis. Do you understand that early submission increases your chances of selection? *
                </label>
                <div className="space-y-2">
                  {[
                    'Yes, I understand and will submit promptly.',
                    'I plan to submit closer to the deadline.'
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="submissionTiming"
                        checked={formData.submissionTiming === option}
                        onChange={() => handleInputChange('submissionTiming', option)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.submissionTiming && <p className="text-red-500 text-sm mt-1">{errors.submissionTiming}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about the REACT GLOBE Fellowship? (Select all that apply) *
                </label>
                <div className="space-y-2">
                  {hearAboutOptions.map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.hearAbout.includes(option)}
                        onChange={() => handleCheckboxChange('hearAbout', option)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.hearAbout && <p className="text-red-500 text-sm mt-1">{errors.hearAbout}</p>}
              </div>

         <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Final Declaration - Please confirm: *
                </label>
                <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                  {declarationOptions.map((option, index) => (
                    <label key={option} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.declarations.includes(option)}
                        onChange={() => handleCheckboxChange('declarations', option)}
                        className="w-4 h-4 mt-1 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">
                        {index === 4 ? (
                          <>
                            I read the{' '}
                            <button
                              onClick={handlePoliciesClick}
                              className="text-blue-600 hover:text-blue-800 underline font-medium"
                            >
                              policies and information
                            </button>
                            .
                          </>
                        ) : (
                          option
                        )}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.declarations && <p className="text-red-500 text-sm mt-1">{errors.declarations}</p>}
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-red-700">{errors.submit}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentSection === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentSection < 6 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </div>
                <PoliciesModal isOpen={showPolicies} onClose={() => setShowPolicies(false)} />

      </div>
    </div>
  );
};

export default CareerForm;