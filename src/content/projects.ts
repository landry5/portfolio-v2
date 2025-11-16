interface Project {
  title: string
  description: string | string[]
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "Enterprise Patient Management System",
    description: [
      "Scalable patient management system using Java Spring Boot microservices architecture with Docker containerization and PostgreSQL databases",
      "Implemented event driven communication with Apache Kafka, REST/gRPC APIs, Spring Cloud Gateway load balancing, and JWT authentication",
      "Deployed using AWS LocalStack (ECS, RDS, MSK) with automated testing",      
    ],
    tags: ["Java", "Spring Boot", "Docker"],
    liveLink: "",
    devLink: "https://github.com/landry5/pms",
  },
  {
    title: "Secure Student Digital Trading Platform",
    description: [ 

    "Led team of 4 developers using Agile/Scrum methodology to deliver secure student e-commerce marketplace",
    "GDPR compliant security framework with user authentication and admin moderation dashboard",
    "Core e-commerce features including product listings, shopping cart, and responsive UI design",
    ],
    tags: ["Next.js", "React", "MongoDB"],
    liveLink: "https://marketplace.landryn.dev/",
    devLink: "https://github.com/landry5/marketplace",
  },

  {
    title: "Lost and Found Android App",
    description: [
      "Mobile app enabling users to report and recover lost items, supporting real time data synchronization and user authentication through Firebase",
      "Search functionality with location filtering, category sorting, and camera/gallery integration with image compression and Firebase Storage",
      "Material Design UI featuring RecyclerView feeds for scrolling performance, Glide based lazy image loading, and offline first architecture",
    ],
    tags: ["Java", "Firebase", "Android Studio"],
    liveLink: "",
    devLink: "https://github.com/landry5/TROVE",
  }
]

export default projects;
