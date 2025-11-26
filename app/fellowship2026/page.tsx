"use client";

import React, { useEffect, useMemo, useState } from "react";

type Student = {
  name: string;
  register: string;
  mobile: string;
  mail: string;
};

type StateShape = {
  collegeMail: string;
  facultyName: string;
  designation: string;
  department: string;
  phone: string;
  expertise: string;

  problemAvailable: boolean;
  problemStatement: string;
  impact: string;
  possibleSolutions: string;
  marketValue: string;
  industryCollab: boolean;
  companyName: string;
  currentSolution: string;
  domainInterest: string;

  numberOfStudents: number;
  students: Student[];
};

const STORAGE_KEY = "react_fellowship_saved";

export default function Page() {
  const [step, setStep] = useState<number>(0); // 0..3
  const [state, setState] = useState<StateShape>(() => ({
    collegeMail: "",
    facultyName: "",
    designation: "",
    department: "",
    phone: "",
    expertise: "",

    problemAvailable: true,
    problemStatement: "",
    impact: "",
    possibleSolutions: "",
    marketValue: "",
    industryCollab: false,
    companyName: "",
    currentSolution: "",
    domainInterest: "",

    numberOfStudents: 1,
    students: [{ name: "", register: "", mobile: "", mail: "" }],
  }));

  // Keep students array in sync with numberOfStudents
  useEffect(() => {
    setState((s) => {
      const cnt = Math.max(1, Math.floor(s.numberOfStudents || 1));
      const students = [...s.students];
      while (students.length < cnt) students.push({ name: "", register: "", mobile: "", mail: "" });
      while (students.length > cnt) students.pop();
      return { ...s, numberOfStudents: cnt, students };
    });
  }, [state.numberOfStudents]); // when numberOfStudents changes

  // Helpers
  const escapeHtml = (str?: string) => {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };
  const nl2br = (s?: string) => (s ? s.replace(/\n/g, "<br/>") : "");

  // navigation
  function canProceedFromStep(current: number) {
    // Validate the current step before moving forward
    if (current === 0) {
      const required = ["collegeMail", "facultyName", "designation", "department", "phone", "expertise"] as const;
      for (const f of required) {
        // @ts-ignore
        if (!state[f] || String(state[f]).trim() === "") {
          alert("Please complete required faculty fields.");
          return false;
        }
      }
    } else if (current === 1) {
      if (state.problemAvailable) {
        if (!state.problemStatement.trim() || !state.impact.trim() || !state.possibleSolutions.trim()) {
          alert("Please complete project fields.");
          return false;
        }
        if (state.industryCollab && !state.companyName.trim()) {
          alert("Please provide company name.");
          return false;
        }
      }
    } else if (current === 2) {
      for (let i = 0; i < state.numberOfStudents; i++) {
        const s = state.students[i] || { name: "", register: "", mobile: "", mail: "" };
        if (!s.name.trim() || !s.register.trim() || !s.mobile.trim() || !s.mail.trim()) {
          alert(`Please complete details for student ${i + 1}`);
          return false;
        }
      }
    }
    return true;
  }

  function next() {
    if (!canProceedFromStep(step)) return;
    setStep((p) => Math.min(p + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStep((p) => Math.max(p - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // localStorage submit
  function submit() {
    if (!canProceedFromStep(step)) return;
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    arr.push({ ...state, submittedAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr, null, 2));
    // show a message and reload (to mimic original behavior)
    alert("Submitted successfully and saved locally.");
    window.location.reload();
  }

  // Handlers
  const setField = <K extends keyof StateShape>(k: K, value: StateShape[K]) =>
    setState((s) => ({ ...s, [k]: value }));

  const setStudentField = (index: number, field: keyof Student, value: string) =>
    setState((s) => {
      const students = [...s.students];
      students[index] = { ...students[index], [field]: value };
      return { ...s, students };
    });

  // Derived preview HTML (memoized)
  const pdfFacultyHtml = useMemo(() => {
    return (
      <>
        <div>
          <span className="label">Name:</span>{" "}
          <span className="value">{state.facultyName || "-"}</span>
        </div>
        <div>
          <span className="label">Designation:</span>{" "}
          <span className="value">{state.designation || "-"}</span>
        </div>
        <div>
          <span className="label">Department:</span>{" "}
          <span className="value">{state.department || "-"}</span>
        </div>
        <div>
          <span className="label">Email:</span>{" "}
          <span className="value">{state.collegeMail || "-"}</span>
        </div>
        <div>
          <span className="label">Phone:</span>{" "}
          <span className="value">{state.phone || "-"}</span>
        </div>
        <div>
          <span className="label">Expertise:</span>{" "}
          <span className="value">{state.expertise || "-"}</span>
        </div>
      </>
    );
  }, [state]);

  const pdfProjectHtml = useMemo(() => {
    if (state.problemAvailable) {
      return (
        <div>
          <div>
            <span className="label">Problem Statement:</span>
            <div
              className="value mt-1"
              dangerouslySetInnerHTML={{
                __html: nl2br(escapeHtml(state.problemStatement || "-")),
              }}
            />
          </div>

          <div className="mt-3">
            <span className="label">Impact:</span>{" "}
            <span className="value">{state.impact || "-"}</span>
          </div>

          <div className="mt-2">
            <span className="label">Possible Solutions:</span>{" "}
            <span className="value">{state.possibleSolutions || "-"}</span>
          </div>

          <div className="mt-2">
            <span className="label">Market Value:</span>{" "}
            <span className="value">{state.marketValue || "-"}</span>
          </div>

          <div className="mt-2">
            <span className="label">Industry Collaboration:</span>{" "}
            <span className="value">
              {state.industryCollab ? `Yes — ${state.companyName || "-"}` : "No"}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <span className="label">No problem statement provided.</span>
          </div>
          <div className="mt-2">
            <span className="label">Domain of interest:</span>{" "}
            <span className="value">{state.domainInterest || "-"}</span>
          </div>
        </div>
      );
    }
  }, [state]);

  const pdfStudentsHtml = useMemo(() => {
    return (
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f8fafb" }}>
            <th style={{ padding: 8, border: "1px solid #edf7f6", textAlign: "left" }}>#</th>
            <th style={{ padding: 8, border: "1px solid #edf7f6", textAlign: "left" }}>Name</th>
            <th style={{ padding: 8, border: "1px solid #edf7f6", textAlign: "left" }}>Register</th>
            <th style={{ padding: 8, border: "1px solid #edf7f6", textAlign: "left" }}>Mobile</th>
            <th style={{ padding: 8, border: "1px solid #edf7f6", textAlign: "left" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {state.students.map((s, i) => (
            <tr key={i}>
              <td style={{ padding: 8, border: "1px solid #f1f6f6" }}>{i + 1}</td>
              <td style={{ padding: 8, border: "1px solid #f1f6f6" }}>{s.name || "-"}</td>
              <td style={{ padding: 8, border: "1px solid #f1f6f6" }}>{s.register || "-"}</td>
              <td style={{ padding: 8, border: "1px solid #f1f6f6" }}>{s.mobile || "-"}</td>
              <td style={{ padding: 8, border: "1px solid #f1f6f6" }}>{s.mail || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }, [state.students]);

  // Prevent Enter from submitting when not in a textarea
  function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
      e.preventDefault();
      // move focus to next focusable
      const focusables = Array.from(
        document.querySelectorAll("input, textarea, select, button")
      ).filter((n) => (n as HTMLElement).offsetParent !== null) as HTMLElement[];
      const idx = focusables.indexOf(document.activeElement as HTMLElement);
      if (idx >= 0 && idx < focusables.length - 1) focusables[idx + 1].focus();
    }
  }

  // Small UI for progress dots + labels
  const Progress = () => {
    const labels = ["Faculty Details", "Project", "Students", "Review"];
    return (
      <div id="progress" className="flex items-center gap-3 mb-6 text-sm">
        {labels.map((lab, i) => (
          <React.Fragment key={i}>
            <div
              className={
                "px-3 py-1 rounded-full text-sm " + (i === step ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600")
              }
            >
              {i + 1}
            </div>
            <div className="ml-2 mr-4 text-sm muted">{lab}</div>
            {i < labels.length - 1 && <div className="h-0.5 flex-1 bg-gray-200" />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6">
      {/* global CSS migrated from original file */}
      <style jsx global>{`
        body {
          background: linear-gradient(180deg, #f0fbfa, #f7fffe);
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        }
        .card {
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(20, 60, 80, 0.06);
        }
        .section-title {
          color: #0f766e;
          font-weight: 600;
        }
        .required-marker {
          color: #d14343;
          margin-left: 6px;
        }
        .ms-btn {
          background: #0f766e;
          color: white;
          padding: 8px 14px;
          border-radius: 8px;
        }
        .field-box {
          background: #fbfdfc;
          border-radius: 8px;
          padding: 14px;
          border: 1px solid #eef7f6;
        }
        .muted {
          color: #6b7280;
        }
        .pdf-page {
          background: white;
          border: 1px solid #e6eef0;
          border-radius: 8px;
          padding: 28px;
          margin: 18px 0;
          box-shadow: 0 6px 18px rgba(20, 60, 80, 0.04);
        }
        .pdf-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .pdf-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f766e;
        }
        .pdf-meta {
          font-size: 12px;
          color: #6b7280;
        }
        .pdf-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }
        .pdf-table th {
          text-align: left;
          padding: 8px 10px;
          background: #f8fafb;
          color: #0f766e;
          font-weight: 600;
          font-size: 13px;
          border: 1px solid #eef7f6;
        }
        .pdf-table td {
          padding: 10px;
          border: 1px solid #f1f6f6;
          vertical-align: top;
          font-size: 13px;
          color: #374151;
        }
        @media print {
          body {
            background: white;
          }
          .no-print {
            display: none !important;
          }
          .page {
            width: 100%;
            margin: 0;
            box-shadow: none;
          }
          .pdf-page {
            box-shadow: none;
            border: 0;
            padding: 0;
            margin: 0;
          }
        }
        .label {
          color: #0f766e;
          font-weight: 600;
          font-size: 13px;
        }
        .value {
          color: #374151;
          font-size: 13px;
        }
      `}</style>

      <div className="w-full max-w-5xl card bg-white p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">REACT Fellowship - 2026</h1>
          </div>
        </header>

        <Progress />

        <form id="mainForm" className="space-y-6" onKeyDown={handleKeyDown} onSubmit={(e) => e.preventDefault()}>
          {/* Instruction panel — shown only on Step 0 (first page) */}
          {step === 0 && (
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
              <h2 className="text-xl font-bold text-teal-700">About This Form</h2>
              <p>
                This form is intended for faculty members submitting project proposals on behalf of student teams under the REACT initiative.
              </p>

              <p>
                The objective of this application is to capture essential details about the <strong>faculty mentor</strong>, the <strong>project idea</strong>, and the <strong>students involved</strong>. All technical inputs — such as the problem statement, proposed solutions, impact, and domain expertise — must be provided by the students and verified by the supervising faculty member.
              </p>

              <h3 className="text-lg font-semibold text-teal-700">Before You Begin</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The problem statement and solution details are prepared by the students.</li>
                <li>Faculty must review and confirm the accuracy and feasibility of the submission.</li>
                <li>If an industry partner is involved, keep their company details ready.</li>
                <li>Students should finalize domain, impact area, and preliminary research before filling this form.</li>
                <li>Ensure students are ready to work towards: prototype development, technical documentation, market research and pitching for funding/incubation.</li>
              </ul>

              <h3 className="text-lg font-semibold text-teal-700">Who Can Apply?</h3>
              <p>
                Students from <strong>2nd &amp; 3rd year</strong>; teams participating under REACT for startup creation, product development, or research commercialization; and faculty members willing to mentor students through development and validation stages.
              </p>

              <h3 className="text-lg font-semibold text-teal-700">Selected projects will be considered for:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Funding and grants</li>
                <li>Technical support for prototype development</li>
                <li>Industry collaboration opportunities</li>
                <li>Startup incubation and commercialization assistance</li>
              </ul>

              <p><strong>Estimated Time to Complete</strong> — about <strong>10–15 minutes</strong> if all details are ready.</p>

              <h3 className="text-lg font-semibold text-teal-700">Need Help?</h3>
              <p>If you face any difficulty filling the form or require clarification:</p>

              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-2 text-teal-700 font-medium">
                  <span>📞</span> <span>93856 95977</span>
                </div>
                <div className="flex items-center gap-2 text-teal-700 font-medium">
                  <span>📧</span> <span>react@kct.ac.in</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Faculty */}
          <section data-step="1" className={step === 0 ? "section" : "section hidden"} aria-hidden={step !== 0}>
            <div className="section-title mb-3">Faculty Details</div>
            <div className="grid gap-4">
              <label className="field-box">
                <div className="text-sm">1. College Mail ID <span className="required-marker">*</span></div>
                <input
                  id="collegeMail"
                  type="email"
                  className="w-full mt-2 text-sm"
                  placeholder="name@college.edu"
                  value={state.collegeMail}
                  onChange={(e) => setField("collegeMail", e.target.value)}
                  required
                />
              </label>

              <label className="field-box">
                <div className="text-sm">2. Faculty Name <span className="required-marker">*</span></div>
                <input
                  id="facultyName"
                  type="text"
                  className="w-full mt-2 text-sm"
                  placeholder="Full name"
                  value={state.facultyName}
                  onChange={(e) => setField("facultyName", e.target.value)}
                  required
                />
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="field-box">
                  <div className="text-sm">3. Designation <span className="required-marker">*</span></div>
                  <input
                    id="designation"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="e.g. Assistant Professor"
                    value={state.designation}
                    onChange={(e) => setField("designation", e.target.value)}
                    required
                  />
                </label>

                <label className="field-box">
                  <div className="text-sm">4. Department <span className="required-marker">*</span></div>
                  <input
                    id="department"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="Department name"
                    value={state.department}
                    onChange={(e) => setField("department", e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="field-box">
                  <div className="text-sm">5. Phone Number <span className="required-marker">*</span></div>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full mt-2 text-sm"
                    placeholder="+91 9xxxxxxxxx"
                    value={state.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    required
                  />
                </label>

                <label className="field-box">
                  <div className="text-sm">6. Area of Expertise <span className="required-marker">*</span></div>
                  <input
                    id="expertise"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="e.g. Thermal, AI"
                    value={state.expertise}
                    onChange={(e) => setField("expertise", e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Step 2: Project */}
          <section data-step="2" className={step === 1 ? "section" : "section hidden"} aria-hidden={step !== 1}>
            <div className="section-title mb-3">Project Idea / Problem Statement</div>

            <div className="field-box">
              <div className="text-sm mb-2">7. Problem Statement of Student is Available: <span className="required-marker">*</span></div>
              <div className="flex gap-6">
                <label className="inline-flex items-center gap-2">
                  <input
                    id="probYes"
                    type="radio"
                    name="probAvail"
                    value="yes"
                    checked={state.problemAvailable === true}
                    onChange={() => setField("problemAvailable", true)}
                  />{" "}
                  YES
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    id="probNo"
                    type="radio"
                    name="probAvail"
                    value="no"
                    checked={state.problemAvailable === false}
                    onChange={() => {
                      // clear certain fields and hide
                      setField("problemAvailable", false);
                      setField("problemStatement", "");
                      setField("impact", "");
                      setField("possibleSolutions", "");
                      setField("marketValue", "");
                      setField("companyName", "");
                      setField("currentSolution", "");
                      setField("industryCollab", false);
                    }}
                  />{" "}
                  NO
                </label>
              </div>
            </div>

            {state.problemAvailable ? (
              <div id="probDetails" className="space-y-4 mt-4 block w-full">
                <label className="field-box block w-full">
                  <div className="text-sm">8. Problem Statement <span className="required-marker">*</span></div>
                  <textarea
                    id="problemStatement"
                    rows={3}
                    className="w-full mt-2 text-sm"
                    placeholder="Describe the problem"
                    value={state.problemStatement}
                    onChange={(e) => setField("problemStatement", e.target.value)}
                    required
                  />
                </label>

                <label className="field-box block w-full">
                  <div className="text-sm">9. Impact <span className="required-marker">*</span></div>
                  <input
                    id="impact"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="Impact statement"
                    value={state.impact}
                    onChange={(e) => setField("impact", e.target.value)}
                    required
                  />
                </label>

                <label className="field-box block w-full">
                  <div className="text-sm">10. Possible Solutions <span className="required-marker">*</span></div>
                  <input
                    id="possibleSolutions"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="Suggested solutions"
                    value={state.possibleSolutions}
                    onChange={(e) => setField("possibleSolutions", e.target.value)}
                    required
                  />
                </label>

                <label className="field-box block w-full">
                  <div className="text-sm">11. Market Value</div>
                  <input
                    id="marketValue"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="Optional"
                    value={state.marketValue}
                    onChange={(e) => setField("marketValue", e.target.value)}
                  />
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="field-box block">
                    <div className="text-sm mb-2">12. Industry Collaboration <span className="required-marker">*</span></div>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center gap-2">
                        <input
                          id="collabYes"
                          type="radio"
                          name="collab"
                          value="yes"
                          checked={state.industryCollab === true}
                          onChange={() => setField("industryCollab", true)}
                        />{" "}
                        Yes
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          id="collabNo"
                          type="radio"
                          name="collab"
                          value="no"
                          checked={state.industryCollab === false}
                          onChange={() => {
                            setField("industryCollab", false);
                            setField("companyName", "");
                          }}
                        />{" "}
                        No
                      </label>
                    </div>
                  </div>

                  <label id="companyWrap" className={"field-box block " + (state.industryCollab ? "" : "hidden")}>
                    <div className="text-sm">13. Name of the company <span className="required-marker">*</span></div>
                    <input
                      id="companyName"
                      type="text"
                      className="w-full mt-2 text-sm"
                      placeholder="Company name"
                      value={state.companyName}
                      onChange={(e) => setField("companyName", e.target.value)}
                      required={state.industryCollab}
                    />
                  </label>
                </div>

                <label className="field-box block w-full">
                  <div className="text-sm">14. Current Solution (If Already Being Worked On)</div>
                  <textarea
                    id="currentSolution"
                    rows={2}
                    className="w-full mt-2 text-sm"
                    placeholder="Notes"
                    value={state.currentSolution}
                    onChange={(e) => setField("currentSolution", e.target.value)}
                  />
                </label>
              </div>
            ) : (
              <div id="noProblemArea" className="hidden mt-4" />
            )}

            {!state.problemAvailable && (
              <div id="noProblemArea" className="mt-4">
                <label className="field-box block w-full">
                  <div className="text-sm">8. Domain of Interest</div>
                  <input
                    id="domainInterest"
                    type="text"
                    className="w-full mt-2 text-sm"
                    placeholder="e.g. Renewable energy"
                    value={state.domainInterest}
                    onChange={(e) => setField("domainInterest", e.target.value)}
                  />
                </label>
              </div>
            )}
          </section>

          {/* Step 3: Students */}
          <section data-step="3" className={step === 2 ? "section" : "section hidden"} aria-hidden={step !== 2}>
            <div className="section-title mb-3">Students Involved</div>

            <div className="field-box mb-3">
              <div className="text-sm mb-1">16. Number of Students Proposed <span className="required-marker">*</span></div>
              <input
                id="studentCount"
                type="number"
                min={1}
                step={1}
                value={state.numberOfStudents}
                onChange={(e) => {
                  const v = Math.max(1, parseInt(e.target.value || "1", 10));
                  setField("numberOfStudents", v);
                }}
                className="w-28 p-2 border rounded"
              />
            </div>

            <div id="studentsContainer" className="space-y-3">
              {state.students.map((s, i) => (
                <div key={i} className="p-3 border rounded field-box">
                  <div className="text-sm font-medium mb-2">Student {i + 1}</div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <label className="block">
                      <div className="text-xs muted">
                        Name <span className="required-marker">*</span>
                      </div>
                      <input
                        type="text"
                        className="w-full p-2 mt-1 student-field"
                        data-field="name"
                        data-index={i}
                        required
                        value={s.name}
                        onChange={(e) => setStudentField(i, "name", e.target.value)}
                      />
                    </label>

                    <label className="block">
                      <div className="text-xs muted">
                        Register Number <span className="required-marker">*</span>
                      </div>
                      <input
                        type="text"
                        className="w-full p-2 mt-1 student-field"
                        data-field="register"
                        data-index={i}
                        required
                        value={s.register}
                        onChange={(e) => setStudentField(i, "register", e.target.value)}
                      />
                    </label>

                    <label className="block">
                      <div className="text-xs muted">
                        Mobile Number <span className="required-marker">*</span>
                      </div>
                      <input
                        type="tel"
                        className="w-full p-2 mt-1 student-field"
                        data-field="mobile"
                        data-index={i}
                        required
                        value={s.mobile}
                        onChange={(e) => setStudentField(i, "mobile", e.target.value)}
                      />
                    </label>

                    <label className="block">
                      <div className="text-xs muted">
                        Student Mail ID <span className="required-marker">*</span>
                      </div>
                      <input
                        type="email"
                        className="w-full p-2 mt-1 student-field"
                        data-field="mail"
                        data-index={i}
                        required
                        value={s.mail}
                        onChange={(e) => setStudentField(i, "mail", e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 4: Review */}
          <section data-step="4" className={step === 3 ? "section" : "section hidden"} aria-hidden={step !== 3}>
            <div className="section-title mb-3">Review & Submit</div>

            <div className="pdf-page" id="reviewPdf">
              <div className="pdf-header">
                <div>
                  <div className="pdf-title">REACT Fellowship — Application Review</div>
                  <div className="pdf-meta" id="pdfMeta">
                    Submitted by — <span id="pdfDate">{new Date().toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm muted">REACT Fellowship</div>
                </div>
              </div>

              <table className="pdf-table mt-4">
                <tbody>
                  <tr>
                    <th style={{ width: "30%" }}>Faculty</th>
                    <td id="pdfFaculty">{pdfFacultyHtml}</td>
                  </tr>

                  <tr>
                    <th>Project / Problem Statement</th>
                    <td id="pdfProject">{pdfProjectHtml}</td>
                  </tr>

                  <tr>
                    <th>Students</th>
                    <td id="pdfStudents">{pdfStudentsHtml}</td>
                  </tr>

                  <tr>
                    <th>Notes</th>
                    <td id="pdfNotes">{state.currentSolution || "-"}</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6 text-xs muted">This document is a review of the application.</div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 no-print">
            <button
              id="btnBack"
              type="button"
              className={"px-4 py-2 border rounded " + (step === 0 ? "hidden" : "")}
              onClick={back}
            >
              Back
            </button>

            <div className="flex items-center gap-3">
              <button
                id="btnNext"
                type="button"
                className={"ms-btn " + (step === 3 ? "hidden" : "")}
                onClick={next}
              >
                Next
              </button>

              <button
                id="btnSubmit"
                type="button"
                className={"px-4 py-2 bg-green-600 text-white rounded " + (step === 3 ? "" : "hidden")}
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div id="msg" className="mt-4 text-sm text-green-700 hidden">Submitted. Thank you.</div>
        <div className="mt-4 text-xs text-gray-400 no-print">
          Submissions saved to browser localStorage under key <code>react_fellowship_saved</code>.
        </div>
      </div>
    </div>
  );
}
