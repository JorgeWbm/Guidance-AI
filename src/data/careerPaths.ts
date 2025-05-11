
export interface SkillItem {
  name: string;
  description: string;
  priority: 'Essencial' | 'Importante' | 'Avançado';
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
    title: 'Desenvolvedor Front-End',
    description: 'Como Desenvolvedor Front-End, você se especializará na criação de interfaces de usuário atraentes e interativas. Você trabalhará em estreita colaboração com designers para dar vida a conceitos visuais e garantir que os aplicativos sejam responsivos e acessíveis em todos os dispositivos. Seu foco será proporcionar experiências excepcionais ao usuário por meio de um código limpo e eficiente.',
    icon: 'monitor',
    color: 'neon-blue',
    sections: [
      {
        title: 'Tecnologias principais',
        items: [
          {
            name: 'HTML 5',
            description: 'Marcação semântica, acessibilidade e estrutura',
            priority: 'Essencial'
          },
          {
            name: 'CSS 3',
            description: 'Estilo, layouts, animações e design responsivo',
            priority: 'Essencial'
          },
          {
            name: 'JavaScript',
            description: 'Manipulação de DOM, eventos e recursos modernos do ES6+',
            priority: 'Essencial'
          },
          {
            name: 'Design Responsivo',
            description: 'Criação de interfaces que funcionam em todos os dispositivos e tamanhos de tela',
            priority: 'Essencial'
          }
        ]
      },
      {
        title: 'Frameworks & Bibliotecas',
        items: [
          {
            name: 'React',
            description: 'Component-based UI development with hooks and state management',
            priority: 'Essencial'
          },
          {
            name: 'CSS Frameworks',
            description: 'Tailwind CSS, Tailwind CSS, Bootstrap ou Material UI, or Material UI',
            priority: 'Importante'
          },
          {
            name: 'Gestão Estadual',
            description: 'Redux, API de contexto ou Zustand',
            priority: 'Importante'
          },
          {
            name: 'TypeScript',
            description: 'Desenvolvimento JavaScript com Type-safe',
            priority: 'Importante'
          }
        ]
      },
      {
        title: 'Design & Experiência do usuário',
        items: [
          {
            name: 'Principios UX/UI',
            description: 'Compreendendo o design centrado no usuário e os padrões de interação',
            priority: 'Importante'
          },
          {
            name: 'Ferramentas de Design',
            description: 'Figma, Adobe XD ou Sketch',
            priority: 'Importante'
          },
          {
            name: 'Arquitetura CSS',
            description: 'BEM, Módulos CSS ou Componentes Estilizados',
            priority: 'Importante'
          },
          {
            name: 'Animações',
            description: 'Animações CSS, Framer Motion ou GSAP',
            priority: 'Avançado'
          }
        ]
      },
      {
        title: 'Testes & Ferramentas',
        items: [
          {
            name: 'Controle de versão',
            description: 'Fluxos de trabalho e colaboração do Git',
            priority: 'Essencial'
          },
          {
            name: 'Testes',
            description: 'Jest, React Testing Library ou Cypress',
            priority: 'Importante'
          },
          {
            name: 'Otimização de desempenho',
            description: 'Carregamento lento, divisão de código e otimização de pacotes',
            priority: 'Avançado'
          },
          {
            name: 'Ferramentas de desenvolvimento do navegador',
            description: 'Depuração, criação de perfil de desempenho e análise de rede',
            priority: 'Essencial'
          }
        ]
      },
      {
        title: 'Habilidades Avançadas',
        items: [
          {
            name: 'Acessibilidade (a11y)',
            description: 'Construindo interfaces inclusivas que funcionem para todos',
            priority: 'Importante'
          },
          {
            name: 'Aplicativos Web Progressivos',
            description: 'Criação de aplicativos web instaláveis ​​com suporte offline',
            priority: 'Avançado'
          },
          {
            name: 'Internacionalização',
            description: 'Criação de aplicativos que suportam vários idiomas',
            priority: 'Avançado'
          },
          {
            name: 'Componetes Web',
            description: 'Criação de elementos personalizados reutilizáveis',
            priority: 'Avançado'
          }
        ]
      }
    ]
  },
  'backend': {
    id: 'backend',
    title: 'Desenvolvedor Back-End',
    description: 'Como Desenvolvedor Back-End, você construirá os sistemas centrais que alimentam os aplicativos. Você se concentrará em lógica de servidor, bancos de dados, segurança e otimização de desempenho. Seu trabalho acontece nos bastidores, mas é fundamental para a criação de aplicativos confiáveis ​​e escaláveis ​​que possam atender às demandas dos usuários.',
    icon: 'database',
    color: 'neon-purple',
    sections: [
      {
      
        title: 'Essencial Tecnologias',
        items: [
          {
            name: 'Linguagens do lado do servidor',
            description: 'JavaScript (Node.js), Python, Java ou C#',
            priority: 'Essencial'
          },
          {
            name: 'Banco de dados',
            description: 'SQL (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis)',
            priority: 'Essencial'
          },
          {
            name: 'Desenvolvimento de APIs',
            description: 'Princípios RESTful, métodos HTTP e códigos de status',
            priority: 'Essencial'
          },
          {
            name: 'Autenticação e Autorização',
            description: 'JWT, OAuth e práticas recomendadas de segurança',
            priority: 'Essencial'
          }
        ]
      },
      {
        title: 'Estruturas e Bibliotecas',
        items: [
          {
            name: 'Node.js e Express',
            description: 'Construindo APIs e aplicativos de servidor com JavaScript',
            priority: 'Essencial'
          },
          {
            name: 'ORM/ODM',
            description: 'Sequelize, TypeORM ou Mongoose',
            priority: 'Importante'
          },
          {
            name: 'Documentação da API',
            description: 'Swagger/OpenAPI para contratos de API claros',
            priority: 'Importante'
          },
          {
            name: 'GraphQL',
            description: 'Definição de esquema e resolvedores',
            priority: 'Avançado'
          }
        ]
      },
      {
        title: 'DevOps e Infraestrutura',
        items: [
          {
            name: 'Docker',
            description: 'Contêineres de aplicativos para ambientes consistentes',
            priority: 'Importante'
          },
          {
            name: 'CI/CD',
            description: 'Pipelines automatizados de testes e implantação',
            priority: 'Importante'
          },
          {
            name: 'Monitoramento e registro',
            description: 'Rastreamento de erros, monitoramento de desempenho e gerenciamento de logs',
            priority: 'Importante'
          },
          {
            name: 'Serviços em nuvem',
            description: 'AWS, Azure ou Google Cloud Platform',
            priority: 'Importante'
          }
        ]
      },
      {
        title: 'Habilidades de banco de dados',
        items: [
          {
            name: 'banco de dados Design',
            description: 'Normalização, relacionamentos e otimização de esquemas',
            priority: 'Importante'
          },
          {
            name: 'Otimização de consulta',
            description: 'Estratégias de ajuste de desempenho e indexação',
            priority: 'Importante'
          },
          {
            name: 'Migrações de dados',
            description: 'Gerenciando alterações de esquema com segurança',
            priority: 'Importante'
          },
          {
            name: 'Estratégias de Cache',
            description: 'Redis, cache na memória e cache de resultados de consulta',
            priority: 'Avançado'
          }
        ]
      },
      {
        title: 'Habilidades Avançadas',
        items: [
          {
            name: 'Segurança',
            description: 'Práticas de segurança OWASP, validação de entrada e proteção contra ataques comuns',
            priority: 'Importante'
          },
          {
            name: 'Microsserviços',
            description: 'Padrões de projeto de sistemas distribuídos',
            priority: 'Avançado'
          },
          {
            name: 'Filas de mensagens',
            description: 'RabbitMQ, Kafka ou SQS para processamento assíncrono',
            priority: 'Avançado'
          },
          {
            name: 'Sem servidor',
            description: 'Arquiteturas de função como serviço e orientadas a eventos',
            priority: 'Avançado'
          }
        ]
      }
    ]
  },
  'fullstack': {
    id: 'fullstack',
    title: 'Desenvolvedor Full-Stack',
    description: 'Como Desenvolvedor Full-Stack, você trabalhará em toda a aplicação, do banco de dados à interface do usuário. Você terá um amplo conjunto de habilidades que lhe permitirá desenvolver recursos completos e entender como todas as partes de um sistema se conectam. Essa versatilidade permite que você enfrente diversos desafios e acompanhe os projetos do início ao fim.',
    icon: 'code',
    color: 'neon-pink',
    sections: [
      {
        title: 'Habilidades Front-End',
        items: [
          {
            name: 'HTML/CSS/JavaScript',
            description: 'Tecnologias web essenciais e design responsivo',
            priority: 'Essencial'
          },
          {
            name: 'UI Frameworks',
            description: 'React, Angular ou Vue',
            priority: 'Essencial'
          },
          {
            name: 'Gestão Estadual',
            description: 'Gerenciando o fluxo de dados do aplicativo',
            priority: 'Importante'
          },
          {
            name: 'CSS moderno',
            description: 'Flexbox, Grid e CSS-in-JS',
            priority: 'Importante'
          }
        ]
      },
      {
        title: 'Habilidades de Back-End',
        items: [
          {
            name: 'Linguagens do lado do servidor',
            description: 'Node.js, Python ou outra linguagem',
            priority: 'Essencial'
          },
          {
            name: 'Database Management',
            description: 'Bancos de dados SQL e/ou NoSQL',
            priority: 'Essencial'
          },
          {
            name: 'Desenvolvimento de APIs',
            description: 'APIs RESTful ou GraphQL',
            priority: 'Essencial'
          },
          {
            name: 'Autenticação',
            description: 'Gerenciamento e segurança de usuários',
            priority: 'Importante'
          }
        ]
      },
      {
        title: 'DevOps e Implantação',
        items: [
          {
            name: 'Controle de versão',
            description: 'Fluxos de trabalho e colaboração do Git',
            priority: 'Essencial'
          },
          {
            name: 'Pipelines de CI/CD',
            description: 'Teste e implantação automatizados',
            priority: 'Importante'
          },
          {
            name: 'Conteinerização',
            description: 'Orquestração de Docker e contêineres',
            priority: 'Importante'
          },
          {
            name: 'Serviços em nuvem',
            description: 'AWS, Azure ou Google Cloud Platform',
            priority: 'Importante'
          }
        ]
      },
      {
        title: 'Arquitetura e Integração',
        items: [
          {
            name: 'Frameworks Full-Stack',
            description: 'Next.js, Nuxt.js ou soluções integradas semelhantes',
            priority: 'Importante'
          },
          {
            name: 'Projeto do sistema',
            description: 'Criando arquitetura escalável e sustentável',
            priority: 'Importante'
          },
          {
            name: 'Integrações de terceiros',
            description: 'Trabalhando com APIs e serviços externos',
            priority: 'Importante'
          },
          {
            name: 'Otimização de desempenho',
            description: 'Técnicas de otimização de frontend e backend',
            priority: 'Avançado'
          }
        ]
      },
      {
        title: 'Habilidades Profissionais',
        items: [
          {
            name: 'Gerenciamento de projetos',
            description: 'Planejamento, estimativa e coordenação',
            priority: 'Importante'
          },
          {
            name: 'Comunicação Técnica',
            description: 'Explicando conceitos complexos claramente',
            priority: 'Importante'
          },
          {
            name: 'Resolução de problemas',
            description: 'Depuração em toda a pilha',
            priority: 'Essencial'
          },
          {
            name: 'Aprendizagem Contínua',
            description: 'Mantendo-se atualizado com as tecnologias em evolução',
            priority: 'Essencial'
          }
        ]
      }
    ]
  }
};
