export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    description: "Build user interfaces"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    description: "Build APIs"
  },
  {
    id: 3,
    title: "UI Designer",
    company: "Creative Hub",
    location: "Lagos",
    salary: "₦250,000",
    description: "Design interfaces"
  },
  {
    id: 4,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Abuja",
    salary: "₦450,000",
    description: "Build mobile apps"
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Insight Tech",
    location: "Port Harcourt",
    salary: "₦350,000",
    description: "Analyze data"
  },
  {
    id: 6,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Remote",
    salary: "₦500,000",
    description: "Secure systems"
  },
  {
    id: 7,
    title: "Product Manager",
    company: "VisionSoft",
    location: "Ibadan",
    salary: "₦420,000",
    description: "Manage products"
  },
  {
    id: 8,
    title: "Cloud Engineer",
    company: "SkyTech",
    location: "Remote",
    salary: "₦550,000",
    description: "Cloud systems"
  },
  {
    id: 9,
    title: "QA Tester",
    company: "Quality First",
    location: "Owerri",
    salary: "₦280,000",
    description: "Test applications"
  },
  {
    id: 10,
    title: "Support Specialist",
    company: "HelpDesk Pro",
    location: "Asaba",
    salary: "₦220,000",
    description: "Help users"
  }
];