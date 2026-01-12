export const PERSONAL_INFO = [
  {label: 'name_key', value: 'name_value', icon: '👤'},
  {label: 'date_of_birth', value: '30/11/2002', icon: '🎂'},
  {label: 'email', value: 'nguyenminhluong.work@gmail.com', icon: '📧'},
  {label: 'phone_number_key', value: '0345571823', icon: '📱'},
  {label: 'address_key', value: 'address_value', icon: '📍'},
  {label: 'education_level_key', value: 'education_level_value', icon: '🎓'},
  {label: 'english_key', value: 'english_value', icon: '🌐'},
  {label: 'linkedin', value: 'www.linkedin.com/in/nguyen-minh-luong', icon: '🔗'},
]

export const EXPERIENCE = [
  {
    period: 'ex_period3',
    company: 'ex_company3',
    role: 'ex_role3',
    description: 'ex_description3',
    iconSvg: './assets/icons/baoviet.svg',
  },
  {
    period: 'ex_period2',
    company: 'ex_company2',
    role: 'ex_role2',
    description: 'ex_description2',
    iconSvg: './assets/icons/viettel.svg',
  },
  {
    period: 'ex_period1',
    company: 'ex_company1',
    role: 'ex_role1',
    description: 'ex_description1',
    icon: '🎓',
  }
];

const BACKEND_SKILLS: string[] = [
  'Java', 'Spring Boot', 'Hibernate', 'Spring Data JPA', 'RESTful API', 'Soap API', 'OracleSQL'
];

const FRONTEND_SKILLS: string[] = [
  'Javascript', 'TypeScript', 'Angular', 'Micro Frontend', 'HTML', 'CSS', "SCSS"
];

const OTHER_SKILLS: string[] = [
  'Redis', 'Kafka', 'Docker', 'Kubernetes', 'Microservices Architecture', 'Linux', 'Git', 'Maven', 'Jenkins', 'CI/CD'
];

export const SKILLS = [
  {
    TITLE: 'backend_skills_title',
    SKIllS: BACKEND_SKILLS
  },
  {
    TITLE: 'frontend_skills_title',
    SKIllS: FRONTEND_SKILLS
  },
  {
    TITLE: 'other_skills_title',
    SKIllS: OTHER_SKILLS
  }
]

export const PROJECTS = [
  {
    // CSDL Đất đai Quốc gia
    name: 'project_name_1',
    category: 'Backend Engineer',
    overview: 'project_overview_1',
    description: 'project_description_1',
    imageUrl: './assets/images/project1.png',
    projectUrl: '/co-so-du-lieu-dat-dai-quoc-gia',
    skills: ['Java', 'Spring Boot', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'Microservices', 'OracleSQL'],
    caseStudies: [
      {
        issue: 'pr1_issue_1',
        solution: 'pr1_solution_1',
        benefit: 'pr1_benefit_1'
      },
      {
        issue: 'pr1_issue_2',
        solution: 'pr1_solution_2',
        benefit: 'pr1_benefit_2'
      },
      {
        issue: 'pr1_issue_3',
        solution: 'pr1_solution_3',
        benefit: 'pr1_benefit_3'
      }
    ],
    featured: true
  },
  {
    // CSDL Dầu khí Quốc gia
    name: 'project_name_2',
    category: 'Fullstack Engineer',
    overview: 'project_overview_2',
    description: 'project_description_2',
    imageUrl: './assets/images/project2.jpg',
    projectUrl: '/co-so-du-lieu-dau-khi-quoc-gia',
    skills: ['TypeScript', 'Angular', 'Java', 'Spring Boot', 'HTML', 'CSS', 'SCSS', 'Microservices', 'Micro Frontend',
      'OracleSQL'],
    caseStudies: [
      {
        issue: 'pr2_issue_1',
        solution: 'pr2_solution_1',
        benefit: 'pr2_benefit_1'
      }
    ]
  },
  {
    // Hệ thống Core Banking
    name: 'project_name_3',
    category: 'Backend Engineer',
    overview: 'project_overview_3',
    description: 'project_description_3',
    imageUrl: './assets/images/project3.png',
    projectUrl: '/core-banking-system',
    skills: ['Java Core', 'Soap API', 'OracleSQL', 'Java Web Services'],
    caseStudies: [
      {
        issue: 'pr3_issue_1',
        solution: 'pr3_solution_1',
        benefit: 'pr3_benefit_1'
      }
    ]
  }
]

export const LANG_KEY: string = "language";
