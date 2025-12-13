import { LucideIcon, FileText, Target, FileCheck, Network, Users, Award, Building2, Calculator, BarChart, GraduationCap, BookOpen, Library, Globe, Briefcase, School, Laptop, Calendar, Phone, FileSearch, ExternalLink, ClipboardList, Handshake, DollarSign, UserCircle, Users2, Activity, BookMarked, Presentation, Microscope, GraduationCap as GradCap, Plane, Languages, Heart, Home, Building, FolderOpen, ShoppingCart } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string; icon?: LucideIcon }[];
}

export const navigationData: NavItem[] = [
  {
    label: "University",
    href: "#university",
    subItems: [
      { label: "License", href: "#license", icon: FileCheck },
      { label: "University Mission", href: "#mission", icon: Target },
      { label: "Charter", href: "#charter", icon: FileText },
      { label: "Organizational structure", href: "#structure", icon: Network },
      { label: "Councils", href: "#councils", icon: Users },
      { label: "Ratings", href: "#ratings", icon: Award },
      { label: "Requisites", href: "#requisites", icon: FileSearch },
      { label: "Financial statements", href: "#financial-statements", icon: DollarSign },
      { label: "University in numbers", href: "#numbers", icon: BarChart },
      { label: "Accreditation", href: "#accreditation", icon: Award },
      { label: "Famous graduates", href: "#graduates", icon: GraduationCap },
      { label: "Faculties", href: "#faculties", icon: School },
      { label: "Departments", href: "#departments", icon: Building2 },
      { label: "Center and departments", href: "#centers", icon: FolderOpen },
      { label: "Open data", href: "#open-data", icon: ExternalLink },
      { label: "Trade union committee", href: "#trade-union", icon: Handshake },
      { label: "Contract prices", href: "#contract-prices", icon: ClipboardList },
    ],
  },
  {
    label: "Education",
    href: "#education",
    subItems: [
      { label: "Faculties", href: "#faculties", icon: School },
      { label: "Departments", href: "#departments", icon: Building2 },
      { label: "Undergraduate", href: "#undergraduate", icon: BookOpen },
      { label: "Master's Degree", href: "#masters", icon: GraduationCap },
      { label: "Distance Education", href: "#distance", icon: Laptop },
      { label: "Part-time Education", href: "#part-time", icon: Calendar },
    ],
  },
  {
    label: "Science",
    href: "#science",
    subItems: [
      { label: "Scientific Activity", href: "#scientific-activity", icon: Microscope },
      { label: "Scientific Journals", href: "#journals", icon: BookMarked },
      { label: "Conferences", href: "#conferences", icon: Presentation },
      { label: "Research Centers", href: "#research-centers", icon: Building },
      { label: "PhD & DSc", href: "#doctorate", icon: GradCap },
    ],
  },
  {
    label: "Internationalization",
    href: "#internationalization",
    subItems: [
      { label: "International Cooperation", href: "#cooperation", icon: Handshake },
      { label: "Joint Programs", href: "#joint-programs", icon: Globe },
      { label: "Foreign Students", href: "#foreign-students", icon: Plane },
      { label: "Exchange Programs", href: "#exchange", icon: Languages },
      { label: "Partner Universities", href: "#partners", icon: Building2 },
    ],
  },
  {
    label: "Student Life",
    href: "#student-life",
    subItems: [
      { label: "Youth Policy", href: "#youth-policy", icon: Heart },
      { label: "Student Union", href: "#union", icon: Users2 },
      { label: "Clubs & Activities", href: "#clubs", icon: Activity },
      { label: "Dormitories", href: "#dormitories", icon: Home },
      { label: "Events", href: "#events", icon: Calendar },
    ],
  },
  {
    label: "Admission 2025",
    href: "#admission",
    subItems: [
      { label: "Admission Rules", href: "#rules", icon: FileText },
      { label: "Quotas", href: "#quotas", icon: Calculator },
      { label: "Required Documents", href: "#documents", icon: FileCheck },
      { label: "Apply Online", href: "#apply", icon: ExternalLink },
      { label: "Call Center", href: "#call-center", icon: Phone },
    ],
  },
  {
    label: "Information Services",
    href: "#services",
    subItems: [
      { label: "Hemis Student", href: "#hemis-student", icon: UserCircle },
      { label: "Hemis Staff", href: "#hemis-staff", icon: Briefcase },
      { label: "Library", href: "#library", icon: Library },
      { label: "Moodle", href: "#moodle", icon: Laptop },
      { label: "Edu-Market", href: "#market", icon: ShoppingCart },
    ],
  },
  {
    label: "Vacancies",
    href: "#vacancies",
    subItems: [
      { label: "Academic Positions", href: "#academic-jobs", icon: GraduationCap },
      { label: "Administrative Staff", href: "#admin-jobs", icon: Briefcase },
      { label: "Tenders", href: "#tenders", icon: FileSearch },
    ],
  },
];
