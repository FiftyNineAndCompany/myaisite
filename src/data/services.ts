import { Users, Cpu, Building, FileCheck, Network, Search } from 'lucide-react';

export const TECH_SERVICES = [
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    subtitle: 'Strategic Engineering Talent',
    description: 'We provide specialized engineering professionals to bridge your skill gaps.',
    features: ['Third-party Payroll', 'Technical Screening', 'Quick Deployment'],
    icon: Users,
    color: 'from-blue-500/20'
  },
  {
    id: 'testing',
    title: 'Testing Services',
    subtitle: 'Quality Assurance & Protocols',
    description: 'Comprehensive testing for UI/UX, SaaS, IoT, and Network Protocols.',
    features: ['End to end manual and automation Testing'],
    icon: FileCheck,
    color: 'from-cyan-500/20'
  },
  {
    id: 'dev',
    title: 'IT & AI Development',
    subtitle: 'Next-Gen Engineering',
    description: 'Electronics, IoT, and AI-powered software development for industry and academia.',
    features: ['IoT Ecosystems', 'AI Integration', 'Web Architecture'],
    icon: Cpu,
    color: 'from-purple-500/20'
  }
];

export const UTILITY_SERVICES = [
  {
    id: 'bpo',
    title: 'BPO Services',
    subtitle: 'Operational Excellence',
    description: 'Managing inbound and outbound projects with high-efficiency consultancy.',
    features: ['Process Optimization', '24/7 Support', 'Scalable Teams'],
    icon: Network,
    color: 'from-emerald-500/20'
  },
  /*{
    id: 'real-estate',
    title: 'Smart Property Engineer',
    subtitle: 'Smart Property Solutions',
    description: 'Direct Marketplace for PGs, 1/2 BHKs, and Bungalows via our direct ecosystem.',
    features: ['Verified Listings', 'Direct Connect', 'Visit Assistance'],
    icon: Building,
    link: '/real-estate',
    color: 'from-orange-500/20'
  },*/
  {
    id: 'plagiarism',
    title: 'Plagiarism Express',
    subtitle: 'Academic Integrity',
    description: 'High-speed Turnitin reports for thesis, research papers, and articles.',
    features: ['AI Detection', '24h Delivery', 'Strict Privacy'],
    icon: Search,
    link: '/plagiarism',
    color: 'from-red-500/20'
  }
];