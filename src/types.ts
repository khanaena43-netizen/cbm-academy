export type NavigationTab = 
  | 'home'
  | 'course'
  | 'about'
  | 'certificate'
  | 'jobs'
  | 'blogs'
  | 'contact';

export interface CourseModule {
  id: string;
  iconName: string;
  title: string;
  shortDescription: string;
  duration: string;
  level: string;
  detailedTopics: string[];
  toolsCovered: string[];
  careerOutcome: string;
}

export interface AITool {
  id: string;
  name: string;
  category: string;
  iconSvg?: string;
  badge?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  companyName: string;
  location: string;
  salary: string;
  jobType: string;
  experienceLevel: string;
  skillsRequired: string[];
  description: string;
}

export interface VerifiedCertificate {
  certificateId: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  completionDate: string;
  grade: string;
  status: 'valid' | 'invalid';
  specialization: string;
}

export interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
}

export interface ApplyFormData {
  fullName: string;
  email: string;
  phone: string;
  qualification: string;
  preferredBatch: string;
  message?: string;
  courseInterest?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
