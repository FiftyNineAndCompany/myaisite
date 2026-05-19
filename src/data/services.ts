import { Users, FileCheck, Cpu, Network, Search, Building } from 'lucide-react';

export const TECH_SERVICES = [

  {
    id: 'testing',
    title: 'Testing Services',
    subtitle: 'Quality Assurance & Protocols',
    description: 'Comprehensive testing for UI/UX, SaaS, IoT, and Network Protocols.',
    // 👇 YOUR NEW CONTENT
    detailedDescription: [
      "We have an experienced team ready to execute your testing work within the given timeframe.",
      "We use industry-standard tools for testing and ensure on-time delivery.",
      "We have a specialized team that can take up the project at any stage of development (QA, Staging, and Production).",
      "We have our own market users to test the Beta version of your software.",
      "We work beyond production for market issues, and work harder to prevent any bug leakage or user experience issues.",
      "Share your testing load with us and the rest of our team will manage it."
    ],
    features: ['End to end manual and automation Testing'],
    icon: FileCheck,
    link: '/services/software-testing',
    color: 'from-cyan-500/20'
  },
  {
    id: 'dev',
    title: 'IT & AI Development',
    subtitle: 'Next-Gen Engineering',
    description: 'Electronics, IoT, and AI-powered software development for industry and academia.',
    // 👇 YOUR NEW CONTENT
    detailedDescription: [
      "We develop AI tools like intelligent chat bots.",
      "We develop websites using cutting-edge AI tools.",
      "We develop IoT Products and applications for Colleges and Industries.",
      "Our specialized team conducts workshops at colleges and also gives private learning classes for the same.",
      "Share your plan with us and we will build it."
    ],
    features: ['IoT Ecosystems', 'AI Integration', 'Web Architecture'],
    icon: Cpu,
    link: '/services/it-ai-development',
    color: 'from-purple-500/20'
  }
];

export const UTILITY_SERVICES = [

  {
    id: 'staffing',
    title: 'Staffing Solutions',
    subtitle: 'Strategic Engineering Talent',
    description: 'Sourcing, vetting, and deploying elite technical and non-technical talent from Tier 2 & 3 cities.',
    // 👇 YOUR NEW CONTENT
    detailedDescription: [
      "We act as a dedicated vendor for your company to provide and hire candidates for your required posts.",
      "We have a strong database and extensive networking to choose the perfect candidate for your job role.",
      "We take care of the entire screening process for you.",
      "We hire candidates specifically for third-party payroll.",
      "We have our own channels to source highly skilled and budget-friendly candidates for your company."
    ],
    features: ['Third-party Payroll', 'Technical Screening', 'Quick Deployment'],
    icon: Users,
    link: '/services/it-staffing',
    color: 'from-blue-500/20'
  },
  
  {
    id: 'bpo',
    title: 'BPO Services',
    subtitle: 'Operational Excellence',
    description: 'Managing inbound and outbound projects with high-efficiency consultancy.',
    // 👇 YOUR NEW CONTENT
    detailedDescription: [
      "We run complete in-house BPO services.",
      "We provide both inbound and outbound services.",
      "We manage high-quality Indian and US-based BPO projects.",
      "We have an expert team to run your digital campaigns."
    ],
    features: ['Process Optimization', '24/7 Support', 'Scalable Teams'],
    icon: Network,
    link: '/services/bpo-solutions',
    color: 'from-emerald-500/20'
  },
 
  {
    id: 'plagiarism',
    title: 'Plagiarism Express Solution',
    subtitle: 'Academic Integrity',
    description: 'High-speed Turnitin reports for thesis, research papers, and articles.',
    // 👇 YOUR NEW TRANSPARENT PRICING CONTENT
    detailedDescription: [
      "We provide comprehensive plagiarism checking for: Research Papers, Articles, Book Chapters, PhD Theses, and Review Papers.",
      "Confidentiality Guarantee: Your data's security and absolute privacy will be strictly maintained at all times.",
      "Standard Checking Pricing: 1 to 20 pages (₹1,000) | 21 to 40 pages (₹2,000) | 41 to 60 pages (₹3,500) | PhD Thesis (Price based on total pages).",
      "Plagiarism Checking & Removal (Science Field Only): PhD Thesis removal ranges from ₹15,000 to ₹20,000.",
      "Checking & Removal for Papers (Science Only): 1 to 20 pages (₹7,000) | 21 to 40 pages (₹14,000) | 41 to 60 pages (₹21,000)."
    ],
    features: ['AI Detection', '24h Delivery', 'Strict Privacy'],
    icon: Search,
    link: '/services/plagiarism-express',
    color: 'from-red-500/20'
  }

];