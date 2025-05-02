"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  openPhase: (value: "explore" | "reflect" | "solve" | "implement") => void;
};

const contentMap: Record<string, React.ReactNode> = {
  explore: (
    <>
      <h3 className="text-xl font-bold mb-4 text-green-800">🌿 Live the Life – 30 Days</h3>

      <p className="mb-4 text-gray-700">
        What if your classroom had no walls? What if your teacher was the land, the weather, the people—and every choice they make to survive and thrive? That’s what <strong>Live the Life</strong> is all about.
      </p>

      <p className="mb-4 text-gray-700">
        For 30 days, you don’t just visit a community—you become a part of it. Whether it’s waking up at 4:30 AM to milk the cows, bargaining in the local market, repairing broken irrigation pipes, or listening to stories over firewood dinners—you <em>live the everyday</em>. And in doing so, you start seeing what most people miss: the friction points, the workarounds, the invisible systems at play.
      </p>

      <p className="text-lg text-gray-800 italic mb-6">
  There are seasons in a life where you don’t study the world—you enter it.<br/>
  You sleep under its breath, walk through its silence, and work with its weight.<br/>
  Not to master it. But to understand what it asks of you.
</p>

<p className="text-base text-gray-700 mb-4">
  REACT is that season. Not a course. Not a curriculum. A crossing.
</p>

<p className="text-base text-gray-700 mb-4">
  Here, you live among the questions—not answer them. You let mud stain your palms and conversations shape your mind. You observe systems not in diagrams, but in the pace of a morning, the choice of a tool, the curve of a shared path.
</p>

<p className="text-base text-gray-700 mb-4">
  It is not light. And yet, it is. Because what burdens the mind lightens the self when carried with purpose.
</p>

<p className="text-base text-gray-700">
This is where learning stops rehearsing—and begins to live.
</p>

      <p className="mb-4 text-gray-700">
        This isn’t a field visit. This is full immersion. You aren’t a tourist—you’re a temporary citizen. And that changes everything.
      </p>

      <p className="mb-4 text-gray-700">
        You document your observations—not as a researcher, but as someone who belongs. You journal, film, photograph, sketch, talk, and most importantly—<strong>listen</strong>. This phase isn’t about fixing anything yet. It’s about noticing everything.
      </p>

      <p className="mb-4 text-center italic font-medium text-indigo-700">
        “We can’t change a world we haven’t walked in. So we walk in it. Fully.”
      </p>

      <p className="mb-6 text-gray-700">
        Explore is your entry into a life you’ve never lived—and possibly, never truly understood. It’s raw. It’s real. And it opens your eyes like no lecture ever could.
      </p>
    </>
  ),
  reflect: (
    <>
      <h3 className="text-xl font-bold mb-4 text-yellow-700">🌀 Reflect & Distill – 7 to 30 Days</h3>
  
      <p className="mb-4 text-gray-700">
        Some things don’t make sense in the moment. Only when you step back, sit still, and listen again—do they begin to speak. That’s what <strong>Reflect</strong> is for. After living the life, you let it breathe through you one more time. This time, slower. This time, with intention.
      </p>
  
      <p className="mb-4 text-gray-700">
        You return not just with stories, but with tension. With something unresolved. Something that stayed with you. This phase helps you hold that feeling long enough to ask:
      </p>
  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Why did this moment matter more than others?</li>
        <li>What caused this problem to exist?</li>
        <li>Who is affected—and how do they see it?</li>
        <li>What has already been tried?</li>
        <li>Is this a problem that needs to be solved—or understood differently?</li>
      </ul>
  
      <p className="text-lg text-gray-800 italic mb-6">
        Reflection is not a pause in the journey. It’s the part where you decide where to go next.
      </p>
  
      <p className="text-base text-gray-700 mb-4">
        Here, you study not books—but the systems you lived inside. You map relationships, visualize impact chains, trace decisions across time. It’s a time for silence, systems, and synthesis.
      </p>
  
      <p className="text-base text-gray-700 mb-4">
        With mentor support, you’ll eventually choose one challenge to carry forward—not the loudest one, but the one that’s asking for you. The one you understand both emotionally and structurally. And from that, you’ll begin shaping it into a <strong>problem statement</strong>, a <strong>research hypothesis</strong>, or a <strong>design brief</strong>.
      </p>
  
      <p className="text-gray-700 mb-6">
        But before you can solve anything, you must first understand what you’re solving—and why. That begins by turning your lived experience into insights worth acting on.
      </p>
  
      <h4 className="text-lg font-semibold text-yellow-700 mb-2">Part One: Insight Mining from Experience</h4>
  
      <p className="mb-4 text-gray-700">
        After 30 days of immersion, you carry memories, emotions, and observations. Insight Mining helps you transform these into clear, grounded, and meaningful problem statements.
      </p>

      <div className="my-6 flex justify-center overflow-hidden">
  <img
    src="reflect.svg" // <-- replace with your actual filename
    alt="Insight Mining Flowchart"
    className="w-full max-w-2xl object-contain border-none"
    style={{ clipPath: 'inset(2px 2px 2px 2px)' }} // removes thin outer lines
  />
</div>

  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Reconstruct your journey:</strong> Map out your days—what happened, who you met, what stood out.</li>
        <li><strong>Highlight tension points:</strong> Look for moments that felt frustrating, unfair, slow, or confusing.</li>
        <li><strong>Ask reflective questions:</strong> Why did this happen? Who was impacted? What system was involved?</li>
        <li><strong>Cluster recurring themes:</strong> Group moments into patterns—around water, trust, time, access, etc.</li>
        <li><strong>Draft raw problem statements:</strong> Use phrases like “I noticed that...” or “How might we...”</li>
        <li><strong>Sense-check your insights:</strong> Share with mentors, peers, or locals to validate what you found.</li>
      </ul>
  
      <p className="text-gray-700 mb-6">
        This process gives you not just a list of problems—but problems that are personal, observed, and real.
      </p>
  
      <h4 className="text-lg font-semibold text-yellow-700 mb-2">Part Two: Shortlisting the Right Problem</h4>
  
      <p className="mb-4 text-gray-700">
        Once you have a list of potential problems, you need a method to choose the one to take forward. We use a structured scoring system to help you decide with clarity.
      </p>
  
      <p className="mb-2 text-gray-700 font-medium">Score each problem (1 to 5) across the following:</p>
  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Is this a real and current issue in the community?</li>
        <li>Do I genuinely care about solving it?</li>
        <li>Can I address this within the next 3 to 12 months?</li>
        <li>Do I or my team have access to tools or skills for this?</li>
        <li>If solved, would it create meaningful impact?</li>
        <li>Does this align with what I want to grow or learn?</li>
      </ul>
  
      <p className="mb-4 text-gray-700">
        Add up the scores. Prioritize the top 2 or 3. Then choose the one that feels right—not just in numbers, but in your gut.
      </p>
  
      <p className="mb-4 text-gray-700">
        You can also draw a grid with effort on the X-axis and impact on the Y-axis. Aim for problems that fall in the high-impact, low-to-medium effort zone.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">Visual Prioritization Matrix</h4>

<p className="mb-4 text-gray-700">
  Use this matrix to help visualize which problems are worth pursuing based on effort required and potential impact.
</p>

<div className="overflow-x-auto mb-6">
  <table className="min-w-full text-sm text-left text-gray-700 border border-collapse border-gray-300">
    <thead>
      <tr className="bg-yellow-100">
        <th className="px-4 py-2 border font-bold text-center">Impact ↓<br/>Effort →</th>
        <th className="px-4 py-2 border font-bold text-center">Low Effort</th>
        <th className="px-4 py-2 border font-bold text-center">Medium Effort</th>
        <th className="px-4 py-2 border font-bold text-center">High Effort</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-3 border font-semibold bg-yellow-50">High Impact</td>
        <td className="px-4 py-3 border"><u>Best Choice</u><br/>Quick wins with great value</td>
        <td className="px-4 py-3 border"><u>Good candidates</u><br/>Worth investing effort</td>
        <td className="px-4 py-3 border"><u>Big ideas</u><br/>Needs long-term commitment</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border font-semibold bg-yellow-50">Medium Impact</td>
        <td className="px-4 py-3 border"><u>Helpful</u><br/>Low resistance</td>
        <td className="px-4 py-3 border"><u>Maybe</u><br/>Only if well aligned</td>
        <td className="px-4 py-3 border"><u>Costly</u><br/>Hard to justify</td>
      </tr>
      <tr>
        <td className="px-4 py-3 border font-semibold bg-yellow-50">Low Impact</td>
        <td className="px-4 py-3 border"><u>Ignore</u><br/>Low return</td>
        <td className="px-4 py-3 border"><u>Skip</u><br/>Likely not worth effort</td>
        <td className="px-4 py-3 border"><u>Avoid</u><br/>Drains resources</td>
      </tr>
    </tbody>
  </table>
</div>


  
      <p className="text-gray-700 mb-4">
        Ask yourself:
      </p>
  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Which one can I commit to for the next few months?</li>
        <li>Which one feels urgent and meaningful?</li>
        <li>Which one aligns with my skills, my timeline, and my passion?</li>
      </ul>
  
      <p className="text-gray-700 mb-6">
        Your final choice becomes the foundation for the Solve phase. It's not just a project. It’s your way of honoring the life you lived—and beginning to change it.
      </p>
  
      <p className="text-base text-gray-700 italic">
        Reflect is where immersion becomes insight. It’s where experience becomes direction. It’s where intention enters the equation.
      </p>
    </>
  ),
  
  solve: (
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
  ),

  implement: (
    <>
      <h3 className="text-xl font-bold mb-4 text-green-700"> Implement & Transfer – 1 to 3 Months</h3>
  
      <p className="mb-4 text-gray-700">
        This is where your solution leaves the sketchbook and enters the soil, the system, the hands of the people who need it most. The <strong>Implement</strong> phase is not just deployment—it's refinement, resilience, and readiness for the real world.
      </p>
  
      <p className="mb-4 text-gray-700">
        Whether you’re field-testing a tool, co-building with a sponsor, or preparing for long-term impact, this phase helps you <strong>finalize, document, protect, and share</strong> your work—ethically and accessibly.
      </p>
  
      <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">Iterative Testing & Refinement</h4>
      <p className="mb-4 text-gray-700">
        Implementation begins with small-scale trials. You place your solution into the environment it was built for—and let it speak back to you. You watch how it behaves, how people respond, and what breaks down.
      </p>
  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Prototype Deployment:</strong> Release your working solution in a real context.</li>
        <li><strong>User Testing:</strong> Collect data and feedback from direct use, observation, and dialogue.</li>
        <li><strong>Refine:</strong> Identify what’s working and where friction still exists—then adjust.</li>
        <li><strong>Repeat:</strong> Iterate until the solution is stable, safe, and context-appropriate.</li>
      </ul>
  
      <p className="text-gray-700 italic mb-6">
        Implementation isn’t a final step—it’s the beginning of a feedback loop.
      </p>
  
      <h4 className="text-lg font-semibold text-green-700 mb-2">Documentation & Intellectual Property</h4>
      <p className="mb-4 text-gray-700">
        As your solution takes form, so must your record of it. You’ll begin building a clear and sharable archive of your process, decisions, iterations, and learnings.
      </p>
  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Document Design:</strong> Structure the journey from idea to implementation (drawings, logs, journals).</li>
        <li><strong>IP Filing (if applicable):</strong> Work with your mentor or legal counsel to file patents, copyrights, or trademarks.</li>
        <li><strong>Open Publishing:</strong> Share your learnings and frameworks for others to replicate or build upon.</li>
      </ul>
  
      <p className="text-gray-700 mb-4">
        IP protection is not about ownership. It’s about <strong>ensuring your work remains accessible, ethical, and attributed</strong>—especially when others want to scale it.
      </p>
  
      <h4 className="text-lg font-semibold text-green-700 mb-2">Industry Partnerships & Commercialization</h4>
      <p className="mb-4 text-gray-700">
        Some solutions will remain grassroots. Others may scale—with support. When working with an industry sponsor, this phase becomes a shared journey. You’ll explore how to develop, manufacture, distribute, or maintain your solution with real-world systems.
      </p>
  
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Align values:</strong> Ensure the partner understands your goals—social, ecological, or systemic.</li>
        <li><strong>Map responsibilities:</strong> Who builds what? Who funds what? Who owns what?</li>
        <li><strong>Co-develop strategy:</strong> Build together toward a sustainable, scalable form of the solution.</li>
      </ul>
  
      <p className="text-gray-700 mb-4">
        If your solution reaches commercialization, this phase includes defining your <strong>business model, user pipeline, cost structure, and manufacturing roadmap</strong>—with guidance from both mentors and industry partners.
      </p>
  
      <p className="text-lg text-gray-800 italic mb-6">
        The goal of implementation isn’t just reach. It’s repeatability, responsibility, and readiness for the world beyond you.
      </p>
  
      <p className="text-gray-700 mb-6">
        Your final implementation can take many forms: a working prototype in use, a policy brief adopted by a village council, a startup-ready MVP, or a published, protected toolkit available for free access.
      </p>
  
      <p className="text-base text-gray-700 italic">
        Implement is where your solution stops being yours—and becomes something others can live with, build on, and carry forward.
      </p>
    </>
  ),


  };

  export default function About({ openPhase }: Props) {
    const [active, setActive] = useState<"explore" | "reflect" | "solve" | "implement">("explore");
  
    return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      <div className="relative">
        <h2 className="text-2xl font-bold mb-4">About REACT</h2>
  
        <p className="mb-4 text-gray-700">
          In a country as vast and diverse as India, the challenges we face—from education to sustainability—are complex, layered, and deeply human. REACT was born from a bold dream: to reimagine education not as a classroom-bound experience, but as a lived journey that builds skilled, empathetic problem solvers grounded in the realities of society.
        </p>
  
        <p className="mb-4 text-center text-lg font-semibold italic text-indigo-700">
          “We don’t prepare students for the real world. We place them right in the middle of it.”
        </p>
  
        <p className="mb-4 text-gray-700">
          REACT stands for <strong>Real-world Experience and Application through Collaborative Transformation</strong>. It’s not just a program—it’s a new way of learning, where participants <em>live, observe, reflect, and solve</em> real-world challenges by immersing themselves in the lives of everyday changemakers. It's experiential. It's personal. And it’s deeply collaborative.
        </p>
  
        <p className="mb-4 text-center text-lg font-semibold italic text-green-700">
          “You can’t fix a system you’ve never felt. REACT makes you feel it first.”
        </p>
  
        <p className="mb-4 text-gray-700">
          For example, in the defense sector, engineers don’t just design in labs—they work alongside soldiers in the field to understand real needs before building practical solutions in institutions like DRDO.
        </p>
  
        <p className="mb-4 text-gray-700">
          REACT applies that same principle to farming. Participants begin their journey by <strong>living as a farmer for 30 days</strong>. They wake up with the sun, work the fields, face the challenges, and deeply engage with the system—not as outsiders, but as part of it. This immersion brings powerful insights that no textbook can offer.
        </p>
  
        <p className="mb-4 text-center text-lg font-semibold italic text-orange-700">
          “We don’t study problems from a distance. We live with them until they reveal their truth.”
        </p>
  
        <p className="mb-4 text-gray-700">
          From there, they identify one problem they've lived or witnessed, break it down using systems thinking, and reframe it into a research question, innovation opportunity, or design challenge. Supported by mentors and collaborators, they build, test, and refine solutions—often right back in the same fields where the problem was born.
        </p>
  
        <p className="mb-4 text-center text-lg font-semibold italic text-rose-700">
          “This is not internship. It’s not research. It’s transformation—of self and of system.”
        </p>
  
        <p className="mb-6 text-gray-700">
          REACT is more than education. It’s a launchpad for changemakers. It turns learning into lived experience, problems into prototypes, and participants into purpose-driven problem solvers.
        </p>
  
        <p className="mb-6 text-gray-700">
          The REACT journey unfolds through four powerful stages. First, you <strong>Explore</strong>—living in the field for 30 days to experience realities firsthand. Then, you <strong>Reflect</strong>—spending 1 to 4 weeks to unpack what you felt and define a meaningful problem. Once you're ready, you <strong>Solve</strong>—working over 3, 6, or even 12 months to design and build a solution with mentors and collaborators. And finally, you <strong>Implement</strong>—bringing your prototype back into the real world to test, refine, and create real impact.
        </p>
  
        <p className="mb-6 text-gray-700">
          Each of these phases forms the heart of REACT, and you’ll find more about them—step by step—throughout this website.
        </p>
  
        {/* Sticky Phase Navigation */}
        <div className="sticky top-0 bg-white py-4 z-10 border-y border-gray-200">
  <div className="overflow-x-auto px-4 snap-x snap-mandatory">
    <div className="inline-flex items-center gap-3 whitespace-nowrap min-w-max">
      {(["explore", "reflect", "solve", "implement"] as const).map((phase, idx, arr) => (
        <div key={phase} className="flex items-center gap-3 shrink-0 snap-start">
          <button
            onClick={() => setActive(phase)}
            className={`px-4 py-2 rounded font-semibold ${
              active === phase ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
          >
            {phase.charAt(0).toUpperCase() + phase.slice(1)}
          </button>
          {idx < arr.length - 1 && <span className="text-xl text-gray-400">→</span>}
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Sliding Info Area */}
        <div className="relative mt-6 mb-6 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-xl px-6 pt-6 pb-10 shadow w-full"
            >
              <h3 className="text-lg font-semibold mb-2 capitalize">{active}</h3>
              <p className="text-sm text-gray-700">{contentMap[active]}</p>
            </motion.div>
          </AnimatePresence>
        </div>
  
        {/* Extra Content Below (Scrollable) */}
        <div className="mt-10 space-y-4">
          <h3 className="text-xl font-bold">REACT With Us—Live, Learn, and Lead Change.</h3>
          <p className="text-gray-700 text-sm">
            REACT is not just a program—it is a proposition for the future of education in India and beyond. One where students grow not just as professionals, but as people of purpose. Where communities become classrooms, and problems become possibilities.
          </p>
          <p className="text-gray-700 text-sm">
            As REACT moves from pilot to platform, we invite changemakers, institutions, and global networks to walk with us—to listen, to co-create, and to build a world where learning is inseparable from living. Because the next revolution in education won’t come from better answers—it will come from deeper presence.
          </p>
        </div>
      </div>
      </div>

    );
  }