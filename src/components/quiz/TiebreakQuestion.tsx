
import { useQuiz } from "@/context/QuizContext";
import { tiebreakQuestions } from "@/data/questions";
import { motion } from "framer-motion";

export default function TiebreakQuestion() {
  const { tiebreakQuestion, handleTiebreakAnswer } = useQuiz();

  if (!tiebreakQuestion || !tiebreakQuestions[tiebreakQuestion]) return null;

  const question = tiebreakQuestions[tiebreakQuestion];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="quiz-container">
      <motion.div 
        className="quiz-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30"
          variants={itemVariants}
        >
          <h3 className="text-lg font-medium mb-1">We need your help with one final question</h3>
          <p className="text-muted-foreground text-sm">
            Your answers show you could excel in multiple areas. 
            This question will help us determine your ideal path.
          </p>
        </motion.div>

        <motion.h2 
          className="text-2xl font-semibold mb-6" 
          variants={itemVariants}
        >
          {question.text}
        </motion.h2>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleTiebreakAnswer(option.category)}
              className="w-full text-left p-4 rounded-lg border border-border/40 bg-muted/20 hover:bg-muted/30 transition-colors duration-200 relative group"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <span className="flex items-center justify-center min-w-[24px] h-6 rounded-full border border-primary/50 text-sm mr-3 mt-0.5 group-hover:border-primary transition-colors">
                  {index + 1}
                </span>
                <span>{option.text}</span>
              </div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary/50"></div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
