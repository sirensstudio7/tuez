export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navigationData: NavItem[] = [
  {
    label: "University",
    href: "#university",
    subItems: [
      { label: "License", href: "#license" },
      { label: "University Mission", href: "#mission" },
      { label: "Charter", href: "#charter" },
      { label: "Organizational structure", href: "#structure" },
      { label: "Councils", href: "#councils" },
      { label: "Ratings", href: "#ratings" },
      { label: "Requisites", href: "#requisites" },
      { label: "Financial statements", href: "#financial-statements" },
      { label: "University in numbers", href: "#numbers" },
      { label: "Accreditation", href: "#accreditation" },
      { label: "Famous graduates", href: "#graduates" },
      { label: "Faculties", href: "#faculties" },
      { label: "Departments", href: "#departments" },
      { label: "Center and departments", href: "#centers" },
      { label: "Open data", href: "#open-data" },
      { label: "Trade union committee", href: "#trade-union" },
      { label: "Contract prices", href: "#contract-prices" },
    ],
  },
  {
    label: "Education",
    href: "#education",
    subItems: [
      { label: "Faculties", href: "#faculties" },
      { label: "Departments", href: "#departments" },
      { label: "Undergraduate", href: "#undergraduate" },
      { label: "Master's Degree", href: "#masters" },
      { label: "Distance Education", href: "#distance" },
      { label: "Part-time Education", href: "#part-time" },
    ],
  },
  {
    label: "Science",
    href: "#science",
    subItems: [
      { label: "Scientific Activity", href: "#scientific-activity" },
      { label: "Scientific Journals", href: "#journals" },
      { label: "Conferences", href: "#conferences" },
      { label: "Research Centers", href: "#research-centers" },
      { label: "PhD & DSc", href: "#doctorate" },
    ],
  },
  {
    label: "Internationalization",
    href: "#internationalization",
    subItems: [
      { label: "International Cooperation", href: "#cooperation" },
      { label: "Joint Programs", href: "#joint-programs" },
      { label: "Foreign Students", href: "#foreign-students" },
      { label: "Exchange Programs", href: "#exchange" },
      { label: "Partner Universities", href: "#partners" },
    ],
  },
  {
    label: "Student Life",
    href: "#student-life",
    subItems: [
      { label: "Youth Policy", href: "#youth-policy" },
      { label: "Student Union", href: "#union" },
      { label: "Clubs & Activities", href: "#clubs" },
      { label: "Dormitories", href: "#dormitories" },
      { label: "Events", href: "#events" },
    ],
  },
  {
    label: "Admission 2025",
    href: "#admission",
    subItems: [
      { label: "Admission Rules", href: "#rules" },
      { label: "Quotas", href: "#quotas" },
      { label: "Required Documents", href: "#documents" },
      { label: "Apply Online", href: "#apply" },
      { label: "Call Center", href: "#call-center" },
    ],
  },
  {
    label: "Information Services",
    href: "#services",
    subItems: [
      { label: "Hemis Student", href: "#hemis-student" },
      { label: "Hemis Staff", href: "#hemis-staff" },
      { label: "Library", href: "#library" },
      { label: "Moodle", href: "#moodle" },
      { label: "Edu-Market", href: "#market" },
    ],
  },
  {
    label: "Vacancies",
    href: "#vacancies",
    subItems: [
      { label: "Academic Positions", href: "#academic-jobs" },
      { label: "Administrative Staff", href: "#admin-jobs" },
      { label: "Tenders", href: "#tenders" },
    ],
  },
];

export { navigationData };
