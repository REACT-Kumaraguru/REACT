"use client";
import React from "react";

export default function Solve() {
  return (
    <>
      <h3 className="text-xl font-bold mb-4 text-blue-700"> Solve the Problem – 3 to 12 Months</h3>
  
  <p className="mb-4 text-gray-700">
    In the REACT framework, "Solve" is not just an execution phase — it's the transformation of understanding into real-world impact. Once you've identified a challenge through lived experience and refined it during reflection, solving becomes your bridge to building. Whether you're working with a clearly defined issue, a research hypothesis, a design brief, or a need for innovation, solving demands clarity, creativity, and commitment.
  </p>

  <p className="mb-4 text-gray-700 italic text-lg">
    “Solve is where engineering meets empathy — and intention becomes invention.”
  </p>

  <p className="mb-4 text-gray-700">
    To support diverse types of challenges, REACT adopts five globally respected methodologies. Each provides a unique path to navigate problem-solving — from precision repairs to systemic transformations. Choose the one that matches your challenge.
  </p>

  <h4 className="text-lg font-semibold text-blue-700 mt-8 mb-2"> Integrating These into REACT’s Solve Phase</h4>
  <p className="text-gray-700 mb-4">
    Depending on the nature of the problem identified during the Reflect phase, participants can choose from the following solution tracks:
  </p>

  <div className="space-y-4 mb-6">

{/* Research Track */}
<details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
<summary className="font-semibold text-blue-800 cursor-pointer"> Research Track</summary>

<p className="mt-2 text-gray-700">
When the problem is not just unknown—but unknowable without deeper inquiry—you turn to research. This track is designed for participants tackling unexplored phenomena, hidden patterns, or hypotheses that challenge what we think we know. It’s the space for <strong>deep curiosity</strong>, <strong>structured investigation</strong>, and <strong>knowledge creation</strong>.
</p>

<p className="mt-4 text-gray-700">
We follow a refined model based on the <strong>Design Science Research Methodology (DSRM)</strong>, used in both scientific and design-based inquiry. It helps you move from an observed uncertainty to a validated contribution the world can rely on.
</p>

{/* Flowchart Image */}
<div className="my-6 flex justify-center overflow-hidden">
<img
  src="/researchmethodology.svg"
  alt="Research Methodology Flowchart"
  className="w-full max-w-3xl border-none object-contain"
  style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
/>
</div>

{/* Step-by-step explanation */}
<div className="space-y-3 text-gray-700 text-sm leading-relaxed">
<p><strong>1. Identify the Problem:</strong> Start with a phenomenon or gap that needs exploration. This could be something no one has studied, or something people have misunderstood.</p>

<p><strong>2. Define Research Objectives:</strong> Frame a testable hypothesis or a specific set of research questions. This gives structure to your curiosity.</p>

<p><strong>3. Design the Method:</strong> Choose the right experimental setup, tools, or modeling techniques that can help explore or validate the hypothesis.</p>

<p><strong>4. Experiment & Observe:</strong> Run your tests, simulations, or data collection processes. This is where your hypothesis meets reality.</p>

<p><strong>5. Evaluate with Rigor:</strong> Analyze results with statistical, qualitative, or system-level tools. Look for patterns, anomalies, or unexpected findings—and challenge your own assumptions.</p>

<p><strong>6. Communicate Findings:</strong> Share your insights clearly so others can learn from, reproduce, or build on your work. This can be a paper, policy note, or design output backed by evidence.</p>
</div>

<p className="mt-6 text-gray-700">
This isn’t the fastest path—but it’s one of the most powerful. Research lets you create new knowledge, grounded in method and meaningful to those beyond the field.
</p>
</details>


{/* Innovation Track */}
<details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
<summary className="font-semibold text-blue-800 cursor-pointer"> Innovation Track</summary>

<p className="mt-2 text-gray-700">
Sometimes, the problem is known—but the solution doesn’t exist yet. This is where innovation begins. It’s about imagining what could be, testing what might work, and creating something entirely new where nothing reliable existed before.
</p>

<p className="mt-4 text-gray-700">
This track follows a blended model rooted in <strong>Human-Centered Design</strong> and <strong>Lean Startup methodology</strong>, used by design labs like IDEO and Stanford d.school. It’s made for environments where needs are real but unmet—and where solutions must be built from scratch.
</p>

{/* Flowchart Image */}
<div className="my-6 flex justify-center overflow-hidden">
<img
  src="/Innovationmethodology.svg"
  alt="Innovation Process Flowchart"
  className="w-full max-w-3xl border-none object-contain"
  style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
/>
</div>

{/* Step-by-step explanation */}
<div className="space-y-3 text-gray-700 text-sm leading-relaxed">
<p><strong>1. Discover User Needs:</strong> Spend time with people. Understand what they struggle with, what they’ve tried, and what’s missing in their context. Your goal isn’t just data—it’s empathy.</p>

<p><strong>2. Define the Challenge:</strong> Turn what you heard into a clear opportunity, often framed as a “How Might We” question that’s specific and actionable.</p>

<p><strong>3. Ideate Possible Solutions:</strong> Generate many ideas—wild, practical, low-cost, futuristic. Innovation starts when you let go of “the right answer” and explore possibilities.</p>

<p><strong>4. Prototype Quickly:</strong> Pick a few ideas and make them real—using paper, cardboard, code, stories, or systems. Keep it rough. The point is speed, not polish.</p>

<p><strong>5. Test with Real Users:</strong> Show your prototypes to the people you designed for. Watch how they react. Ask questions. Take notes. This is your reality check.</p>

<p><strong>6. Refine and Scale:</strong> Improve what works. Let go of what doesn’t. Build a version that could survive in the real world—and evolve over time.</p>
</div>

<p className="mt-6 text-gray-700">
Innovation is messy. But when guided by real needs, rapid testing, and honest feedback, it leads to tools, services, and solutions that change lives. This track is where possibility becomes practice.
</p>
</details>


{/* Design Track */}
<details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
<summary className="font-semibold text-blue-800 cursor-pointer"> Design Track</summary>

<p className="mt-2 text-gray-700">
Not every problem is new. But many are unsolved because the existing solutions don’t fit the people, place, or purpose. That’s where design thinking makes the difference. This track focuses on reimagining how people experience systems—and making them more accessible, usable, and humane.
</p>

<p className="mt-4 text-gray-700">
This method blends the <strong>Double Diamond</strong> framework (from Design Council UK) with <strong>Human-Centered Design</strong> (Stanford, MIT D-Lab), emphasizing empathy, iteration, and contextual fit. It’s ideal for solving real-world problems with form, function, and feeling.
</p>

{/* Flowchart Image */}
<div className="my-6 flex justify-center overflow-hidden">
<img
  src="/designmethod.svg"
  alt="Design Thinking Flowchart"
  className="w-full max-w-3xl border-none object-contain"
  style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
/>
</div>

{/* Step-by-step explanation */}
<div className="space-y-3 text-gray-700 text-sm leading-relaxed">
<p><strong>1. Discover the Context:</strong> Understand the lived reality of the users. Observe behaviors, workflows, emotional cues, and hidden workarounds. The problem often hides in the everyday.</p>

<p><strong>2. Define the Real Problem:</strong> Synthesize what you found. Turn raw observations into a clear brief that captures the actual need—not just the visible issue.</p>

<p><strong>3. Reframe the Challenge:</strong> Question your assumptions. Explore alternative perspectives. Often, a problem becomes solvable when viewed differently.</p>

<p><strong>4. Ideate User-Centered Solutions:</strong> Generate multiple design directions. Prioritize ideas based on user needs, feasibility, sustainability, and delight.</p>

<p><strong>5. Prototype with Form & Function:</strong> Build models that test how the solution looks, works, and feels. The goal is to simulate the full experience—not just fix a function.</p>

<p><strong>6. Test & Deliver with Feedback Loops:</strong> Involve users in trials. Refine designs through cycles of use, feedback, and iteration. Deliver something people not only use—but love.</p>
</div>

<p className="mt-6 text-gray-700">
This track isn’t about invention. It’s about intention. It’s about making sure that what we build is built for real people, in real places, under real constraints. Great design is invisible—because it fits just right.
</p>
</details>


{/* System Track */}
<details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
<summary className="font-semibold text-blue-800 cursor-pointer"> System Track</summary>

<p className="mt-2 text-gray-700">
Some problems aren’t isolated. They’re entangled. Climate change, poverty, health access, water stress—these challenges are woven through many systems at once. Solving them requires more than a tool. It requires a shift in structure. That’s what the System Track is designed for.
</p>

<p className="mt-4 text-gray-700">
Based on <strong>Donella Meadows’ Systems Thinking</strong> and widely used in sustainability, governance, and multi-stakeholder fields, this method helps you intervene in a way that is thoughtful, adaptive, and transformational—beyond surface-level fixes.
</p>

{/* Flowchart Image */}
<div className="my-6 flex justify-center overflow-hidden">
<img
  src="/systemmethod.svg"
  alt="System Thinking Flowchart"
  className="w-full max-w-3xl border-none object-contain"
  style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
/>
</div>

{/* Step-by-step explanation */}
<div className="space-y-3 text-gray-700 text-sm leading-relaxed">
<p><strong>1. Map the System:</strong> Identify all key elements—people, policies, institutions, natural forces—and how they connect. This builds a holistic picture of the problem’s environment.</p>

<p><strong>2. Identify Feedback Loops:</strong> Spot reinforcing and balancing cycles. Understand what amplifies problems or resists change. This is where hidden inertia lives.</p>

<p><strong>3. Find Leverage Points:</strong> Look for places where a small intervention could lead to large systemic change—like shifting information flows, power dynamics, or underlying rules.</p>

<p><strong>4. Design Strategic Interventions:</strong> Plan interventions that don’t just patch symptoms but influence structures and mindsets. These should be scalable and resilient to feedback.</p>

<p><strong>5. Observe Emergence & Rebalance:</strong> After implementing change, track its ripple effects. Systems evolve. So must your intervention. Adapt continuously as new dynamics appear.</p>
</div>

<p className="mt-6 text-gray-700">
Systems thinking is slow, wide, and deep. It asks you to stop looking for quick wins and instead focus on long-term resilience. It’s the mindset shift that can turn isolated action into meaningful transformation.
</p>
</details>


{/*  General Track */}
<details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
<summary className="font-semibold text-blue-800 cursor-pointer"> General Track</summary>

<p className="mt-2 text-gray-700">
Not every problem needs months of study. Sometimes, you just need to find the issue—and fix it. The General Track is designed for problems that are well-defined, urgent, and solvable within limited time and resources. It emphasizes clarity, logic, and decisive action.
</p>

<p className="mt-4 text-gray-700">
Based on the <strong>Kepner-Tregoe Problem Analysis and Decision Model</strong>, this framework is often used in engineering, field troubleshooting, production planning, and operational crisis management. It’s structured but fast—built for real-time response.
</p>

{/* Flowchart Image */}
<div className="my-6 flex justify-center overflow-hidden">
<img
  src="/generalmethod.svg"
  alt="General Problem Solving Flowchart"
  className="w-full max-w-3xl border-none object-contain"
  style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
/>
</div>

{/* Step-by-step explanation */}
<div className="space-y-3 text-gray-700 text-sm leading-relaxed">
<p><strong>1. Clarify the Problem:</strong> Use “IS / IS NOT” analysis to define what’s happening, where, when, and to what extent. Rule out noise. Focus the scope.</p>

<p><strong>2. Analyze Root Cause:</strong> Compare different times, settings, or systems to isolate what changed. Look for conditions linked directly to the fault.</p>

<p><strong>3. Evaluate Alternatives:</strong> If multiple options exist, assess them by feasibility, risk, and outcome. Use decision matrices or logic trees to make the best choice quickly.</p>

<p><strong>4. Decide on Solution:</strong> Commit to an action. Assign responsibility, resources, and a time frame. This step translates analysis into execution.</p>

<p><strong>5. Implement & Monitor:</strong> Apply the fix, track results, and ensure the problem doesn’t repeat. Record what you learned so it strengthens future response.</p>
</div>

<p className="mt-6 text-gray-700">
The General Track is your go-to for urgency. It doesn't sacrifice thinking—it focuses it. This method gives people a structured way to act when stakes are high and time is short.
</p>
</details>

</div>


  <p className="text-gray-700 mb-4">
    All participants begin with a <strong>5-day Hackathon</strong> to create a proof-of-concept. Based on the chosen track, they enter a development phase of <strong>3, 6, or 12 months</strong> with:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-6">
    <li>Technical milestones (design, build, test)</li>
    <li>Mentorship and expert reviews</li>
    <li>User validation and real-world trials</li>
    <li>Documentation and open knowledge-sharing</li>
  </ul>

  <h4 className="text-lg font-semibold text-blue-700 mb-2"> Common Tools You’ll Use</h4>
  <div className="flex flex-wrap gap-4 mb-6">
    <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg shadow-sm border">
       <strong>FMEA</strong><br/>Failure Mode and Effects Analysis
    </div>
    <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg shadow-sm border">
       <strong>TRIZ</strong><br/>Theory of Inventive Problem Solving
    </div>
    <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg shadow-sm border">
       <strong>Rapid Prototyping & Digital Twins</strong>
    </div>
    <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg shadow-sm border">
       <strong>Systemic Co-Design Methods</strong>
    </div>
    <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg shadow-sm border">
       <strong>Agile Documentation + Open Publishing</strong>
    </div>
  </div>

  <p className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-6 my-8 text-xl italic font-semibold shadow-md">
    “The goal is not just to solve a problem — but to solve it in a way that can be trusted, repeated, and transformed into change.”
  </p>

  <p className="mb-6 text-gray-700">
    Solve is not the end. It’s the moment your insight becomes something someone else can use.
  </p>

  <p className="text-base text-gray-700 italic">
    Coming up next: <strong>Implement</strong> — where your solution meets the field that shaped it.
  </p>

  <h4 className="text-lg font-semibold text-blue-700 mt-12 mb-4"> Overview of All 5 Problem-Solving Frameworks</h4>
  <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-700 border border-collapse">
      <thead>
        <tr className="bg-blue-100">
          <th className="px-4 py-2 font-bold border">Approach</th>
          <th className="px-4 py-2 font-bold border">Best For</th>
          <th className="px-4 py-2 font-bold border">Key Steps</th>
          <th className="px-4 py-2 font-bold border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border"> General (Kepner-Tregoe)</td>
          <td className="px-4 py-2 border">Quick, defined problems</td>
          <td className="px-4 py-2 border">Clarify → Root Cause → Decide → Act</td>
          <td className="px-4 py-2 border">Machine error traced via timeline</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border"> Research (DSRM)</td>
          <td className="px-4 py-2 border">Hypotheses, novel inquiry</td>
          <td className="px-4 py-2 border">Problem → Hypothesis → Test → Share</td>
          <td className="px-4 py-2 border">Wetland metal retention study</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border"> Innovation (HCD)</td>
          <td className="px-4 py-2 border">New ideas for unmet needs</td>
          <td className="px-4 py-2 border">Empathize → Ideate → Test</td>
          <td className="px-4 py-2 border">Natural dye soil sensor</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border"> Design (Double Diamond)</td>
          <td className="px-4 py-2 border">Context-sensitive improvements</td>
          <td className="px-4 py-2 border">Discover → Define → Deliver</td>
          <td className="px-4 py-2 border">Elder-friendly bus stops</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border"> Systems Thinking</td>
          <td className="px-4 py-2 border">Complex, systemic issues</td>
          <td className="px-4 py-2 border">Map → Leverage → Intervene</td>
          <td className="px-4 py-2 border">Hilly region landslide mitigation</td>
        </tr>
      </tbody>
    </table>
  </div>
    </>
  );
}
