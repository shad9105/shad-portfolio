import { ProfileData, AcademicQualification, WorkExperience, LanguageSkill, SoftwareTool, ProjectUtility, HonorAward, ClinicalFlashcard } from '../types';

export const PROFILE_DATA: ProfileData = {
  name: 'Shad Bin Ibne Kamal',
  title: 'Doctor of Veterinary Medicine (D.V.M.) Candidate',
  headerBrand: 'SHAD. DVM',
  institution: 'Bangladesh Agricultural University (BAU), Mymensingh',
  residenceHall: 'Shaheed Shamsul Haque Hall',
  location: 'Mymensingh, Bangladesh',
  expectedGraduation: 'August 2030',
  currentGpa: '3.484',
  gpaScale: '4.00',
  statusPill: '🩺 D.V.M. Student | Focused on Animal Health & Academic Excellence',
  academicEmail: 'shad.2501009@bau.edu.bd',
  personalEmail: 'shadbin120@gmail.com',
  github: 'https://github.com/shad9105',
  linkedin: 'https://www.linkedin.com/in/shad22',
  gpaCalcGithub: 'https://github.com/shad9105/bau-gpa-calculator',
  labelGenGithub: 'https://github.com/shad9105/bau-notebook-label-generator',
  about: 'Driven Doctor of Veterinary Medicine (D.V.M.) student at Bangladesh Agricultural University (BAU), Mymensingh (Resident of Shaheed Shamsul Haque Hall). Dedicated to veterinary science, comparative animal health, and biological education. Experienced script evaluator and Q&A teacher at UDVASH-উদ্ভাস, with a strong commitment to academic rigor, student mentorship, and digital productivity tools.',
  medicalCompetencies: [
    { name: 'Veterinary Science', level: 'Core Discipline', desc: 'Comprehensive study of animal health, anatomy, and biological sciences.' },
    { name: 'Academic Evaluation', level: 'Professional', desc: 'Evaluating high-stakes model tests and board standard answer scripts with precision.' },
    { name: 'Science Q&A & Mentorship', level: 'Teaching Expert', desc: 'Resolving complex biological concepts and mentoring board/admission students.' },
    { name: 'Animal Health & Physiology', level: 'Academic Focus', desc: 'Study of avian, bovine, and small animal physiological systems.' }
  ]
};

export const HONORS_AWARDS: HonorAward[] = [
  {
    id: 'math-olympiad-2021',
    title: 'Regional Winner at Bangladesh Mathematical Olympiad, 2021',
    awardLevel: 'Winner',
    date: '',
    iconType: 'briefcase',
    link: 'https://matholympiad.org.bd'
  },
  {
    id: 'bdjso-2020',
    title: 'Regional winner at Bangladesh Junior Science Olympiad,2020',
    awardLevel: 'Winner',
    date: '',
    iconType: 'flag',
    link: 'https://bdjso.org'
  },
  {
    id: 'nhspc-2020',
    title: 'Regional Winner at National High School Programing Contest,2020',
    awardLevel: 'Regional Winner',
    date: '',
    iconType: 'flag',
    link: 'https://nhspc.net'
  }
];

export const ACADEMIC_QUALIFICATIONS: AcademicQualification[] = [
  {
    id: 'bau-dvm',
    institution: 'Bangladesh Agricultural University (BAU)',
    degree: 'Doctor of Veterinary Medicine (D.V.M.)',
    period: 'Aug 2025 – Aug 2030 (Expected)',
    gpa: '3.484 / 4.00',
    achievement: 'Faculty of Veterinary Science | Resident of Shaheed Shamsul Haque Hall',
    icon: 'GraduationCap',
    isCurrent: true
  },
  {
    id: 'hsc-nazrul',
    institution: 'Shahid Syed Nazrul Islam College',
    degree: 'Higher Secondary Certificate (HSC) - Science',
    period: '2023 – 2024',
    gpa: '5.00 / 5.00',
    achievement: 'Board Scholarship Winner (HSC, JSC & PSC Scholarships)',
    icon: 'Award',
    isCurrent: false
  },
  {
    id: 'ssc-jamalpur',
    institution: 'Jamalpur Zilla School',
    degree: 'Secondary School Certificate (SSC) - Science',
    period: '2017 – 2022',
    gpa: '5.00 / 5.00',
    achievement: 'Science Group | GPA 5.00 / 5.00',
    icon: 'School',
    isCurrent: false
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'exp-evaluator',
    role: 'Script Evaluator',
    company: 'UDVASH-উদ্ভাস Academic & Admission Care',
    location: 'Mymensingh Branch',
    period: 'May 2025 – Present',
    description: 'Evaluating high-stakes HSC board standard and university admission model test answer scripts in Biology and Natural Sciences. Providing meticulous scoring feedback, identifying student error patterns, and ensuring rigorous evaluation standards.',
    tags: ['Biology Evaluation', 'Academic Assessment', 'Model Test Grading', 'Error Diagnostics']
  },
  {
    id: 'exp-qa-teacher',
    role: 'Q & A Teacher',
    company: 'UDVASH-উদ্ভাস Academic & Admission Care',
    location: 'Dhaka / Remote',
    period: 'Oct 2025 – Mar 2026',
    description: 'Providing real-time biological and scientific solutions to student inquiries on the UDVASH Q&A platform. Demystifying complex anatomical, physiological, and chemical questions for thousands of HSC and admission candidates.',
    tags: ['Science Q&A', 'Biological Explanation', 'Student Mentorship', 'Academic Guidance']
  }
];

export const LANGUAGE_SKILLS: LanguageSkill[] = [
  {
    name: 'Bengali',
    level: 'Native Language',
    flag: '🇧🇩',
    percentage: 100
  },
  {
    name: 'English',
    level: 'Advanced Professional',
    score: 'Duolingo Score: 129',
    flag: '🇬🇧',
    percentage: 86
  },
  {
    name: 'Spanish',
    level: 'Elementary',
    score: 'Duolingo Score: 14',
    flag: '🇪🇸',
    percentage: 25
  }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: 'Microsoft Excel', category: 'Data Analysis & Calculations', level: 90, iconName: 'FileSpreadsheet' },
  { name: 'Microsoft Office & Docs', category: 'Academic Documentation', level: 92, iconName: 'FileText' },
  { name: 'PowerPoint & Presentations', category: 'Clinical & Academic Slides', level: 88, iconName: 'Presentation' },
  { name: 'Photography & Editing', category: 'Macro & Clinical Imaging', level: 85, iconName: 'Camera' }
];

export const PROJECTS_UTILITIES: ProjectUtility[] = [
  {
    id: 'proj-gpa-calc',
    title: 'BAU GPA & Mark Calculator',
    subtitle: 'Tailored for BAU Veterinary & Agricultural Credit Grading',
    description: 'Interactive grade forecasting tool customized for Bangladesh Agricultural University credit distribution. Calculate term GPAs, mark percentages, and forecast required target scores for future semesters.',
    tags: ['Interactive Tool', 'BAU Grading System', 'GPA Forecasting', 'Credit Calculations'],
    icon: 'Calculator',
    badge: 'Live Student Utility',
    actionKey: 'gpa-calc'
  },
  {
    id: 'proj-label-gen',
    title: 'BAU Practical Notebook Label Generator',
    subtitle: 'Automated Cover & Practical Notebook Label Printing',
    description: 'Instant generator for official BAU practical notebook cover pages and laboratory labels. Features official layout styling, custom teacher/student detail inputs, department selection, and printable/downloadable cards.',
    tags: ['Automated Design', 'Print Ready', 'BAU Layout', 'Lab Documentation'],
    icon: 'FileBadge',
    badge: 'Live Student Utility',
    actionKey: 'label-gen'
  }
];

export const BAU_PRESET_SUBJECTS = [
  { code: 'VAN-101', name: 'Veterinary Anatomy I (General & Osteology)', credit: 3, dept: 'Anatomy & Histology' },
  { code: 'VAN-102', name: 'Veterinary Anatomy II (Splanchnology)', credit: 3, dept: 'Anatomy & Histology' },
  { code: 'VPH-101', name: 'Veterinary Physiology I (Blood & Circulation)', credit: 3, dept: 'Physiology' },
  { code: 'VBC-101', name: 'General Biochemistry', credit: 2, dept: 'Biochemistry & Molecular Biology' },
  { code: 'ANH-101', name: 'Animal Health & Feeds', credit: 2, dept: 'Animal Nutrition' },
  { code: 'VMC-201', name: 'General Microbiology & Immunology', credit: 3, dept: 'Microbiology & Hygiene' },
  { code: 'VPT-202', name: 'General Veterinary Pathology', credit: 3, dept: 'Pathology' },
  { code: 'VPB-201', name: 'Veterinary Parasitology I', credit: 3, dept: 'Parasitology' },
];

export const CLINICAL_FLASHCARDS: ClinicalFlashcard[] = [
  {
    id: 'fc-1',
    category: 'Ruminant Anatomy',
    question: 'What are the four compartments of the ruminant stomach, and which is the "true stomach"?',
    answer: 'Rumen, Reticulum, Omasum, and Abomasum. The ABOMASUM is the true glandular stomach that secretes digestive enzymes.',
    clinicalNote: 'Essential for diagnosing bloat (tympanitis) and abomasal displacement in cattle.',
    difficulty: 'Basic'
  },
  {
    id: 'fc-2',
    category: 'Veterinary Hematology',
    question: 'What is the characteristic morphological feature of avian red blood cells compared to mammalian RBCs?',
    answer: 'Avian erythrocytes are nucleated (oval-shaped with a distinct central nucleus), whereas mature mammalian erythrocytes are non-nucleated.',
    clinicalNote: 'Crucial distinction when evaluating blood smears in avian and poultry pathology.',
    difficulty: 'Intermediate'
  },
  {
    id: 'fc-3',
    category: 'Clinical Diagnostics',
    question: 'Where is the anatomical triangle for bovine cardiac auscultation located?',
    answer: 'Left thoracic wall, between the 3rd and 5th intercostal spaces, deep to the triceps muscle mass.',
    clinicalNote: 'Used to check cardiac heart sounds, murmurs, and pericardial effusion in ruminants.',
    difficulty: 'Clinical'
  },
  {
    id: 'fc-4',
    category: 'Avian Pathology',
    question: 'Which viral disease causes facial edema, green diarrhea, and respiratory distress in domestic poultry?',
    answer: 'Newcastle Disease (Velogenic NDV) or Avian Influenza (HPAI). Prompt diagnostic isolation is vital.',
    clinicalNote: 'High mortality viral pathogen requiring biosecurity and strict farm quarantine.',
    difficulty: 'Clinical'
  }
];

export const SAMPLE_PHOTOGRAPHY = [
  {
    id: 'photo-1',
    title: 'BAU Botanical & Veterinary Campus',
    category: 'Campus Life',
    description: 'Serene greenery and historic administrative arcades at Bangladesh Agricultural University, Mymensingh.',
    placeholderBg: 'from-emerald-900 to-teal-950',
    icon: 'Trees'
  },
  {
    id: 'photo-2',
    title: 'Clinical Laboratory Microscopy',
    category: 'Diagnostics',
    description: 'Macro perspective of anatomical tissue histology slides and microbial staining procedures.',
    placeholderBg: 'from-teal-900 to-emerald-950',
    icon: 'Microscope'
  },
  {
    id: 'photo-3',
    title: 'Livestock Field Observation',
    category: 'Animal Health',
    description: 'Field health survey and physical examination practice at the BAU Veterinary Teaching Hospital.',
    placeholderBg: 'from-emerald-950 to-emerald-900',
    icon: 'Stethoscope'
  }
];
