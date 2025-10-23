import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Upload, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// ✅ Create client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const CareerForm = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
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
    'I am prepared to travel and reside in India for the fellowship period if selected.'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
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
      setErrors(prev => ({ ...prev, cvFile: null }));
    }
  };

  const validateSection = (sectionId) => {
    const newErrors = {};
    
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
      if (formData.declarations.length !== 4) newErrors.declarations = 'All declarations must be checked';
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

  const uploadCVToSupabase = async (file) => {
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
      setErrors({ submit: `Failed to submit application: ${error.message}. Please try again.` });
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
                  rows="4"
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
                  rows="4"
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
                  rows="4"
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
                  rows="4"
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
                  rows="4"
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
                  rows="4"
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
                  rows="4"
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
                  {declarationOptions.map((option) => (
                    <label key={option} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.declarations.includes(option)}
                        onChange={() => handleCheckboxChange('declarations', option)}
                        className="w-4 h-4 mt-1 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">{option}</span>
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
      </div>
    </div>
  );
};

export default CareerForm;