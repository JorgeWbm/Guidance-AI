
import { useQuiz } from "@/context/QuizContext";
import ProgressBar from "../common/ProgressBar";
import { motion } from "framer-motion";

export default function QuizQuestion() {
  const { currentQuestion, answerQuestion, currentStep, totalSteps } = useQuiz();

  if (!currentQuestion) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
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

  const handleAnswer = (answerIndex: number) => {
    answerQuestion(currentQuestion.id, answerIndex);
  };

  return (
    <div className="quiz-container">
      <motion.div 
        className="quiz-card"
        key={currentQuestion.id}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ProgressBar current={currentStep} total={totalSteps} className="mb-8" />

        <motion.h2 
          className="text-2xl font-semibold mb-6" 
          variants={itemVariants}
        >
          {currentQuestion.text}
        </motion.h2>

        <motion.div 
          className="space-y-4 mb-4"
          variants={containerVariants}
        >
          {currentQuestion.answers.map((answer, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 rounded-lg border border-border/40 bg-muted/20 hover:bg-muted/30 transition-colors duration-200 relative group"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <span className="flex items-center justify-center min-w-[24px] h-6 rounded-full border border-primary/50 text-sm mr-3 mt-0.5 group-hover:border-primary transition-colors">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{answer.text}</span>
              </div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary/50"></div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
