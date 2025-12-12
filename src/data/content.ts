import { LucideIcon, BookOpen, Users, Trophy, Lightbulb, Globe, Target, Calculator, BarChart, Plane, Briefcase, Coins, ShieldCheck, Laptop } from "lucide-react";

export interface Faculty {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  stats?: { label: string; value: string }[];
}

export const facultiesData: Faculty[] = [
  {
    id: "econ",
    name: "Faculty of Economics",
    description: "The cornerstone of TSUE, focusing on macroeconomic theory, policy analysis, and sustainable development strategies.",
    icon: BarChart,
    stats: [{ label: "Students", value: "3,500" }, { label: "Departments", value: "5" }]
  },
  {
    id: "corp-gov",
    name: "Faculty of Corporate Governance",
    description: "Preparing future CEOs and board members with skills in strategic management, ethics, and corporate law.",
    icon: Briefcase,
    stats: [{ label: "Students", value: "2,100" }, { label: "Partners", value: "40+" }]
  },
  {
    id: "audit",
    name: "Faculty of Accounting & Audit",
    description: "Rigorous training in international financial reporting standards (IFRS), forensic accounting, and auditing.",
    icon: Calculator,
    stats: [{ label: "Students", value: "2,800" }, { label: "Employment Rate", value: "95%" }]
  },
  {
    id: "it-econ",
    name: "Faculty of Information Systems",
    description: "Bridging the gap between technology and business, covering big data, fintech, and digital transformation.",
    icon: Laptop,
    stats: [{ label: "Students", value: "1,900" }, { label: "Labs", value: "8" }]
  },
  {
    id: "tourism",
    name: "Faculty of International Tourism",
    description: "Specialized education in hospitality management, eco-tourism, and service industry economics.",
    icon: Plane,
    stats: [{ label: "Students", value: "1,500" }, { label: "Internships", value: "Global" }]
  },
  {
    id: "finance",
    name: "Faculty of Finance",
    description: "Deep dive into banking systems, investment banking, public finance, and fiscal policy.",
    icon: Coins,
    stats: [{ label: "Students", value: "3,200" }, { label: "CFA Aligned", value: "Yes" }]
  },
  {
    id: "marketing",
    name: "Faculty of Marketing",
    description: "Developing creative strategists with expertise in digital marketing, brand management, and consumer behavior analysis.",
    icon: Target,
    stats: [{ label: "Students", value: "1,800" }, { label: "Projects", value: "120+" }]
  }
];

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "International Forum: Global and National Economic Trends",
    date: "Oct 24, 2025",
    category: "Events",
    summary: "TSUE will host the 4th International Forum titled 'Global and National Economic Trends: Uzbekistan–2030 Strategy', bringing together leading economists and policymakers.",
    image: "/image1.jpg" 
  },
  {
    id: "2",
    title: "TSUE Ranks Top in Regional Sustainability Index",
    date: "Dec 10, 2025",
    category: "Achievements",
    summary: "The university has been recognized for its 'Green Campus' initiative, securing the top spot in the Central Asian sustainability rankings for 2025.",
    image: "/image2.jpg"
  },
  {
    id: "3",
    title: "New Partnership with London School of Economics",
    date: "Nov 15, 2025",
    category: "Partnerships",
    summary: "A strategic memorandum has been signed to facilitate student exchange programs and joint research initiatives with LSE.",
    image: "/image3.jpg"
  },
  {
    id: "4",
    title: "Launch of AI in Finance Master's Program",
    date: "Sep 01, 2025",
    category: "Academics",
    summary: "Responding to market demands, TSUE introduces a cutting-edge Master's degree focusing on Artificial Intelligence applications in the financial sector.",
    image: "/image1.jpg"
  },
  {
    id: "5",
    title: "Research Center Opens for Sustainable Development",
    date: "Aug 20, 2025",
    category: "Research",
    summary: "A new state-of-the-art research center focusing on sustainable economic development and environmental policies has been inaugurated.",
    image: "/image2.jpg"
  },
  {
    id: "6",
    title: "Student Exchange Program with European Universities",
    date: "Jul 15, 2025",
    category: "International",
    summary: "TUES expands its international partnerships with top European universities, offering students global learning opportunities.",
    image: "/image3.jpg"
  },
  {
    id: "7",
    title: "Annual Graduation Ceremony Celebrates 5,000 Graduates",
    date: "Jun 30, 2025",
    category: "Events",
    summary: "The university proudly celebrates the graduation of over 5,000 students across various disciplines in a grand ceremony.",
    image: "/image1.jpg"
  },
  {
    id: "8",
    title: "New Scholarship Program for International Students",
    date: "May 10, 2025",
    category: "Admission",
    summary: "TUES announces a comprehensive scholarship program to support international students pursuing higher education in Uzbekistan.",
    image: "/image2.jpg"
  }
];

export const statsData = [
  { label: "Students", value: "25,000+", icon: Users },
  { label: "Faculty Members", value: "1,200+", icon: Trophy },
  { label: "Research Centers", value: "15", icon: Lightbulb },
  { label: "International Partners", value: "150+", icon: Globe },
];

export const aboutContent = {
  history: "The Termez University of Economics and Service (TUES) is a renowned Uzbekistan institution committed to advancing exceptional Medical and other Higher Education. TUES strives to produce outstanding Medical graduates from both Uzbekistan and international medical aspirants.",
  mission: "TUES strongly emphasizes conducting cutting-edge research and implementing the latest teaching methods to provide outstanding clinical and other training to its students. The university offers a wide range of programs in various fields of study at both the undergraduate and graduate levels. Through its extensive network of global partnerships, TUES effectively incorporates industry-driven teaching and training techniques to support its graduates. The degrees offered by TUES, including MBBS, are recognized worldwide.",
  vision: "To become a recognized hub of academic excellence and innovation in Central Asia by 2030."
};
