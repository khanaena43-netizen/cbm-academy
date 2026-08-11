import { CourseModule, AITool, JobOpening, VerifiedCertificate, BlogPost } from '../types';
import heroImgPath from '../assets/images/cbm_students_hero_1786361853853.jpg';
import aboutImgPath from '../assets/images/cbm_about_academy_1786361869901.jpg';

export const CBM_IMAGES = {
  hero: heroImgPath,
  about: aboutImgPath,
  blog1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  blog2: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  blog3: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
};

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'module-1',
    iconName: 'Search',
    title: 'AI-Powered Search Engine Optimization (SEO)',
    shortDescription: 'Master technical SEO, keyword research with generative AI tools, on-page optimization, and high-authority link building.',
    duration: '4 Weeks',
    level: 'Beginner to Advanced',
    detailedTopics: [
      'Generative AI Keyword Research & Intent Mapping',
      'Technical SEO Audits & Core Web Vitals Optimization',
      'On-Page & Schema Markup Implementation',
      'AI-Driven Content Strategy & Optimization',
      'Link Building Strategies & Authority Metrics'
    ],
    toolsCovered: ['Semrush', 'Ahrefs', 'ChatGPT Plus', 'Google Search Console', 'Screaming Frog'],
    careerOutcome: 'SEO Specialist, Organic Growth Lead, Technical SEO Consultant'
  },
  {
    id: 'module-2',
    iconName: 'Target',
    title: 'Performance Marketing & Meta / Google Ads',
    shortDescription: 'Build high-converting paid search and social campaigns using AI bidding strategies, audience segmentation, and creative optimization.',
    duration: '5 Weeks',
    level: 'Intermediate',
    detailedTopics: [
      'Google Ads Search, Display, and Performance Max Campaigns',
      'Meta Paid Ads (Facebook & Instagram) Campaign Structure',
      'Smart Bidding & AI Audience Targeting Algorithms',
      'A/B Creative Testing & Ad Copy Generation',
      'ROAS Optimization & Budget Allocation'
    ],
    toolsCovered: ['Google Ads', 'Meta Ads Manager', 'Midjourney', 'Google Tag Manager', 'AdEspresso'],
    careerOutcome: 'PPC Executive, Performance Marketing Manager, Media Buyer'
  },
  {
    id: 'module-3',
    iconName: 'Share2',
    title: 'Social Media Strategy & Content Creation',
    shortDescription: 'Develop viral social media strategies, short-form video plans, brand storytelling, and community engagement workflows.',
    duration: '3 Weeks',
    level: 'Beginner',
    detailedTopics: [
      'Multi-Platform Content Calendar & Funnel Strategy',
      'Short-Form Video Scripting & Visual Storytelling',
      'AI Graphic Design & Creative Asset Production',
      'Influencer Marketing & Strategic Partnerships',
      'Brand Engagement & Crisis Management'
    ],
    toolsCovered: ['Canva AI', 'CapCut', 'Buffer', 'Hootsuite', 'ChatGPT'],
    careerOutcome: 'Social Media Specialist, Content Creator, Community Lead'
  },
  {
    id: 'module-4',
    iconName: 'Mail',
    title: 'Marketing Automation & Email Campaigns',
    shortDescription: 'Set up automated drip campaigns, lead scoring, customer lifecycle sequences, and CRM integrations.',
    duration: '3 Weeks',
    level: 'Intermediate',
    detailedTopics: [
      'Drip Campaign Architecture & Automation Triggers',
      'Lead Nurturing & Dynamic Personalization',
      'Email Deliverability & Spam Mitigation',
      'CRM Pipeline Setup & Customer Lifetime Value (LTV)',
      'A/B Testing Subject Lines & Call to Actions'
    ],
    toolsCovered: ['HubSpot CRM', 'Mailchimp', 'Klaviyo', 'Zapier', 'ActiveCampaign'],
    careerOutcome: 'CRM Specialist, Marketing Automation Lead, Email Marketer'
  },
  {
    id: 'module-5',
    iconName: 'BarChart3',
    title: 'Web Analytics & Data-Driven Insights',
    shortDescription: 'Track user behavior, set up conversions in GA4, build executive dashboards, and derive actionable ROI insights.',
    duration: '3 Weeks',
    level: 'Intermediate',
    detailedTopics: [
      'Google Analytics 4 (GA4) Custom Event & Conversion Tracking',
      'User Journey Funnel Analysis & Friction Mapping',
      'Looker Studio Custom Dashboard Creation',
      'Attribution Modeling & Channel Performance Evaluation',
      'Data-Driven Decision Making & Executive Reporting'
    ],
    toolsCovered: ['Google Analytics 4', 'Looker Studio', 'Hotjar', 'Microsoft Clarity'],
    careerOutcome: 'Digital Marketing Analyst, Growth Lead, Business Intelligence Analyst'
  },
  {
    id: 'module-6',
    iconName: 'Cpu',
    title: 'AI Content & Marketing Tools Mastery',
    shortDescription: 'Accelerate content creation, copy generation, image prompts, and workflow automation with cutting-edge AI technologies.',
    duration: '2 Weeks',
    level: 'All Levels',
    detailedTopics: [
      'Advanced Prompt Engineering for Marketers',
      'AI Ad Copy, Blog, & Landing Page Generation',
      'AI Image & Asset Creation for Campaigns',
      'AI Speech & Video Synthesizers',
      'Building Custom Marketing AI Agents'
    ],
    toolsCovered: ['ChatGPT 4o', 'Claude 3.5', 'Gemini Advanced', 'Midjourney', 'Jasper', 'ElevenLabs'],
    careerOutcome: 'AI Marketing Strategist, Digital Growth Specialist, Freelance Consultant'
  }
];

export const AI_TOOLS: AITool[] = [
  { id: 'tool-1', name: 'ChatGPT', category: 'Conversational AI & Copy' },
  { id: 'tool-2', name: 'Claude', category: 'Deep Writing & Reasoning' },
  { id: 'tool-3', name: 'Google Gemini', category: 'Multimodal Research' },
  { id: 'tool-4', name: 'Midjourney', category: 'AI Image Generation' },
  { id: 'tool-5', name: 'Canva AI', category: 'Graphic Design Suite' },
  { id: 'tool-6', name: 'Semrush AI', category: 'SEO & Keyword Intelligence' },
  { id: 'tool-7', name: 'HubSpot AI', category: 'CRM & Inbound Marketing' },
  { id: 'tool-8', name: 'GA4 AI', category: 'Predictive Analytics' },
  { id: 'tool-9', name: 'Meta Advantage+', category: 'Automated Paid Ads' },
  { id: 'tool-10', name: 'ElevenLabs', category: 'AI Voice & Audio' },
  { id: 'tool-11', name: 'Copy.ai', category: 'Ad Copy Automation' },
  { id: 'tool-12', name: 'Jasper AI', category: 'Enterprise Content Creation' }
];

export const JOB_OPPORTUNITIES: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Digital Marketing Specialist',
    companyName: 'Apex Growth Marketing Solutions',
    location: 'Bangalore, India (Hybrid)',
    salary: '₹6,50,000 - ₹9,00,000 / year',
    jobType: 'Full-Time',
    experienceLevel: '0 - 2 Years',
    skillsRequired: ['SEO', 'Google Ads', 'Meta Ads', 'GA4', 'AI Prompting'],
    description: 'Lead multi-channel digital campaigns, optimize paid media search ads, and track ROI analytics for global client accounts.'
  },
  {
    id: 'job-2',
    title: 'Performance Marketing Executive',
    companyName: 'Nexus E-Commerce Brands',
    location: 'Mumbai, India (In-office)',
    salary: '₹7,00,000 - ₹10,50,000 / year',
    jobType: 'Full-Time',
    experienceLevel: '1 - 3 Years',
    skillsRequired: ['Meta Ads Manager', 'Google Performance Max', 'ROAS Analysis', 'A/B Testing'],
    description: 'Manage 7-figure ad spends across Meta and Google, focusing on scale, user acquisition, and retention metrics.'
  },
  {
    id: 'job-3',
    title: 'SEO & Content Growth Manager',
    companyName: 'TechScale Global',
    location: 'Remote / New Delhi',
    salary: '₹8,00,000 - ₹12,00,000 / year',
    jobType: 'Full-Time',
    experienceLevel: '2 - 4 Years',
    skillsRequired: ['Technical SEO', 'Keyword Research', 'Ahrefs', 'Semrush', 'AI Content Optimization'],
    description: 'Drive organic search traffic growth by building SEO strategy, auditing web infrastructure, and directing content teams.'
  },
  {
    id: 'job-4',
    title: 'Social Media & Brand Strategist',
    companyName: 'Vibe Creative Agency',
    location: 'Hyderabad, India (Hybrid)',
    salary: '₹5,50,000 - ₹8,00,000 / year',
    jobType: 'Full-Time',
    experienceLevel: '0 - 2 Years',
    skillsRequired: ['Content Calendar', 'CapCut', 'Canva AI', 'Community Engagement', 'Copywriting'],
    description: 'Create engaging short-form video concepts, manage brand community interaction, and run organic social growth campaigns.'
  },
  {
    id: 'job-5',
    title: 'Marketing Automation Lead',
    companyName: 'SaaSify Enterprise Systems',
    location: 'Pune, India (Remote)',
    salary: '₹9,50,000 - ₹14,00,000 / year',
    jobType: 'Full-Time',
    experienceLevel: '2 - 5 Years',
    skillsRequired: ['HubSpot CRM', 'Zapier', 'Email Funnels', 'Lead Scoring', 'Customer Lifecycle'],
    description: 'Design automated customer journeys, lead scoring matrices, and integrate marketing tech stack with corporate sales CRMs.'
  }
];

export const SAMPLE_CERTIFICATES: VerifiedCertificate[] = [
  {
    certificateId: 'CBM-2024-8921',
    studentName: 'Aarav Sharma',
    courseName: 'Executive AI-Powered Digital Marketing Masterclass',
    issueDate: 'December 15, 2024',
    completionDate: 'December 10, 2024',
    grade: 'Distinction (96%)',
    status: 'valid',
    specialization: 'Performance Marketing & SEO'
  },
  {
    certificateId: 'CBM-2025-1104',
    studentName: 'Priya Mukherjee',
    courseName: 'Advanced Digital Growth & Analytics Certification',
    issueDate: 'January 28, 2025',
    completionDate: 'January 20, 2025',
    grade: 'Excellence (94%)',
    status: 'valid',
    specialization: 'GA4 Analytics & Marketing Automation'
  },
  {
    certificateId: 'CBM-2026-3390',
    studentName: 'Rohan Verma',
    courseName: 'AI Marketing & Social Media Strategy Program',
    issueDate: 'February 05, 2026',
    completionDate: 'February 01, 2026',
    grade: 'Distinction (98%)',
    status: 'valid',
    specialization: 'AI Content Production & Campaign Strategy'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How Generative AI is Transforming Digital Marketing in 2026',
    shortDescription: 'Discover how top marketers leverage ChatGPT-4o, Claude, and Midjourney to cut production time by 60% while boosting ad conversions.',
    content: `Digital marketing has undergone its most significant evolution since the advent of social media. The integration of Generative AI into daily marketing workflows is no longer optional—it is a core industry requirement.

Key Transformations in 2026:
1. Hyper-Personalized Campaign Generation: Rather than creating single generic landing pages, AI tools allow marketers to dynamically tailor ad messaging to hyper-specific user personas.
2. Predictive Search Engine Optimization: Technical SEO now incorporates intent mapping where AI predicts searcher queries before volume spikes occur.
3. Automated Media Buying & Bidding: Modern platforms like Google Performance Max and Meta Advantage+ utilize machine learning to allocate budgets to top-performing creatives in real time.

At CBM Academy, our curriculum integrates these hands-on AI workflows into every module so our students graduate as future-proof digital marketing leaders.`,
    author: 'Dr. Vikrant Kapoor',
    authorRole: 'Head of Digital Strategy, CBM Academy',
    publishDate: 'February 02, 2026',
    readTime: '5 min read',
    category: 'AI & Trends',
    image: CBM_IMAGES.blog1
  },
  {
    id: 'blog-2',
    title: 'Top 7 Skills Every Performance Marketer Must Master',
    shortDescription: 'A practical breakdown of essential metrics, media buying techniques, and conversion rate optimization (CRO) strategies for high-ROI campaigns.',
    content: `Performance marketing requires a balanced blend of data analytical rigor and creative experimentation. Whether managing a budget of ₹50,000 or ₹50,00,000, high-performing marketers rely on core fundamentals:

1. Deep Understanding of Unit Economics (CAC, LTV, ROAS)
2. Strategic A/B Split Testing Protocols
3. Technical Tagging & Conversion API Setups
4. AI-Enhanced Visual Ad Creative Iteration
5. Retargeting Funnel Design

By focusing on real business outcomes rather than vanity metrics, performance executives ensure every ad dollar spent delivers quantifiable return.`,
    author: 'Ananya Deshmukh',
    authorRole: 'Senior Performance Coach',
    publishDate: 'January 20, 2026',
    readTime: '6 min read',
    category: 'Performance Marketing',
    image: CBM_IMAGES.blog2
  },
  {
    id: 'blog-3',
    title: 'A Step-by-Step Guide to Transitioning into a Digital Marketing Career',
    shortDescription: 'Learn how non-tech professionals and recent graduates can successfully switch to digital marketing with hands-on portfolio projects.',
    content: `Switching careers can feel daunting, but digital marketing is one of the most accessible and merit-driven industries today. Employers prioritize verified practical experience and portfolio results over theoretical degrees.

Four Action Steps to Get Hired:
Step 1: Build a Live Practice Website or Blog to test real SEO and Google Analytics setups.
Step 2: Run Micro Budget Ad Campaigns to gain direct experience inside Meta Ads Manager.
Step 3: Document Case Studies demonstrating how your campaigns generated real clicks, leads, or sales.
Step 4: Obtain Industry-Recognized Certifications such as CBM Academy's AI-Powered Marketing Credential.

With structured mentorship and live project exposure, career switchers can secure job offers within 3 to 6 months.`,
    author: 'Rajesh Nair',
    authorRole: 'Career Director & Placement Lead',
    publishDate: 'January 12, 2026',
    readTime: '4 min read',
    category: 'Career Growth',
    image: CBM_IMAGES.blog3
  }
];

export const WHY_CHOOSE_CBM = [
  {
    id: 'why-1',
    iconName: 'UserCheck',
    title: 'Experienced Trainers',
    description: 'Learn directly from industry experts who have managed multi-million dollar marketing budgets and global brand campaigns.'
  },
  {
    id: 'why-2',
    iconName: 'Laptop',
    title: 'Practical Learning',
    description: 'Get hands-on experience running live campaigns, setting up tracking, and using advanced AI tools in real-time workshops.'
  },
  {
    id: 'why-3',
    iconName: 'Briefcase',
    title: 'Industry Projects',
    description: 'Work on live client briefs and build a professional portfolio that demonstrates proven growth results to top hiring managers.'
  },
  {
    id: 'why-4',
    iconName: 'Award',
    title: 'Placement Support',
    description: 'Benefit from 100% placement assistance, resume building, mock interviews, and direct referrals to top hiring partners.'
  }
];

export const STATS = [
  { label: 'Students Trained', value: '12,500+' },
  { label: 'Hiring Partners', value: '350+' },
  { label: 'Highest Salary Offered', value: '₹18 LPA' },
  { label: 'Placement Success Rate', value: '94%' }
];
