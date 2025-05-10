
export interface SkillItem {
  name: string;
  description: string;
  priority: 'core' | 'important' | 'advanced';
}

export interface RoadmapSection {
  title: string;
  items: SkillItem[];
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  sections: RoadmapSection[];
}

export const careerPaths: Record<string, CareerPath> = {
  'frontend': {
    id: 'frontend',
    title: 'Front-End Developer',
    description: 'As a Front-End Developer, you\'ll specialize in creating beautiful, interactive user interfaces. You\'ll work closely with designers to bring visual concepts to life and ensure applications are responsive and accessible across all devices. Your focus will be on delivering exceptional user experiences through clean, efficient code.',
    icon: 'monitor',
    color: 'neon-blue',
    sections: [
      {
        title: 'Core Technologies',
        items: [
          {
            name: 'HTML5',
            description: 'Semantic markup, accessibility, and structure',
            priority: 'core'
          },
          {
            name: 'CSS3',
            description: 'Styling, layouts, animations, and responsive design',
            priority: 'core'
          },
          {
            name: 'JavaScript',
            description: 'DOM manipulation, events, and modern ES6+ features',
            priority: 'core'
          },
          {
            name: 'Responsive Design',
            description: 'Creating interfaces that work across all devices and screen sizes',
            priority: 'core'
          }
        ]
      },
      {
        title: 'Frameworks & Libraries',
        items: [
          {
            name: 'React',
            description: 'Component-based UI development with hooks and state management',
            priority: 'core'
          },
          {
            name: 'CSS Frameworks',
            description: 'Tailwind CSS, Bootstrap, or Material UI',
            priority: 'important'
          },
          {
            name: 'State Management',
            description: 'Redux, Context API, or Zustand',
            priority: 'important'
          },
          {
            name: 'TypeScript',
            description: 'Type-safe JavaScript development',
            priority: 'important'
          }
        ]
      },
      {
        title: 'Design & User Experience',
        items: [
          {
            name: 'UI/UX Principles',
            description: 'Understanding user-centered design and interaction patterns',
            priority: 'important'
          },
          {
            name: 'Design Tools',
            description: 'Figma, Adobe XD, or Sketch',
            priority: 'important'
          },
          {
            name: 'CSS Architecture',
            description: 'BEM, CSS Modules, or Styled Components',
            priority: 'important'
          },
          {
            name: 'Animations',
            description: 'CSS animations, Framer Motion, or GSAP',
            priority: 'advanced'
          }
        ]
      },
      {
        title: 'Testing & Tools',
        items: [
          {
            name: 'Version Control',
            description: 'Git workflows and collaboration',
            priority: 'core'
          },
          {
            name: 'Testing',
            description: 'Jest, React Testing Library, or Cypress',
            priority: 'important'
          },
          {
            name: 'Performance Optimization',
            description: 'Lazy loading, code splitting, and bundle optimization',
            priority: 'advanced'
          },
          {
            name: 'Browser DevTools',
            description: 'Debugging, performance profiling, and network analysis',
            priority: 'core'
          }
        ]
      },
      {
        title: 'Advanced Skills',
        items: [
          {
            name: 'Accessibility (a11y)',
            description: 'Building inclusive interfaces that work for everyone',
            priority: 'important'
          },
          {
            name: 'Progressive Web Apps',
            description: 'Creating installable web applications with offline support',
            priority: 'advanced'
          },
          {
            name: 'Internationalization',
            description: 'Building applications that support multiple languages',
            priority: 'advanced'
          },
          {
            name: 'Web Components',
            description: 'Creating reusable custom elements',
            priority: 'advanced'
          }
        ]
      }
    ]
  },
  'backend': {
    id: 'backend',
    title: 'Back-End Developer',
    description: 'As a Back-End Developer, you\'ll build the core systems that power applications. You\'ll focus on server logic, databases, security, and performance optimization. Your work happens behind the scenes but is critical to creating reliable, scalable applications that can handle user demands.',
    icon: 'database',
    color: 'neon-purple',
    sections: [
      {
        title: 'Core Technologies',
        items: [
          {
            name: 'Server-Side Languages',
            description: 'JavaScript (Node.js), Python, Java, or C#',
            priority: 'core'
          },
          {
            name: 'Databases',
            description: 'SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis)',
            priority: 'core'
          },
          {
            name: 'API Development',
            description: 'RESTful principles, HTTP methods, and status codes',
            priority: 'core'
          },
          {
            name: 'Authentication & Authorization',
            description: 'JWT, OAuth, and security best practices',
            priority: 'core'
          }
        ]
      },
      {
        title: 'Frameworks & Libraries',
        items: [
          {
            name: 'Node.js & Express',
            description: 'Building APIs and server applications with JavaScript',
            priority: 'core'
          },
          {
            name: 'ORM/ODM',
            description: 'Sequelize, TypeORM, or Mongoose',
            priority: 'important'
          },
          {
            name: 'API Documentation',
            description: 'Swagger/OpenAPI for clear API contracts',
            priority: 'important'
          },
          {
            name: 'GraphQL',
            description: 'Schema definition and resolvers',
            priority: 'advanced'
          }
        ]
      },
      {
        title: 'DevOps & Infrastructure',
        items: [
          {
            name: 'Docker',
            description: 'Containerizing applications for consistent environments',
            priority: 'important'
          },
          {
            name: 'CI/CD',
            description: 'Automated testing and deployment pipelines',
            priority: 'important'
          },
          {
            name: 'Monitoring & Logging',
            description: 'Error tracking, performance monitoring, and log management',
            priority: 'important'
          },
          {
            name: 'Cloud Services',
            description: 'AWS, Azure, or Google Cloud Platform',
            priority: 'important'
          }
        ]
      },
      {
        title: 'Database Skills',
        items: [
          {
            name: 'Database Design',
            description: 'Normalization, relationships, and schema optimization',
            priority: 'core'
          },
          {
            name: 'Query Optimization',
            description: 'Performance tuning and indexing strategies',
            priority: 'important'
          },
          {
            name: 'Data Migrations',
            description: 'Managing schema changes safely',
            priority: 'important'
          },
          {
            name: 'Caching Strategies',
            description: 'Redis, in-memory caching, and query result caching',
            priority: 'advanced'
          }
        ]
      },
      {
        title: 'Advanced Skills',
        items: [
          {
            name: 'Security',
            description: 'OWASP security practices, input validation, and protection against common attacks',
            priority: 'important'
          },
          {
            name: 'Microservices',
            description: 'Distributed system design patterns',
            priority: 'advanced'
          },
          {
            name: 'Message Queues',
            description: 'RabbitMQ, Kafka, or SQS for async processing',
            priority: 'advanced'
          },
          {
            name: 'Serverless',
            description: 'Function-as-a-Service and event-driven architectures',
            priority: 'advanced'
          }
        ]
      }
    ]
  },
  'fullstack': {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    description: 'As a Full-Stack Developer, you\'ll work across the entire application, from database to user interface. You\'ll have a broad skillset that lets you build complete features and understand how all parts of a system connect. This versatility allows you to tackle diverse challenges and see projects through from start to finish.',
    icon: 'code',
    color: 'neon-pink',
    sections: [
      {
        title: 'Front-End Skills',
        items: [
          {
            name: 'HTML/CSS/JavaScript',
            description: 'Core web technologies and responsive design',
            priority: 'core'
          },
          {
            name: 'UI Frameworks',
            description: 'React, Angular, or Vue',
            priority: 'core'
          },
          {
            name: 'State Management',
            description: 'Managing application data flow',
            priority: 'important'
          },
          {
            name: 'Modern CSS',
            description: 'Flexbox, Grid, and CSS-in-JS',
            priority: 'important'
          }
        ]
      },
      {
        title: 'Back-End Skills',
        items: [
          {
            name: 'Server-Side Languages',
            description: 'Node.js, Python, or another language',
            priority: 'core'
          },
          {
            name: 'Database Management',
            description: 'SQL and/or NoSQL databases',
            priority: 'core'
          },
          {
            name: 'API Development',
            description: 'RESTful or GraphQL APIs',
            priority: 'core'
          },
          {
            name: 'Authentication',
            description: 'User management and security',
            priority: 'important'
          }
        ]
      },
      {
        title: 'DevOps & Deployment',
        items: [
          {
            name: 'Version Control',
            description: 'Git workflows and collaboration',
            priority: 'core'
          },
          {
            name: 'CI/CD Pipelines',
            description: 'Automated testing and deployment',
            priority: 'important'
          },
          {
            name: 'Containerization',
            description: 'Docker and container orchestration',
            priority: 'important'
          },
          {
            name: 'Cloud Services',
            description: 'AWS, Azure, or Google Cloud Platform',
            priority: 'important'
          }
        ]
      },
      {
        title: 'Architecture & Integration',
        items: [
          {
            name: 'Full-Stack Frameworks',
            description: 'Next.js, Nuxt.js, or similar integrated solutions',
            priority: 'important'
          },
          {
            name: 'System Design',
            description: 'Creating scalable, maintainable architecture',
            priority: 'important'
          },
          {
            name: 'Third-Party Integrations',
            description: 'Working with external APIs and services',
            priority: 'important'
          },
          {
            name: 'Performance Optimization',
            description: 'Frontend and backend optimization techniques',
            priority: 'advanced'
          }
        ]
      },
      {
        title: 'Professional Skills',
        items: [
          {
            name: 'Project Management',
            description: 'Planning, estimation, and coordination',
            priority: 'important'
          },
          {
            name: 'Technical Communication',
            description: 'Explaining complex concepts clearly',
            priority: 'important'
          },
          {
            name: 'Problem-Solving',
            description: 'Debugging across the entire stack',
            priority: 'core'
          },
          {
            name: 'Continuous Learning',
            description: 'Staying current with evolving technologies',
            priority: 'core'
          }
        ]
      }
    ]
  }
};
