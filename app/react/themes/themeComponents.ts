// app/react/themes/themeComponentMap.ts

const themeComponentMap: Record<string, () => Promise<any>> = {
  "live-with-forest": () => import("./live-with-forest"),
  "built-environments": () => import("./built-environments"),
  "tech-for-society": () => import("./tech-for-society"),
  "rural-innovation": () => import("./rural-innovation"),
  "agritechfarm": () => import("./agritechfarm"), 
  "Primary Health Innovation": () => import("./primary-health-innovation"),
  "Water & Waste MunicipalSystems": () => import("./municipal-systems"),
  "techfordairy": () => import("./techfordairy"),
  
};


export default themeComponentMap;
