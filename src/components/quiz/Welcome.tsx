
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { ChevronRight, Code, Database, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function Welcome() {
  const { startQuiz } = useQuiz();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      className="quiz-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="quiz-card"
        variants={itemVariants}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
          Encontre a sua carreira ideal em tecnologia
        </h1>
        
        <motion.p 
          className="text-muted-foreground mb-8"
          variants={itemVariants}
        >
          Não tem certeza se deve focar em desenvolvimento front-end, back-end ou full-stack?
          Faça este teste para descobrir qual caminho se alinha melhor com seus interesses,
          preferências e habilidades naturais.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={itemVariants}
        >
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-blue-500/10 mr-3">
                <Monitor className="w-5 h-5 text-neon-blue" />
              </div>
              <h3 className="font-semibold text-neon-blue">Front-End</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Crie interfaces de usuário atraentes e interativas. Concentre-se no que os usuários veem e com o que interagem.
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-purple-500/10 mr-3">
                <Database className="w-5 h-5 text-neon-purple" />
              </div>
              <h3 className="font-semibold text-neon-purple">Back-End</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Crie os sistemas lógicos e de dados que alimentam os aplicativos. Trabalhe com bancos de dados e tecnologias de servidor.
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-pink-500/10 mr-3">
                <Code className="w-5 h-5 text-neon-pink" />
              </div>
              <h3 className="font-semibold text-neon-pink">Full-Stack</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Torne-se versátil dominando front-end e back-end. Crie aplicativos completos do início ao fim.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mb-6 p-4 rounded-lg bg-muted/20 border border-muted"
          variants={itemVariants}
        >
          <h4 className="font-semibold mb-2">Como funciona:</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Responda a 20 perguntas sobre suas preferências e interesses</li>
            <li>Analisaremos suas respostas para determinar seu caminho ideal</li>
            <li>Receba um roteiro de carreira personalizado com base nos seus resultados</li>
            <li>Todas as perguntas são elaboradas para avaliar suas tendências e preferências naturais</li>
          </ul>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <Button 
            onClick={startQuiz} 
            className="neon-button"
            size="lg"
          >
            Começe o Quiz <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
