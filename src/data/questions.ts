
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
    text: 'Você prefere passar o seu dia:',
    options: [
      {
        text: 'Projetar e implementar interfaces de usuário que as pessoas possam ver e interagir',
        category: 'frontend'
      },
      {
        text: 'Construindo sistemas e APIs poderosos que funcionam nos bastidores',
        category: 'backend'
      }
    ]
  },
  'frontend-fullstack': {
    id: 'tb-2',
    text: 'Qual abordagem ressoa mais com você?',
    options: [
      {
        text: 'Especializando-se profundamente na criação de experiências perfeitas para o usuário',
        category: 'frontend'
      },
      {
        text: 'Ter um conjunto de habilidades mais amplo que abrange o desenvolvimento visual e do lado do servidor',
        category: 'fullstack'
      }
    ]
  },
  'backend-fullstack': {
    id: 'tb-3',
    text: 'Qual cenário lhe agrada mais?',
    options: [
      {
        text: 'Com foco em bancos de dados, arquitetura de servidores e desempenho do sistema',
        category: 'backend'
      },
      {
        text: 'Trabalhando em toda a pilha, do banco de dados à interface do usuário',
        category: 'fullstack'
      }
    ]
  }
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Ao iniciar um novo projeto, qual aspecto mais te entusiasma?",
    answers: [
      {
        text: "Criação de interfaces visualmente atraentes",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      {
        text: "Projetando o banco de dados e a arquitetura do sistema",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Compreender todo o fluxo do projeto do início ao fim",
        scores: { frontend: 0.2, backend: 0.2, fullstack: 1.0 }
      },
      {
        text: "Focando em desafios técnicos específicos",
        scores: { frontend: 0.3, backend: 0.6, fullstack: 0.3 }
      }
    ]
  },
  {
    id: 2,
    text: "Você encontrou um bug no seu aplicativo. Como você o aborda?",
    answers: [
      {
        text: "Verifique se está visível na UI e reproduza-o por meio de interações do usuário",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Observe os logs do servidor e rastreie o fluxo de execução",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.5 }
      },
      {
        text: "Teste sistematicamente cada componente do sistema para isolar o problema",
        scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Pesquise problemas semelhantes online antes de tentar corrigi-los",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 0.4 }
      }
    ]
  },
  {
    id: 3,
    text: "Qual dessas ferramentas ou tecnologias mais lhe interessa?",
    answers: [
      {
        text: "Frameworks CSS e bibliotecas de animação",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.3 }
      },
      {
        text: "Bancos de dados e estruturas do lado do servidor",
        scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
      },
      {
        text: "Ferramentas DevOps e pipelines de implantação",
        scores: { frontend: 0.2, backend: 0.7, fullstack: 0.8 }
      },
      {
        text: "Ferramentas de design como Figma ou Adobe XD",
        scores: { frontend: 0.9, backend: 0.0, fullstack: 0.3 }
      }
    ]
  },
  {
    id: 4,
    text: "Como você prefere trabalhar em equipe?",
    answers: [
      {
        text: "Em estreita colaboração com designers e especialistas em UX",
        scores: { frontend: 0.9, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Independentemente de desafios técnicos complexos",
        scores: { frontend: 0.2, backend: 0.8, fullstack: 0.5 }
      },
      {
        text: "Como uma ponte entre diferentes equipes (design, negócios, etc.)",
        scores: { frontend: 0.5, backend: 0.3, fullstack: 1.0 }
      },
      {
        text: "Em sprints focados abordando recursos específicos",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 0.6 }
      }
    ]
  },
  {
    id: 5,
    text: "Que tipo de feedback mais motiva você?",
    answers: [
      {
        text: "Melhorias visuais e interativas no seu trabalho",
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
      },
      {
        text: "Reconhecimento pela resolução de problemas técnicos complexos",
        scores: { frontend: 0.2, backend: 0.9, fullstack: 0.6 }
      },
      {
        text: "Ver como seu trabalho se encaixa no cenário geral",
        scores: { frontend: 0.4, backend: 0.4, fullstack: 1.0 }
      },
      {
        text: "Métricas e dados mostrando desempenho aprimorado",
        scores: { frontend: 0.2, backend: 0.8, fullstack: 0.5 }
      }
    ]
  },
  {
    id: 6,
    text: "Quão importante é o aspecto visual de um aplicativo para você?",
    answers: [
      { 
        text: "Crítico – Acredito que a interface é a parte mais importante de qualquer aplicativo",
        scores: { frontend: 1.0, backend: 0.0, fullstack: 0.4 }
      },
      { 
        text: "Secundário – funcionalidade e desempenho importam mais do que aparência",
        scores: { frontend: 0.1, backend: 0.9, fullstack: 0.5 } 
      },
      {
         text: "Ambos são igualmente importantes para um aplicativo de sucesso",
         scores: { frontend: 0.6, backend: 0.4, fullstack: 1.0 }
      },
      {
         text: "Depende do aplicativo específico e de seus usuários", 
         scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 } 
      }
    ]
  },
  {
    id: 7,
    text: "Qual desses problemas você acharia mais desafiador e interessante?",
    answers: [
      { 
        text: "Criar um design responsivo e fiel ao layout em todos os dispositivos", 
        scores: { frontend: 1.0, backend: 0.2, fullstack: 0.6 } 
      },
      { 
        text: "Otimizar consultas de banco de dados para um aplicativo de alto tráfego", 
        scores: { frontend: 0.1, backend: 1.0, fullstack: 0.6 }
      },
      { 
        text: "Construir um recurso completo, do banco de dados até a interface", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 1.0 } 
      },
      { 
        text: "Implementar lógica de negócios complexa com precisão", 
        scores: { frontend: 0.3, backend: 0.9, fullstack: 0.7 } 
      }
    ]
  },
  {
    id: 8,
    text: "Qual é sua postura em relação ao aprendizado de novas tecnologias?",
    answers: [
      {
         text: "Foco em dominar frameworks de UI e ferramentas de design", 
         scores: { frontend: 1.0, backend: 0.2, fullstack: 0.6 } 
        },
      { 
        text: "Tenho interesse em tecnologias de servidor, bancos de dados e APIs", 
        scores: { frontend: 0.2, backend: 1.0, fullstack: 0.7 } 
      },
      { 
        text: "Gosto de aprender sobre toda a stack de tecnologia", 
        scores: { frontend: 0.7, backend: 0.7, fullstack: 1.0 } 
      },
      { 
        text: "Prefiro profundidade em vez de amplitude no meu conhecimento técnico", 
        scores: { frontend: 0.5, backend: 0.6, fullstack: 0.4 } 
      }
    ]
  },
  {
    id: 9,
    text: "O que mais te impressiona ao usar um aplicativo?",
    answers: [
      { text: "Animações suaves e interfaces intuitivas", 
        scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 } 
      },
      { text: "Desempenho rápido e confiabilidade sob carga pesada", 
        scores: { frontend: 0.3, backend: 1.0, fullstack: 0.7 } 
      },
      { text: "Integração fluida de recursos e dados complexos", 
        scores: { frontend: 0.5, backend: 0.7, fullstack: 1.0 } 
      },
      { text: "Recursos inteligentes que antecipam as necessidades do usuário", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 0.9 } 
      }
    ]
  },
  {
    id: 10,
    text: "Como você se sente sobre escrever documentação?",
    answers: [
      { 
        text: "Foco em criar guias visuais e bibliotecas de componentes de UI", 
        scores: { frontend: 1.0, backend: 0.3, fullstack: 0.6 } 
      },
      { 
        text: "Documento APIs, esquemas de banco de dados e arquitetura de sistema", scores: { frontend: 0.2, backend: 1.0, fullstack: 0.8 } },
      { 
        text: "Crio documentação abrangente cobrindo todos os aspectos", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 1.0 } 
      },
      { 
        text: "Prefiro que o código seja autodescritivo quando possível", 
        scores: { frontend: 0.4, backend: 0.6, fullstack: 0.5 } 
      }
    ]
  },
  {
    id: 11,
    text: "Que tipo de desafio de programação você mais gosta?",
    answers: [
      { 
        text: "Criar componentes de UI interativos com animações suaves", 
        scores: { frontend: 1.0, backend: 0.2, fullstack: 0.6 } 
      },
      { 
        text: "Otimizar algoritmos e resolver problemas de lógica complexos", 
        scores: { frontend: 0.3, backend: 1.0, fullstack: 0.7 } 
      },
      { 
        text: "Construir recursos completos que conectam front-end e back-end", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 1.0 } 
      },
      { 
        text: "Trabalhar com APIs de terceiros e integrações", 
        scores: { frontend: 0.4, backend: 0.7, fullstack: 0.9 } 
      }
    ]
  },
  {
    id: 12,
    text: "Com qual dessas afirmações você mais se identifica?",
    answers: [
      { 
        text: "Gosto de tornar as coisas visualmente atraentes e fáceis de usar", 
        scores: { frontend: 1.0, backend: 0.3, fullstack: 0.6 } 
      },
      { 
        text: "Gosto de resolver problemas complexos nos bastidores",
        scores: { frontend: 0.3, backend: 1.0, fullstack: 0.7 } 
      },
      { 
        text: "Quero entender e trabalhar em todos os aspectos de um aplicativo", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 1.0 } 
      },
      { 
        text: "Sou apaixonado por tecnologias específicas mais do que por papéis", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.5 } 
      }
    ]
  },
  {
    id: 13,
    text: "Como você aborda o aprendizado de um novo framework de programação?",
    answers: [
      { 
        text: "Tento imediatamente construir algo visual e interativo", 
        scores: { frontend: 1.0, backend: 0.2, fullstack: 0.5 } 
      },
      { 
        text: "Foco em entender a arquitetura principal e o fluxo de dados", 
        scores: { frontend: 0.3, backend: 1.0, fullstack: 0.8 } 
      },
      { 
        text: "Construo um aplicativo simples, mas completo, para entender todas as partes", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 1.0 } 
      },
      { 
        text: "Leio a documentação cuidadosamente antes de começar", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.6 } 
      }
    ]
  },
  {
    id: 14,
    text: "Em um projeto em equipe, para qual papel você naturalmente se inclina?",
    answers: [
      { 
        text: "Implementação de UI/UX e manutenção do sistema de design", 
        scores: { frontend: 1.0, backend: 0.3, fullstack: 0.6 } 
      },
      { 
        text: "Design de banco de dados e desenvolvimento de APIs", 
        scores: { frontend: 0.2, backend: 1.0, fullstack: 0.7 } 
      },
      {
         text: "Liderança técnica conectando diferentes componentes do sistema", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 1.0 } 
      },
      { 
        text: "Garantia de qualidade e testes", 
        scores: { frontend: 0.4, backend: 0.6, fullstack: 0.6 } 
      }
    ]
  },
  {
    id: 15,
    text: "O que você acha mais satisfatório no trabalho de desenvolvimento?",
    answers: [
      { 
        text: "Ver meus designs e interfaces ganharem vida", 
        scores: { frontend: 1.0, backend: 0.3, fullstack: 0.6 } 
      },
      { 
        text: "Criar sistemas eficientes que lidam com operações complexas", 
        scores: { frontend: 0.3, backend: 1.0, fullstack: 0.8 } 
      },
      { 
        text: "Entregar recursos completos que resolvem problemas reais de usuários", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 1.0 } 
      },
      { 
        text: "Aprendizado contínuo e domínio de novas habilidades", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 } 
      }
    ]
  },
  {
    id: 16,
    text: "Quão importante é a interação direta do usuário com o seu código?",
    answers: [
      { 
        text: "Muito importante – quero que os usuários experimentem diretamente meu trabalho", 
        scores: { frontend: 1.0, backend: 0.2, fullstack: 0.6 } 
      },
      { 
        text: "Menos importante – prefiro trabalhar em componentes que os usuários não veem", 
        scores: { frontend: 0.2, backend: 1.0, fullstack: 0.6 } 
      },
      { 
        text: "Valorizo igualmente o trabalho voltado ao usuário e nos bastidores", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 1.0 } 
      },
      { 
        text: "Depende dos requisitos específicos do projeto", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 } 
      }
    ]
  },
  {
    id: 17,
    text: "Qual desses tópicos você mais provavelmente pesquisaria no seu tempo livre?",
    answers: [
      { 
        text: "Tendências recentes de design de UI e técnicas de animação", 
        scores: { frontend: 1.0, backend: 0.2, fullstack: 0.6 } 
      },
      { 
        text: "Otimização de banco de dados ou arquitetura de servidor", 
        scores: { frontend: 0.2, backend: 1.0, fullstack: 0.7 } 
      },
      { 
        text: "Frameworks full-stack e estratégias de deployment", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 1.0 } 
      },
      { 
        text: "Linguagens de programação específicas, independentemente da aplicação", 
        scores: { frontend: 0.4, backend: 0.6, fullstack: 0.5 } 
      }
    ]
  },
  {
    id: 18,
    text: "Como você se sente em relação a apresentações públicas ou demonstrações?",
    answers: [
      {
         text: "Confortável – gosto de apresentar projetos e ideias", 
        scores: { frontend: 1.0, backend: 0.4, fullstack: 0.7 } 
      },
      { 
        text: "Prefiro deixar que outros façam as apresentações", 
        scores: { frontend: 0.3, backend: 0.7, fullstack: 0.5 } 
      },
      { 
        text: "Depende do público e do nível de preparação", 
        scores: { frontend: 0.5, backend: 0.5, fullstack: 0.6 } 
      },
      { 
        text: "Estou disposto a melhorar minhas habilidades de apresentação", 
        scores: { frontend: 0.6, backend: 0.6, fullstack: 0.8 } 
      }
    ]
  },
  {
  id: 19,
  text: "Em qual aspecto da qualidade do código você mais foca?",
  answers: [
    {
      text: "Reutilização de componentes e estilo consistente",
      scores: { frontend: 1.0, backend: 0.1, fullstack: 0.5 }
    },
    {
      text: "Otimização de performance e segurança",
      scores: { frontend: 0.1, backend: 1.0, fullstack: 0.5 }
    },
    {
      text: "Manutenibilidade e testes abrangentes",
      scores: { frontend: 0.3, backend: 0.5, fullstack: 1.0 }
    },
    {
      text: "Código limpo, legível e seguindo boas práticas",
      scores: { frontend: 0.5, backend: 0.5, fullstack: 0.7 }
    }
  ]
},
{
  id: 20,
  text: "Qual projeto você estaria mais empolgado em participar?",
  answers: [
    {
      text: "Um design system para uma grande marca com componentes de UI complexos",
      scores: { frontend: 1.0, backend: 0.0, fullstack: 0.3 }
    },
    {
      text: "Uma API de alta performance lidando com milhões de requisições",
      scores: { frontend: 0.0, backend: 1.0, fullstack: 0.4 }
    },
    {
      text: "Um produto completo, desde o banco de dados até a interface do usuário",
      scores: { frontend: 0.3, backend: 0.3, fullstack: 1.0 }
    },
    {
      text: "Uma ferramenta que automatiza tarefas repetitivas de desenvolvimento",
      scores: { frontend: 0.2, backend: 0.7, fullstack: 0.5 }
    }
  ]
}

];
