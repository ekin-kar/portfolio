import CV from "../assets/Kar_Ekin.pdf";

export const navItems = [
  { id: "#home", icon: "uil-estate", label: "Home" },
  { id: "#skills", icon: "uil-file-alt", label: "Skills" },
  { id: "#portfolio", icon: "uil-scenery", label: "Portfolio" },
  { id: "#qualifications", icon: "uil-briefcase-alt", label: "Qualifications" },
  { id: "#contact", icon: "uil-message", label: "Contact" },
];

export const otherPageLinks = [
  { to: "/", label: "Home" },
  { href: CV, label: "Download CV", download: "" },
  {
    href: "https://github.com/ekin-kar/",
    label: "Github",
    target: "_blank",
    rel: "noreferrer",
  },
  { to: "/contact", label: "Contact" },
];
