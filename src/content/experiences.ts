export interface Experience {
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
  tags?: string[]
}

const experiences: Experience[] = [
  {
    company: "GT Bank",
    position: "Software Engineer Intern",
    description: 
    "Developed internal web-based tools and automation scripts using Java and Python to improve workflow efficiency, and automated data processing and reporting tasks with Python, reducing reporting time by 25%.",
    startDate: "Jun 2024",
    endDate: "Sep 2024",
    tags: ["Java", "Python", "Spring Boot"]
  },
    
]

export default experiences;
