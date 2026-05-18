import { Users, Cpu, FileCheck, Network, Search } from 'lucide-react';

export const TECH_SERVICES = [
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    subtitle: 'Strategic Engineering Talent',
    description: `Sourcing, vetting, and deploying elite technical and non-technical talent from Tier 2 & 3 cities. We handle end-to-end HR, payroll, and onboarding—delivering world-class professionals perfectly aligned with your budget.`,
    features: ['Third-party Payroll', 'Technical Screening', 'Quick Deployment'],
    icon: Users,
    link: '/services/it-staffing',
    color: 'from-blue-500/20'
  },
  {
    id: 'testing',
    title: 'Testing Services',
    subtitle: 'Quality Assurance & Protocols',
    description: `Uncompromising end-to-end quality assurance. From manual exploratory testing to advanced automation, we validate UI/UX, mobile apps, SaaS platforms, and complex IoT network protocols to ensure absolute product reliability.`,
    features: ['End to end manual and automation Testing'],
    icon: FileCheck,
    link: '/services/software-testing',
    color: 'from-cyan-500/20'
  },
  {
    id: 'dev',
    title: 'IT & AI Development',
    subtitle: 'Next-Gen Engineering',
    description: `Building intelligent, next-generation digital infrastructure. We leverage advanced AI tools to rapidly architect custom software, web platforms, and IoT ecosystems—delivering enterprise-grade solutions at highly optimized costs.`,
    features: ['IoT Ecosystems', 'AI Integration', 'Web Development'],
    icon: Cpu,
    link: '/services/it-ai-development',
    color: 'from-purple-500/20'
  }
];

export const UTILITY_SERVICES = [
  {
    id: 'bpo',
    title: 'BPO Services',
    subtitle: 'Operational Excellence',
    description: `Acting as a seamless extension of your brand. We manage complex inbound support (customer care, IT helpdesk) and proactive outbound campaigns (lead generation, telemarketing) with unmatched empathy and operational efficiency.`,
    features: ['Process Optimization', '24/7 Support', 'Scalable Teams'],
    icon: Network,
    link: '/services/bpo-solutions',
    color: 'from-emerald-500/20'
  },
  {
    id: 'plagiarism',
    title: 'Plagiarism Express',
    subtitle: 'Academic Integrity',
    description: `High-speed, highly accurate Turnitin reports for thesis, research papers, and articles. Ensure total academic integrity with strict privacy protocols and rapid turnaround times.`,
    features: ['AI Detection', '24h Delivery', 'Strict Privacy'],
    icon: Search,
    link: '/services/plagiarism-express',
    color: 'from-red-500/20'
  }
];