"use client";


import LiveWithForest from "./live-with-forest";
import BuiltEnvironments from "./built-environments";
import TechForSociety from "./tech-for-society";
import RuralInnovation from "./rural-innovation";

const themes = [
  { slug: "live-with-forest", title: "Live with Forest", component: LiveWithForest },
  { slug: "built-environments", title: "Built Environments", component: BuiltEnvironments },
  { slug: "tech-for-society", title: "Tech for Society", component: TechForSociety },
  { slug: "rural-innovation", title: "Rural Innovation", component: RuralInnovation },
];

export default themes;