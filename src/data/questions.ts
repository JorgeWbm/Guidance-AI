
export type PathCategory = 'frontend' | 'backend' | 'fullstack';

export interface Answer {
  text: string;
  scores: Record<PathCategory, number>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface TiebreakQuestion {
  id: string;
  text: string;
  options: {
    text: string;
    category: PathCategory;
  }[];
}

export const tiebreakQuestions: Record<string, TiebreakQuestion> = {
  'frontend-backend': {
    id: 'tb-1',
    text: 'Would you rather spend your day:',
    options: [
      {
        text: 'Designing and implementing user interfaces that people can see and interact with',
        category: 'frontend'
      },
      {
        text: 'Building powerful systems and APIs that work behind the scenes',
        category: 'backend'
      }
    ]
  },
  'frontend-fullstack': {
    id: 'tb-2',
    text: 'Which approach resonates more with you?',
    options: [
      {
        text: 'Specializing deeply in creating perfect user experiences',
        category: 'frontend'
      },
      {
        text: 'Having a broader skillset that covers both visual and server-side development',
        category: 'fullstack'
      }
    ]
  },
  'backend-fullstack': {
    id: 'tb-3',
    text: 'Which scenario appeals to you more?',
    options: [
      {
        text: 'Focusing on databases, server architecture, and system performance',
        category: 'backend'
      },
      {
        text: 'Working across the entire stack, from database to user interface',
        category: 'fullstack'
      }
    ]
  }
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "When starting a new project, what aspect excites you the most?",
    answers: [
      {
        text: "Creating visually appealing interfaces",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Designing the database and system architecture",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Understanding the entire project flow from beginning to end",
        scores: { frontend: 0.2, backend: 0.2, fullstack: 1.0 }
      },
      {
        text: "Focusing on specific technical challenges",
        scores: { frontend: 0.3, backend: 0.6, fullstack: 0.3 }
      }
    ]
  },
  {
    id: 2,
    text: "You encounter a bug in your application. How do you approach it?",
    answers: [
      {
        text: "Check if it's visible in the UI and reproduce it through user interactions",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Look at server logs and trace through the execution flow",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "Systematically test each component of the system to isolate the issue",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Search for similar issues online before attempting to fix it",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 0.4 }
      }
    ]
  },
  {
    id: 3,
    text: "Which of these tools or technologies interests you the most?",
    answers: [
      {
        text: "CSS frameworks and animation libraries",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.3 }
      },
      {
        text: "Databases and server-side frameworks",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "DevOps tools and deployment pipelines",
        scores: { frontend: 0.2, backend: 0.7, fullstack: 0.8 }
      },
      {
        text: "Design tools like Figma or Adobe XD",
        scores: { frontend: 0.9, backend: 0.0, fullstack: 0.3 }
      }
    ]
  },
  {
    id: 4,
    text: "How do you prefer to work within a team?",
    answers: [
      {
        text: "Closely with designers and UX specialists",
        scores: { frontend: 0.9, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Independently on complex technical challenges",
        scores: { frontend: 0.2, backend: 0.8, fullstack: 0.5 }
      },
      {
        text: "As a bridge between different teams (design, business, etc.)",
        scores: { frontend: 0.5, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "In focused sprints tackling specific features",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 0.6 }
      }
    ]
  },
  {
    id: 5,
    text: "What type of feedback motivates you the most?",
    answers: [
      {
        text: "Visual and interactive improvements to your work",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Recognition for solving complex technical problems",
        scores: { frontend: 0.2, backend: 0.9, fullstack: 0.6 }
      },
      {
        text: "Seeing how your work fits into the bigger picture",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "Metrics and data showing improved performance",
        scores: { frontend: 0.2, backend: 0.8, fullstack: 0.5 }
      }
    ]
  },
  {
    id: 6,
    text: "How important is the visual aspect of an application to you?",
    answers: [
      {
        text: "Critical - I believe the UI is the most important part of any application",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Secondary - functionality and performance matter more than looks",
        scores: { frontend: 0.1, backend: 0.9, fullstack: 0.5 }
      },
      {
        text: "Both are equally important for a successful application",
        scores: { frontend: 0.6, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "It depends on the specific application and its users",
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 }
      }
    ]
  },
  {
    id: 7,
    text: "Which of these problems would you find most challenging and interesting?",
    answers: [
      {
        text: "Creating a pixel-perfect, responsive design across all devices",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.3 }
      },
      {
        text: "Optimizing database queries for a high-traffic application",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Building a complete feature from database to UI",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Implementing complex business logic accurately",
        scores: { frontend: 0.1, backend: 0.8, fullstack: 0.5 }
      }
    ]
  },
  {
    id: 8,
    text: "What's your stance on learning new technologies?",
    answers: [
      {
        text: "I focus on mastering UI frameworks and design tools",
        scores: { frontend: 0.9, backend: 0.1, fullstack: 0.4 }
      },
      {
        text: "I'm interested in server technologies, databases, and APIs",
        scores: { frontend: 0.1, backend: 0.9, fullstack: 0.5 }
      },
      {
        text: "I enjoy learning across the entire technology stack",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "I prefer depth over breadth in my technical knowledge",
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.2 }
      }
    ]
  },
  {
    id: 9,
    text: "When using an application, what impresses you most?",
    answers: [
      {
        text: "Smooth animations and intuitive user interfaces",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Fast performance and reliability under heavy load",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "Seamless integration of complex features and data",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "Smart features that anticipate user needs",
        scores: { frontend: 0.6, backend: 0.2, fullstack: 0.5 }
      }
    ]
  },
  {
    id: 10,
    text: "How do you feel about writing documentation?",
    answers: [
      {
        text: "I focus on creating visual guides and UI component libraries",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "I document APIs, database schemas, and system architecture",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "I create comprehensive documentation covering all aspects",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "I prefer code to be self-documenting when possible",
        scores: { frontend: 0.4, backend: 0.5, fullstack: 0.4 }
      }
    ]
  },
  {
    id: 11,
    text: "What type of coding challenge do you enjoy most?",
    answers: [
      {
        text: "Creating interactive UI components with smooth animations",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Optimizing algorithms and solving complex logic problems",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Building full features that connect frontend to backend",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Working with third-party APIs and integrations",
        scores: { frontend: 0.3, backend: 0.6, fullstack: 0.5 }
      }
    ]
  },
  {
    id: 12,
    text: "Which statement resonates with you most?",
    answers: [
      {
        text: "I enjoy making things visually appealing and user-friendly",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "I like solving complex problems behind the scenes",
        scores: { frontend: 0.1, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "I want to understand and work on all aspects of an application",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "I'm passionate about specific technologies rather than roles",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 0.3 }
      }
    ]
  },
  {
    id: 13,
    text: "How do you approach learning a new programming framework?",
    answers: [
      {
        text: "I immediately try to build something visual and interactive",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "I focus on understanding the core architecture and data flow",
        scores: { frontend: 0.1, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "I build a simple but complete application to understand all parts",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "I read the documentation thoroughly before starting",
        scores: { frontend: 0.4, backend: 0.5, fullstack: 0.4 }
      }
    ]
  },
  {
    id: 14,
    text: "In a team project, which role would you naturally gravitate towards?",
    answers: [
      {
        text: "UI/UX implementation and design system maintenance",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Database design and API development",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Technical leadership connecting different system components",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Quality assurance and testing",
        scores: { frontend: 0.4, backend: 0.5, fullstack: 0.5 }
      }
    ]
  },
  {
    id: 15,
    text: "What do you find most satisfying in development work?",
    answers: [
      {
        text: "Seeing my designs and interfaces come to life",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Creating efficient systems that handle complex operations",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Delivering complete features that solve real user problems",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Continuous learning and mastering new skills",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 0.6 }
      }
    ]
  },
  {
    id: 16,
    text: "How important is direct user interaction with your code?",
    answers: [
      {
        text: "Very important - I want users to directly experience my work",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.5 }
      },
      {
        text: "Less important - I prefer working on components users don't see",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.3 }
      },
      {
        text: "I value both user-facing and behind-the-scenes work equally",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "It depends on the specific project requirements",
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 }
      }
    ]
  },
  {
    id: 17,
    text: "Which of these topics would you most likely research in your free time?",
    answers: [
      {
        text: "Latest UI design trends and animation techniques",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.3 }
      },
      {
        text: "Database optimization or server architecture",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.3 }
      },
      {
        text: "Full-stack frameworks and deployment strategies",
        scores: { frontend: 0.2, backend: 0.2, fullstack: 1.0 }
      },
      {
        text: "Specific programming languages regardless of their application",
        scores: { frontend: 0.3, backend: 0.5, fullstack: 0.4 }
      }
    ]
  },
  {
    id: 18,
    text: "How do you feel about public speaking or demo presentations?",
    answers: [
      {
        text: "I enjoy showcasing UI features and design decisions",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "I prefer discussing technical architecture and system design",
        scores: { frontend: 0.1, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "I'm comfortable presenting on any aspect of the project",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "I'd rather let my code speak for itself",
        scores: { frontend: 0.4, backend: 0.6, fullstack: 0.3 }
      }
    ]
  },
  {
    id: 19,
    text: "What aspect of code quality do you focus on most?",
    answers: [
      {
        text: "Component reusability and consistent styling",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Performance optimization and security",
        scores: { frontend: 0.1, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "Maintainability and comprehensive testing",
        scores: { frontend: 0.3, backend: 0.5, fullstack: 1.0 }
      },
      {
        text: "Clean, readable code following best practices",
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 }
      }
    ]
  },
  {
    id: 20,
    text: "Which project would you be most excited to work on?",
    answers: [
      {
        text: "A design system for a major brand with complex UI components",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.3 }
      },
      {
        text: "A high-performance API handling millions of requests",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "A complete product from database design to user interface",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "A tool that automates repetitive development tasks",
        scores: { frontend: 0.2, backend: 0.7, fullstack: 0.5 }
      }
    ]
  }
];
