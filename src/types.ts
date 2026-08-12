export interface HonorAward {
  id: string;
  title: string;
  awardLevel?: string; // e.g. 'Winner'
  date: string; // e.g. '30 March 2021 - 31 March 2021'
  iconType?: 'briefcase' | 'flag' | 'trophy' | 'award';
  link?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headerBrand: string;
  institution: string;
  residenceHall?: string;
  location: string;
  expectedGraduation: string;
  currentGpa: string;
  gpaScale: string;
  statusPill: string;
  academicEmail: string;
  personalEmail: string;
  github: string;
  linkedin: string;
  gpaCalcGithub?: string;
  labelGenGithub?: string;
  about: string;
  medicalCompetencies: {
    name: string;
    level: string;
    desc: string;
  }[];
}

export interface AcademicQualification {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  achievement?: string;
  icon?: string;
  isCurrent?: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  score?: string;
  flag: string;
  percentage: number;
}

export interface SoftwareTool {
  name: string;
  category: string;
  level: number; // 1-100
  iconName: string;
}

export interface ProjectUtility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
  badge: string;
  actionKey: 'gpa-calc' | 'label-gen';
}

export interface BauCourse {
  id: string;
  code: string;
  name: string;
  credits: number;
  grade: string; // e.g., 'A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'D', 'F'
  marks?: number;
}

export interface BauNotebookData {
  studentName: string;
  studentRoll: string;
  regNo: string;
  session: string;
  faculty: string;
  department: string;
  courseTitle: string;
  courseCode: string;
  teacherName: string;
  teacherDesignation: string;
  submissionDate: string;
  themeColor: string;
}

export interface ClinicalFlashcard {
  id: string;
  category: string;
  question: string;
  answer: string;
  clinicalNote: string;
  difficulty: 'Basic' | 'Intermediate' | 'Clinical';
}
